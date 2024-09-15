---
sidebar_position: 1
title: ChatBot
description: api documentation for chatbot
keywords: [react, chat, chatbot, chatbotify]
---

# ChatBot

The `ChatBot` is the core component that holds all the logic together (you have probably seen it in the [**quickstart**](/docs/introduction/quickstart)!). As long as you're using the chatbot, it is **always imported** and accepts a total of **6 props**. Note that while all the props are optional, you will end up with the default welcome chatbot if you do not specify any of them. An example of how to import `ChatBot` and pass it an `id` and `flow` prop is shown below:

```jsx title=MyComponent.js
import ChatBot from "react-chatbotify";

const MyComponent = () => {
  const id = "my-chatbot-id" // if not specified, will auto-generate uuidv4

  const flow = {
    "start": {
        message: "Hello there!",
        path: "end"
    },
    "end": {
        message: "See you, goodbye!"
    }
  }

  return (
    <ChatBot id={id} flow={flow}/>
  );
};
```

:::tip Tip
It is **not necessary** to specify all 6 props. For most use cases, you'll likely want to start by tinkering with `flow`, `settings` and `styles` before exploring other features.
:::

## Overview

Below is a list of available props along with a brief description for each of them:

| Name      | Type              | Description                                                                 |
| --------- | ----------------- | --------------------------------------------------------------------------- |
| id      | `string`          | Uniquely identifies the chatbot, useful if you have multiple chatbots or for plugins/events. |
| flow    | [`Flow`](/docs/concepts/conversations#flow)            | Describes the conversation flow for the chatbot.                            |
| settings| [`Settings`](/docs/concepts/settings)        | Provides the settings for the chatbot.                                      |
| styles  | [`Styles`](/docs/concepts/styles)          | Provides the styles for the chatbot.                                        |
| themes  | [`Array<Theme>`](/docs/concepts/themes)    | Specifies theme(s) to load for the chatbot.                                 |
| plugins | [`Array<Plugin>`](/docs/plugins) | Initializes plugins that enhance the chatbot.                               |

## Using ChatBotProvider

The `ChatBotProvider` component is only necessary if you're hoping to interact with the chatbot externally **from your own custom components**. If you have such a use case, then you need to import `ChatBotProvider` and wrap it around `ChatBot` (for v1 users, this is a direct replacement for the [advanced section/features](https://react-chatbotify.com/legacy/v1/docs/api/bot_options#advance) that were available). This will provide your custom components with access to the [**hooks**](/docs/api/hooks) provided by the chatbot.

Note that `ChatBotProvider` accepts a total of **5 props**, which are the **same props** accepted by the `ChatBot` component apart from `plugins`. More importantly, if you are using `ChatBotProvider`, you should pass your `id`, `flow`, `settings`, `styles` and `themes` props to the `ChatBotProvider` instead as shown in the example below:

```jsx title=MyComponent.js
import ChatBot, { ChatBotProvider } from "react-chatbotify";

const MyComponent = () => {
  const id = "my-chatbot-id" // if not specified, will auto-generate uuidv4

  const flow = {
    "start": {
        message: "Hello there!",
        path: "end"
    },
    "end": {
        message: "See you, goodbye!"
    }
  }

  return (
    <ChatBotProvider id={id} flow={flow}>
      <ChatBot />
    </ChatBotProvider>
  );
};
```

:::warning Warning
A common mistake is to continue specifying `id`, `flow`, `settings`, `styles` and `themes` props inside `ChatBot` even when it is wrapped by `ChatBotProvider`. Note that apart from `plugins`, all other props should be moved to `ChatBotProvider` if it is used.
:::