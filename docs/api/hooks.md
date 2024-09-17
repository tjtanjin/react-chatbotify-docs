---
sidebar_position: 7
title: Hooks
description: API documentation for chatbot hooks
keywords: [react, chat, chatbot, chatbotify]
---

# Hooks

This page documents all the available custom `hooks` provided by the library. These hooks allow you to interact (externally from your own components) with various parts of the chatbot, such as **toggling audio**, **handling messages**, and **controlling the chat window state**!

:::tip Tip
Hooks are only relevant if you intend to interact with the chatbot functionalities (e.g. toggle audio or chat window) from **outside the chatbot and within your own component**. If you have no such use case, you may skip hooks entirely!
:::

Note that in order to import and use these custom hooks within your components, you first need to import `ChatBotProvider` and nest your components as its children. We'll look at 2 scenarios below.


**Scenario 1:** If you have no need for custom hooks, then you **do not need** to import `ChatBotProvider` and can simply use `ChatBot`. This is likely the scenario for a vast majority of users:

```jsx title=MyComponent.js
import ChatBot from "react-chatbotify";

const MyComponent = () => {
  return (
    <ChatBot/> {/* no custom hooks needed */}
  );
};
```

**Scenario 2:** If you require custom hooks to interact with the chatbot (e.g. toggle audio) from within your own components, you need to import `ChatBotProvider` and ensure that your components that need the hooks are nested within it:

```jsx title=MyComponent.js
import ChatBot, { ChatBotProvider } from "react-chatbotify";

const MyComponent = () => {
  return (
    <>
      <MyNotNestedComponent> {/* unable to access custom hooks */}
      <ChatBotProvider>
        <MyNestedComponent> {/* able to access custom hooks (e.g. useAudio) */}
        <ChatBot/>
      </ChatBotProvider>
    </>
  );
};
```

```jsx title=MyNestedComponent
import { useAudio } from "react-chatbotify";

const MyNestedComponent = () => {
  // can use custom hook
  const { toggleAudio } = useAudio();

  return (
    <button onClick={toggleAudio}></button>
  )
};

const MyNotNestedComponent = () => {
  // error, cannot use custom hook since outside of ChatBotProvider
  const { toggleAudio } = useAudio();

  return (
    <button onClick={toggleAudio}></button>
  )
};
```

:::warning Warning
It is a common mistake to import these custom hooks from a component outside of `<ChatBotProvider>`. If you're running into issues, make sure to check that your component is nested properly as a child of `<ChatBotProvider>`!
:::

:::tip Tip
An extensive example featuring how various hooks may be used can be found [**here**](/docs/examples/custom_hooks).
:::

## Overview

Below is a list of available hooks along with a brief description for each of them:

| Name                | Description                                                                             |
| ------------------- | --------------------------------------------------------------------------------------- |
| useAudio            | Manages audio functionalities, such as toggling audio on or off.                        |
| useChatWindow       | Manages the state of the chatbot window (open/close).                                   |
| useFirstInteraction | Detects and tracks the user's first interaction with the chatbot.                       |
| useMessages         | Handles sending, clearing, and retrieving messages in the chatbot.                      |
| useNotifications    | Manages chatbot notifications, such as toggling notifications on or off.                |
| usePaths            | Manages chatbot conversation paths, such as navigation                                  |
| useSettings         | Accesses and modifies chatbot settings.                                                 |
| useStyles           | Accesses and modifies chatbot styles.                                                   |
| useTextArea         | Manages the text input area of the chatbot, including setting and clearing values.      |
| useToast            | Manages toasts shown within the chatbot, such as showing or missing them.               |
| useVoice            | Manages voice functionality, such as toggling voice on or off                           |

## Hook Details

Below is a detailed description of each hook and the functions they expose.

---

### useAudio

#### Description
The `useAudio` hook allows you to track and manage the chatbot's audio functionality.

#### Return Values
| Name           | Type       | Description                                            |
| -------------- | ---------- | ------------------------------------------------------ |
| audioToggledOn | `boolean ` | Indicates if the chatbot audio is currently on or off. |
| toggleAudio    | `function` | Toggles the chatbot audio on or off.                   |

#### Code Example
```jsx
import { useAudio } from "react-chatbotify";

const MyNestedComponent = () => {
  const { toggleAudio } = useAudio();

  return (
    <button onClick={toggleAudio}></button>
  )
};
```

### useChatWindow

#### Description
The `useChatWindow` hook allows you to track and manage the chatbot's window state.

