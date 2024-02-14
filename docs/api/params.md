---
sidebar_position: 3
---

# Params

This page documents all the attributes that may be used in a dynamic [**Attribute**](/docs/introduction/Conversations#attributes).

## Parameters

The following table provides details about the parameters available for dynamic attributes.

| Name          | Type                                  | Availability | Description                                                                                                                                                          |
|---------------|---------------------------------------|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| userInput   | string                                | All Dynamic Attributes          | A string representing the user's input in the chat.                                                                                                                 |
| prevPath    | string                        | All Dynamic Attributes         | A string representing the previous path in the chat (can be null if not found).                                                                                                       |
| injectMessage | function | All Dynamic Attributes         | A utility function used to inject a message into the chat. The message is represented by the [**Message**](/docs/introduction/typescript) type - it takes 3 parameters: <ul><li>`content`:</li> (required) a string or JSX.Element representing the content of the message. <li>`isUser`:</li> (optional) boolean indicating whether the message is from the user, defaults to `false` if not provided.</ul>                                                                                          |                                        |
| openChat    | function             | All Dynamic Attributes         | A utility function used to control the visibility of the chat component. It takes one parameter: <ul><li>`isOpen`:</li> A boolean indicating whether the chat should be opened (`true`) or closed (`false`).</ul>                                                                             |
| files   | FileList                                | Only `file` Attribute          | A list of file(s) uploaded by the user.  

:::tip Tip

Do consider checking out the examples if you need more clarity on the usages of `params`.

:::