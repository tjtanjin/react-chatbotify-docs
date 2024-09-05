---
sidebar_position: 1
title: Attributes
description: api documentation for attributes
keywords: [react, chat, chatbot, chatbotify]
---

# Attributes

This page documents all the attributes that may be used in a conversation [**Block**](/docs/concepts/conversations#block). Take note that [**Attributes**](/docs/concepts/conversations#attributes) are divided into **pre-processing** and **post-processing** as listed in the tables below. For a brief example on the usage of attributes, you may refer to the **sample flow** in the dropdown which uses `message` and `path`.

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

| Name         | Type                | Description                                                                                                                                                                                                                                                                                                               |
|--------------|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| message      | string \| function  | Message sent by the bot to the user - if using function, it can be passed `params`.                                                                                                                                                                                                                                        |
| options      | object \| array               | An array of options or object containing options that the bot presents to the user to choose.<br/><br/>If an object is passed in, it contains the following 3 properties: <ul><li>`items`:</li> (required) array of options that the bot presents to the user to choose from.<li>`sendOutput`:</li> (optional) boolean indicating if chosen option will be sent in chat, defaults to `settings.chatInput.sendOptionOutput` if not specified.<li>`reusable`:</li> (optional) specifies if the options can be clicked multiple times, defaults to `false` if not specified.</ul>If an array is passed in, the array of strings are understood to be item options and all other fields present in the object above will be default.                                                                                                                                                                                                                                                      |
| checkboxes   | object \| array               | An array of selections or object containing selections that the bot presents to the user to select.<br/><br/>If an object is passed in, it contains the following 5 properties: <ul><li>`items`:</li> (required) array of selections that the bot presents to the user to choose from.<li>`max`:</li> (optional) maximum number of allowed selections, defaults to `all` if not specified.<li>`min`:</li> (optional) minimum number of allowed selections, defaults to `1` if not specified.<li>`sendOutput`:</li> (optional) boolean indicating if selections will be sent in chat, defaults to `settings.chatInput.sendCheckboxesOutput` if not specified.<li>`reusable`:</li> (optional) specifies if the selections can be clicked multiple times, defaults to `false` if not specified.</ul>If an array is passed in, the array of strings are understood to be item selections and all other fields present in the object above will be default.                                                                                                                                                                                                                  |
| isSensitive  | boolean             | Boolean indicating whether chat input is sensitive and needs to be masked.                                                                                                                                                |
| chatDisabled | boolean             | Boolean indicating whether chat input is to be enabled or disabled in this block (overrides the `chatInput` section under [**Configurations**](/docs/api/settings#chatinput)).                                                                                                                                                |
| transition   | object \| function  | An object (or function returning an object) containing the following 2 properties: <ul><li>`duration`:</li> (required) duration in milliseconds before the post-process attributes of a block are ran (auto-transition)<li>`interruptable`:</li> (optional) boolean indicating if user input will halt this auto-transition, defaults to `false` if not specified</ul> If using function, it can be passed `params`. |

## Post-processing Attributes

Below is the list of available pre-processing attributes (processed upon user input and before exiting a block).

| Name     | Type                | Description                                                                                              |
|----------|---------------------|----------------------------------------------------------------------------------------------------------|
| function | function            | Function that runs after a user input (can be passed `params`)                                            |
| file     | function            | Function that runs after file upload (can be passed `params`).                                            |
| path     | string \| function  | Path to navigate to after processing this block - if using function, it can be passed `params`.           |

:::tip Tip

There are multiple ways to achieve the same flow/interactions you wish to have for your users. Find the one most intuitive to you or that you are most comfortable with!

:::