#### Return Values
| Name                | Type       | Description                                              |
| ------------------- | ---------- | -------------------------------------------------------- |
| isChatWindowOpen    | `boolean`  | Indicates if the chat window is currently open or close. |
| toggleChatWindow    | `function` | Toggles the chat window open or close.                   |

#### Code Example
```jsx
import { useChatWindow } from "react-chatbotify";

const MyNestedComponent = () => {
  const { toggleChatWindow } = useChatWindow();

  return (
    <button onClick={toggleChatWindow}></button>
  )
};
```

### useFirstInteraction

#### Description
The `useFirstInteraction` hook allows you to track if a page has been interacted with and whether the chatbot flow has started.

#### Return Values
| Name                | Type       | Description                                              |
| ------------------- | ---------- | -------------------------------------------------------- |
| hasInteractedPage   | `boolean`  | Indicates if the page has been interacted with.          |
| hasFlowStarted      | `boolean`  | Indicates if the chatbot flow has started.               |

#### Code Example
```jsx
import { useEffect } from "react";
import { useFirstInteraction } from "react-chatbotify";

const MyNestedComponent = () => {
  const { hasFlowStarted } = useFirstInteraction();

  useEffect(() => {
    // do something if flow has started
  }, [hasFlowStarted])

  return (
    <ExampleComponent/>
  )
};
```

### useMessages

#### Description
The `useMessages` hook allows you to track and manage the chatbot's messages.

