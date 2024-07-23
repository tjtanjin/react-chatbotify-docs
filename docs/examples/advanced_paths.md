---
sidebar_position: 22
title: Advanced Paths
description: advanced paths chatbot example
keywords: [react, chat, chatbot, chatbotify]
---

# Advanced Paths

The following is an example for the `PathsContext`, which allows you to modify paths from outside the chatbot using your own application's logic. Note that this is an **advance** feature and is thus slightly more involved in setup.

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
	// setup your own paths state
	const [paths, setPaths] = React.useState([]);

	// example to jump to start of chat
	const jumpToStart = () => {
		setPaths(prev => [...prev, "start"]);
	}

	// example to jump to end of chat
	const jumpToEnd = () => {
		setPaths(prev => [...prev, "end"]);
	}

	// example settings
	const settings = {
		general: {
			embedded: true
		},
		chatHistory: {
			storageKey: "example_advanced_paths"
		},
		// remember to enable useAdvancedPaths under the advance section
		advance: {
			useAdvancedPaths: true
		}
	}

	// example flow
	const flow = {
		start: {
			message: "Hello there! I am the start of the chat!",
			path: "middle1"
		},
		middle1: {
			message: "I am in middle1 of the chat.",
			path: "middle2"
		},
		middle2: {
			message: "I am in middle2 of the chat.",
			path: "end"
		},
		end: {
			message: "I am at the end of the chat!",
			chatDisabled: true
		}
	}

	return (
		<>
			<ExampleButton onClick={jumpToStart} text="Click me to jump to start!"/>
			<ExampleButton onClick={jumpToEnd} text="Click me to jump to end!"/>
			{/* Import PathsContext and wrap as Provider around the chatbot */}
			<PathsContext.Provider value={{paths: paths, setPaths: setPaths}}>
				<ChatBot settings={settings} flow={flow}/>
			</PathsContext.Provider>
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