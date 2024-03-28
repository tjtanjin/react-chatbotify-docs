---
sidebar_position: 3
title: Params
description: api documentation for params
keywords: [react, chat, chatbot, chatbotify]
---

# Params

This page documents all the attributes that may be used in a dynamic [**Attribute**](/docs/introduction/Conversations#attributes).

## Parameters

The following table provides details about the parameters available for dynamic attributes.

| Name          | Type                                  | Availability | Description                                                                                                                                                          |
|---------------|---------------------------------------|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| userInput   | string                                | All Dynamic Attributes          | A string representing the user's input in the chat.                                                                                                                 |
| prevPath    | string                        | All Dynamic Attributes         | A string representing the previous path in the chat (can be null if not found).                                                                                                       |
| injectMessage | async function | All Dynamic Attributes         | A utility function used to inject a message into the chat which takes in 3 properties as represented by the [**Message**](/docs/introduction/conversations#message) type.                                                                                          |                                        |
| streamMessage | async function | All Dynamic Attributes         | A utility function used to stream messages into the chat which takes in 3 properties as represented by the [**Message**](/docs/introduction/conversations#message) type and you may refer to [**this example**](/docs/examples/real_time_stream) for more details.                                                                                          |                                        |
| openChat    | function             | All Dynamic Attributes         | A utility function used to control the visibility of the chat component. It takes one parameter: <ul><li>`isOpen`:</li> A boolean indicating whether the chat should be opened (`true`) or closed (`false`).</ul>                                                                             |
| files   | FileList                                | Only `file` Attribute          | A list of file(s) uploaded by the user.  

:::caution Caution

If you are using `params.injectMessage` or `params.streamMessage`, do remember that they are `async` and that without using `await`, behavior may be unexpected (e.g. multiple messages sent at once). This is a common pitfall!

:::

:::tip Tip

Do consider checking out the examples if you need more clarity on the usages of `params`.

:::