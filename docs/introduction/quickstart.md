---
sidebar_position: 1
---

# Quickstart

Looking to get started 😊? The process of setting up the chatbot only involves 3 simple steps, making it incredibly easy to jump right in!

## Installation

Install React ChatBotify by running the following command within your project folder:

```
npm install react-chatbotify --save
```

## Imports

Import the CSS file at the top level of your project (e.g. `index.js`).

```jsx title=index.js
Import * from "react-chatbotify/dist/react-chatbotify.css";
```

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

## Theming (Optional)

If you are looking to adapt the chatbot to the color scheme on your website, the recommended **fastest and easiest** way is via the `primaryColor` and `secondaryColor` properties in the `theme` section. You may refer to the [**Theming Example**](/docs/examples/theming) for more details.

:::info Info

In the next few sections, we will go through a brief overview on React ChatBotify, cover important properties as well as explore conversations/configurations. It is recommended to sit through these sections without skipping them as they will help ease your use of the library and the understanding of this documentation 😊!

:::