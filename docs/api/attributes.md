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

:::tip Tip

Note that as of `v2`, **all attributes** support functions which can access [`params`](/docs/api/params). The sample flow above shows how the `message` attribute uses `params` to retrieve the user input.

:::

## Pre-processing Attributes

Below is the list of available pre-processing attributes (processed upon entering a block and before user input).

| Name         | Type                | Description                                                                                                                                                       |
|--------------|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| message      | `string` \| `function`  | Message sent by the bot to the user.                                                                                             |
| options      | `object` \| `array` \| `function`  | Represents the options presented to the user.<br/><br/>If an **object** is passed, it includes: <ul><li>`items` (required): array of options.</li><li>`sendOutput` (optional): boolean indicating if the chosen option will be sent in chat. Defaults to `settings.chatInput.sendOptionOutput`.</li><li>`reusable` (optional): boolean specifying if the options are reusable. Defaults to `false`.</li></ul>If an **array** is passed, it defaults to only using `items`, with other fields using default values. |
| checkboxes   | `object` \| `array` \| `function`  | Represents the checkboxes presented to the user.<br/><br/>If an **object** is passed, it includes: <ul><li>`items` (required): array of selections.</li><li>`max` (optional): maximum allowed selections. Defaults to `all`.</li><li>`min` (optional): minimum allowed selections. Defaults to `1`.</li><li>`sendOutput` (optional): boolean indicating if selections will be sent in chat. Defaults to `settings.chatInput.sendCheckboxesOutput`.</li><li>`reusable` (optional): whether selections are reusable. Defaults to `false`.</li></ul>If an **array** is passed, it defaults to only using `items`, with other fields using default values. |
| isSensitive  | `boolean` \| `function`           | Indicates if the chat input is sensitive and needs to be masked.                                                                                                   |
| chatDisabled | `boolean` \| `function`          | Indicates whether chat input is enabled or disabled for this block (overrides the `chatInput` section in [**Configurations**](/docs/api/settings#chatinput)).       |
| transition   | `object` \| `function` | Represents the transition options for the block.<br/><br/>Includes the following fields: <ul><li>`duration` (required): time in milliseconds before post-process attributes run.</li><li>`interruptable` (optional): boolean specifying if user input will halt the transition. Defaults to `false`.</li></ul>|


## Post-processing Attributes

Below is the list of available pre-processing attributes (processed upon user input and before exiting a block).

| Name     | Type                    | Description                                                |
|----------|-------------------------|------------------------------------------------------------|
| function | `function`              | Function that is called after a user input.                |
| file     | `function`              | Function that is called after file upload.                 |
| path     | `string` \| `function`  | Path to navigate to after processing this block.           |

:::tip Tip

There are multiple ways to achieve the same flow/interactions you wish to have for your users. Find the one most intuitive to you or that you are most comfortable with!

:::