---
sidebar_position: 2
title: Params
description: api documentation for params
keywords: [react, chat, chatbot, chatbotify]
---

# Params

This page documents all the attributes that may be used in an [**Attribute**](/docs/concepts/conversations#attributes).

## Parameters

The following table provides details about the parameters available for attributes.

| Name          | Type                                  | Availability | Description                                                                                                                                                          |
|---------------|---------------------------------------|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| userInput   | string                                | All Attributes          | A string representing the user's input in the chat.                                                                                                                 |
| prevPath    | string                        | All Attributes         | A string representing the previous path in the chat (can be null if not found).                                                                                                       |
| goToPath    | function                        | All Attributes         | A utility function for immediately pathing to another block. It takes one parameter: <ul><li>`pathToGo`:</li> A string indicating the path to go to.</ul>                                                                                                      |
| injectMessage | async function | All Attributes         | A utility function used to inject a message into the chat which takes in 3 properties as represented by the [**Message**](/docs/concepts/conversations#message) type.                                                                                          |                                        |
| streamMessage | async function | All Attributes         | A utility function used to stream messages into the chat which takes in 3 properties as represented by the [**Message**](/docs/concepts/conversations#message) type and you may refer to [**this example**](/docs/examples/real_time_stream) for more details.                                                                                          |                                        |
| setTextAreaValue | function | All Attributes         | A utility function to set a value directly within the text area. It takes one parameter: <ul><li>`value`:</li> A string representing the value to set in the text area.</ul>                                                                                          |                                        |
| injectToast | function | All Attributes         | A utility function to inject toasts in the chatbot. It takes two parameters: <ul><li>`content`:</li> A string or JSX Element representing the content to show in the toast.<li>`timeout`:</li> An optional number specifying the duration of the toast in milliseconds (if unspecified, toast stays until clicked).</ul>                                                                                          |                                        |
| openChat    | function             | All  Attributes         | A utility function used to control the visibility of the chat component. It takes one parameter: <ul><li>`isOpen`:</li> A boolean indicating whether the chat should be opened (`true`) or closed (`false`).</ul>                                                                             |
| files   | FileList                                | Only `file` Attribute          | A list of file(s) uploaded by the user.  

:::caution Caution

If you are using `params.injectMessage` or `params.streamMessage`, do remember that they are `async` and that without using `await`, behavior may be unexpected (e.g. multiple messages sent at once). This is a common pitfall!

:::

:::tip Tip

Do consider checking out the examples if you need more clarity on the usages of `params`.

:::