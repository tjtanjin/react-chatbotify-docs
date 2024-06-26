---
sidebar_position: 1
title: Quickstart
description: content describing chatbot quickstart
keywords: [react, chat, chatbot, chatbotify]
---

# Quickstart

Looking to get started 😊? The process of setting up the chatbot only involves 3 simple steps, making it incredibly easy to jump right in!

## Installation

React ChatBotify is [**available on npm**](https://www.npmjs.com/package/react-chatbotify) so install it with the following command within your project folder:

```
npm install react-chatbotify --save
```

## Import

Import the ChatBot within your component of interest (e.g. `MyComponent.js`).

```jsx title=MyComponent.js
import ChatBot from "react-chatbotify";
```

## Initialization

Initialize the ChatBot and you will be greeted with a default welcome/help message when you run your app.

```jsx title=MyComponent.js
import ChatBot from "react-chatbotify";

const MyComponent = () => {
  return (
    <Chatbot/>
  );
};
```

:::info Info

If you are using [**NextJS**](https://nextjs.org/) and running into errors, look [**here**](/docs/introduction/faq#q8-i-am-using-nextjs-and-running-into-referenceerror-window-is-not-defined-errors-how-can-i-fix-this)!

:::

## Theming (Optional)

If you are looking to adapt the chatbot to the color scheme on your website, the recommended **fastest and easiest** way is via the `primaryColor` and `secondaryColor` properties in the `theme` section. You may refer to the [**Theming Example**](/docs/examples/theming) for more details.

:::info Info

In the next few sections, we will go through a brief overview on React ChatBotify, cover important properties as well as explore conversations/configurations. It is recommended to sit through these sections without skipping them as they will help ease your use of the library and the understanding of this documentation 😊!

:::