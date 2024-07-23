---
sidebar_position: 21
title: Advanced Messages
description: advanced messages chatbot example
keywords: [react, chat, chatbot, chatbotify]
---

# Advanced Messages

The following is an example for the `MessagesContext`, which allows you to modify messages from outside the chatbot using your own application's logic. Note that this is an **advance** feature and is thus slightly more involved in setup.

:::caution

When you are working with `useAdvancedMessages`, you are modifying the messages array directly and as a result, `audio` and `stream` features will not work on such messages. You may refer to this [GitHub Issue](https://github.com/tjtanjin/react-chatbotify/issues/41#issuecomment-2077010086) for more information.

:::

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
	// setup your own messages state 
	const [messages, setMessages] = React.useState([]);

	// example clear messages (while keeping system message)
	// note: system message refers to the load history button
	const clearMessages = () => {
		setMessages(prev => prev.filter(msg => msg.sender === "system"));
	}

	// example insert messages
	const insertMessage = () => {
		setMessages(prev => {
			const newMessage = {
				content: "Hello I am new!",
				sender: "bot",
				type: "string",
			}
			return [...prev, newMessage]
		})
	}

	// example settings
	const settings = {
		general: {
			embedded: true
		},  
		chatHistory: {
			storageKey: "example_advanced_messages"
		},
		// remember to enable useAdvancedMessages under the advance section
		advance: {
			useAdvancedMessages: true
		}
	}

	// example flow
	const flow = {
		start: {
			message: "Hello there! I am a demo for advanced messages!",
			chatDisabled: true
		}
	}

	return (
		<>
			<ExampleButton onClick={clearMessages} text="Click me to clear messages!"/>
			<ExampleButton onClick={insertMessage} text="Click me to add a message!"/>
			{/* Import MessagesContext and wrap as Provider around the chatbot */}
			<MessagesContext.Provider value={{messages: messages, setMessages: setMessages}}>
				<ChatBot settings={settings} flow={flow}/>
			</MessagesContext.Provider>
		</>
	);
};

// button to test above feature
const exampleButtonStyle = {
	backgroundColor: '#ff0000',
	color: 'white',
	border: 'none',
	padding: '10px 20px',
	textAlign: 'center',
	textDecoration: 'none',
	display: 'inline-block',
	fontSize: '16px',
	borderRadius: '5px',
	cursor: 'pointer',
	transition: 'background-color 0.2s',
	margin: 10,
};
const ExampleButton = (props) => {
	return (
		<button onClick={props.onClick} style={exampleButtonStyle}>{props.text}</button>
	);
};


render(<MyChatBot/>)
```