#### Return Values
| Name                | Type        | Description                                              |
| ------------------- | ----------- | -------------------------------------------------------- |
| injectMessage | `async function` | A utility function used to inject a message into the chat, identical to `params.injectMessage` detailed [**here**](/docs/api/params#injectmessage).                                                                                         |                                        |
| streamMessage | `async function` | A utility function used to stream messages into the chat, identical to `params.streamMessage` detailed [**here**](/docs/api/params#streammessage).                                                                                          |                                        |
| endStreamMessage    | `async function`  | A utility function used to indicate the end of an existing message stream, identical to `params.endMessageStream` detailed [**here**](/docs/api/params#endstreammessage).                   |
| removeMessage       | `async function`  | A utility function used to remove a message from the chat, identical to `params.removeMessage` detailed [**here**](/docs/api/params#removemessage).                  |
| messages            | `Array<Message>`     | Array containing all messages currently shown in the chatbot.                  |
| setMessages         | `function`  | Setter for manipulating messages array directly, **not recommended** to use this so proceed with caution.                  |

#### Code Example
```jsx
import { useEffect } from "react";
import { useMessages } from "react-chatbotify";

const MyNestedComponent = () => {
  const { injectMessage } = useMessages();

  useEffect(() => {
    // inject custom message
    injectMessage("my custom message");
  }, [])

  return (
    <ExampleComponent/>
  )
};
```

### useNotifications

#### Description
The `useNotifications` hook allows you to track and manage the chatbot's notifications functionality.

#### Return Values
| Name                   | Type       | Description                                                    |
| ---------------------- | ---------- | -------------------------------------------------------------- |
| notificationsToggledOn | `boolean ` | Indicates if the chatbot notifications is currently on or off. |
| toggleNotifications    | `function` | Toggles the chatbot notifications on or off.                   |
| playNotificationSound  | `function` | Plays the notification sound.                                  |

#### Code Example
```jsx
import { useNotifications } from "react-chatbotify";

const MyNestedComponent = () => {
  const { toggleNotifications } = useNotifications();

  return (
    <button onClick={toggleNotifications}></button>
  )
};
```

### usePaths

#### Description
The `usePaths` hook allows you to track and manage the chatbot's paths.

#### Return Values
| Name                | Type        | Description                                              |
| ------------------- | ----------- | -------------------------------------------------------- |
| getCurrPath         | `function`  | Retrieves the current path of the user.                  |
| getPrevPath         | `function`  | Retrieves the previous path of the user.                 |
| goToPath            | `function`  | Sends the user to a specified path, identical to `params.goToPath` detailed [**here**](/docs/api/params#gotopath).                  |
| paths               | `Array<string>`     | Array containing all paths the user has taken in order.      |
| setPaths            | `function`  | Setter for manipulating paths array directly, **not recommended** to use this so proceed with caution.                 |

#### Code Example
```jsx
import { useEffect } from "react";
import { usePaths } from "react-chatbotify";

const MyNestedComponent = () => {
  const { goToPath } = usePaths();

  useEffect(() => {
    // go to custom path
    goToPath("my-custom-path");
  }, [])

  return (
    <ExampleComponent/>
  )
};
```

### useSettings

#### Description
The `useSettings` hook allows you to track and manage the chatbot's settings.

#### Return Values
| Name                | Type        | Description                                              |
| ------------------- | ----------- | -------------------------------------------------------- |
| settings            | `Settings`  | Represents the current settings of the chatbot.          |
| setSettings         | `function`  | Setter for manipulating bot settings.                    |

#### Code Example
```jsx
import { useEffect } from "react";
import { useSettings } from "react-chatbotify";

const MyNestedComponent = () => {
  const { settings } = useSettings();

  useEffect(() => {
    if (settings.general?.embedded) {
      // do something if chatbot is embedded
    }
  }, [])

  return (
    <ExampleComponent/>
  )
};
```

### useStyles

#### Description
The `useStyles` hook allows you to track and manage the chatbot's styles.

#### Return Values
| Name                | Type        | Description                                              |
| ------------------- | ----------- | -------------------------------------------------------- |
| styles              | `Styles`    | Represents the current styles of the chatbot.            |
| setStyles           | `function`  | Setter for manipulating bot styles.                      |

#### Code Example
```jsx
import { useEffect } from "react";
import { useStyles } from "react-chatbotify";

const MyNestedComponent = () => {
  const { styles, setStyles } = useStyles();

  useEffect(() => {
    // set header style
    setStyles({...styles, headerStyle: {background: "red"}})
  }, [])

  return (
    <ExampleComponent/>
  )
};
```

### useTextArea

#### Description
The `useTextArea` hook allows you to track and manage the chatbot's text area field.

#### Return Values
| Name                         | Type        | Description                                              |
| ---------------------------- | ----------- | -------------------------------------------------------- |
| textAreaDisabled             | `boolean`   | Indicates if the text area is disabled.                  |
| toggleTextAreaDisabled       | `function`  | Toggles the text area disabled state.                    |
| textAreaSensitiveMode        | `boolean`   | Indicates if the text area is in sensitive mode.         |
| toggleTextAreaSensitiveMode  | `function`  | Toggles the text area sensitive mode.                    |
| setTextAreaValue             | `function`  | Sets the value inside the text area.                     |
| focusTextArea                | `function`  | Focuses on the text area.                                |

#### Code Example
```jsx
import { useEffect } from "react";
import { useTextArea } from "react-chatbotify";

const MyNestedComponent = () => {
  const { focusTextArea } = useTextArea();

  useEffect(() => {
    // focus on chatbot input text area
    focusTextArea()
  }, [])

  return (
    <ExampleComponent/>
  )
};
```

### useToast

#### Description
The `useToast` hook allows you to track and manage the chatbot's toasts.

#### Return Values
| Name                         | Type        | Description                                              |
| ---------------------------- | ----------- | -------------------------------------------------------- |
| showToast     | `function`  | Shows a toast in chat, identical to `params.showToast` detailed [**here**](/docs/api/params#showtoast).    |
| dismissToast  | `function`  | Dismisses a toast from chat, identical to `params.dismissToast` detailed [**here**](/docs/api/params#dismisstoast).                  |
| toasts        | `Array<Toast>`     | Array containing all toasts currently shown in the chatbot                 |
| setToasts     | `function`  | Setter for manipulating toasts array directly, **not recommended** to use this so proceed with caution.                  |

#### Code Example
```jsx
import { useEffect } from "react";
import { useToasts } from "react-chatbotify";

const MyNestedComponent = () => {
  const { showToast } = useToasts();

  useEffect(() => {
    // shows a toast for 3 seconds
    showToast("Hello, I'm a toast message!", 3000)
  }, [])

  return (
    <ExampleComponent/>
  )
};
```

### useVoice

#### Description
The `useVoice` hook allows you to track and manage the chatbot's voice functionality.

#### Return Values
| Name           | Type       | Description                                            |
| -------------- | ---------- | ------------------------------------------------------ |
| voiceToggledOn | `boolean ` | Indicates if the chatbot voice is currently on or off. |
| toggleVoice    | `function` | Toggles the chatbot voice on or off.                   |

#### Code Example
```jsx
import { useVoice } from "react-chatbotify";

const MyNestedComponent = () => {
  const { toggleVoice } = useVoice();

  return (
    <button onClick={toggleVoice}></button>
  )
};
```