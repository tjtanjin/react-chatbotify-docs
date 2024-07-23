---
sidebar_position: 20
title: Advanced Styles
description: advanced styles chatbot example
keywords: [react, chat, chatbot, chatbotify]
---

# Advanced Styles

The following is an example for the `StylesContext`, which allows you to modify styles from outside the chatbot using your own application's logic. Note that this is an **advance** feature and is thus slightly more involved in setup.

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
	// import getDefaultStyles for the initial values
	const defaultStyles = getDefaultStyles();

	// setup your own styles state
	const [styles, setStyles] = React.useState({...defaultStyles});

	const settings = {
		general: {
			embedded: true
		},
		chatHistory: {
			storageKey: "example_advanced_styles"
		},
		// remember to enable useAdvancedStyles under the advance section
		advance: {
			useAdvancedStyles: true
		}
	};

	// example styles update with theme change
	const updateHeaderBackground = () => {
		if (styles.headerStyle.background !== "#ff0000") {
			setStyles({
				headerStyle: {
					background: "#ff0000"
				}
			});
		} else {
			setStyles({
				headerStyle: {
					background: "#0000ff"
				}
			});
		}
	}

	// example flow
	const flow = {
		start: {
			message: "Hello there! I am a demo for advanced styles!",
			chatDisabled: true
		}
	}
	return (
		<>
			<ExampleButton onClick={updateHeaderBackground} text="Click me to toggle header background!"/>
			{/* Import StylesContext and wrap as Provider around the chatbot */}
			<StylesContext.Provider value={{styles: styles, setStyles: setStyles}}>
				<ChatBot styles={styles} flow={flow} settings={settings}/>
			</StylesContext.Provider>
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