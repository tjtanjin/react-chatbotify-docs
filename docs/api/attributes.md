---
sidebar_position: 2
---

# Attributes

This page documents all the attributes that may be used in a conversation [**Block**](/docs/introduction/Conversations#block). Note that the 6 dynamic attributes `message`, `render`, `function`, `file`, `transition` and `path` are able to accept [**Params**](/docs/introduction/Conversations#params) as documented [**here**](/docs/api/params). For an example on how to use these attributes, you may refer to the sample flow in the dropdown below.

<details>
<summary>Click to view sample flow</summary>

```jsx
const flow = {
    start: {
        message: "Hello there! What is your name?",
        path: "ask_age",
    },
    ask_age: {
        message: (params) => `Good to see you ${params.userInput}, how old are you?`
    }
}
```
</details>

## Pre-processing Attributes

Below is the list of available pre-processing attributes (processed upon entering a block and before user input).

| Name      | Type                                               | Dynamic | Description                                                                                                                                                                                  |
|----------------|----------------------------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| message        | string \| function | Yes     | Message sent by the bot to the user - if using function, it can be passed `params`.             |
| options        | array                                    | No      | An array of options that the bot presents to the user to choose from.                                                                      |
| checkboxes     | object | No      | An object containing the following 3 properties: <ul><li>`items`:</li> (required) array of choices that the bot presents to the user to select from.<li>`max`:</li> (optional) maximum number of allowed selections, defaults to `all` if not specified<li>`min`:</li> (optional) minimum number of allowed selections, defaults to `1` if not specified</ul>
| render         | JSX.Element \| function | Yes     | Custom component to render in the chat window to the user - if using function, it can be passed `params`.           |
| chatDisabled   | boolean                                            | No      | Boolean indicating whether chat input is to be enabled or disabled in this block (overrides the `chatInput` section under [**Configurations**](/docs/api/bot_options#chatinput)).                                                                                  |
| transition     | object \| function                                         | Yes      | An object (or function returning an object) containing the following 2 properties: <ul><li>`duration`:</li> (required) duration in milliseconds before the post-process attributes of a block are ran (auto-transition)<li>`interruptable`:</li> (optional) boolean indicating if user input will halt this auto-transition, defaults to `false` if not specified</ul> If using function, it can be passed `params`.                                                                                   |

## Post-processing Attributes

Below is the list of available pre-processing attributes (processed upon user input and before exiting a block).

| Name      | Type                                        | Dynamic | Description                                                                                                                                                                                  |
|----------------|---------------------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| function       | function                | Yes     | Function that runs after a user input (can be passed `params`)                             |
| file           | function | Yes     | Function that runs after file upload (can be passed `params`). |
| path           | string \| function | Yes     | Path to navigate to after processing this block - if using function, it can be passed `params`. |

:::tip Tip

There are multiple ways to achieve the same flow/interactions you wish to have for your users. Find the one most intuitive to you or that you are most comfortable with!

:::