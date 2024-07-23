---
sidebar_position: 19
title: Advanced Settings
description: advanced settings chatbot example
keywords: [react, chat, chatbot, chatbotify]
---

# Advanced Settings

The following is an example for the `SettingsContext`, which allows you to modify settings from outside the chatbot using your own application's logic. Note that this is an **advance** feature and is thus slightly more involved in setup.

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
	// import getDefaultSettings for the initial values
	const defaultSettings = getDefaultSettings();

	// setup your own settings state
	const [settings, setSettings] = React.useState({
		// includes the default values in settings before overriding
		...defaultSettings,
		general: {
			// includes the default values for each section before overriding
			...defaultSettings.general,
			embedded: true
		},
		chatHistory: {
			...defaultSettings.chatHistory,
			storageKey: "example_advanced_settings"
		},
		// remember to enable useAdvancedSettings under the advance section
		advance: {
			...defaultSettings.advance,
			useAdvancedSettings: true
		}
	});

	// example toggle audio
	const toggleAudio = () => {
		setSettings({
			...settings,
			audio: {
				...settings.audio,
				disabled: !settings.audio.disabled
			}
		});
	}

	// example flow
	const flow = {
		start: {
			message: "Hello there! I am a demo for advanced settings!",
			path: "end"
		},
		end: {
			message: "Message me again!",
			path: "start"
		}
	}
	return (
		<>
			<ExampleButton onClick={toggleAudio} text="Click me to hide/show audio button!"/>
			{/* Import SettingsContext and wrap as Provider around the chatbot */}
			<SettingsContext.Provider value={{settings: settings, setSettings: setSettings}}>
				<ChatBot settings={settings} flow={flow}/>
			</SettingsContext.Provider>
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