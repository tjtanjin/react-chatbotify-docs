---
sidebar_position: 20
title: Custom Events
description: custom events chatbot example
keywords: [react, chat, chatbot, chatbotify]
---

# Custom Events

The following is an example for using custom events, which you can listen and respond to for running your application's custom logic. The full list of events can be found [**here**](/docs/api/events) but for this example, we'll only be using the [**`RcbUserSubmitTextEvent`**](/docs/api/events#rcbusersubmittextevent). Specifically, we'll **block user submissions** when the submitted text input contains the character `hello`. Give it a try below!

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
	
	const settings = {
		general: {
			embedded: true
		},
		chatHistory: {
			storageKey: "example_custom_events"
		},
		event: {
			// opt-in to rcb user submit text event
			rcbUserSubmitText: true
		}
	};

	React.useEffect(() => {
		const handleUserSubmitText = (event: RcbUserSubmitTextEvent) => {
			if (event.data.inputText.toLowerCase().includes("hello")) {
				event.preventDefault();
			}
		};

		window.addEventListener("rcb-user-submit-text", handleUserSubmitText);
		return () => {
			window.removeEventListener("rcb-user-submit-text", handleUserSubmitText);
		};
	}, []);

	// example flow
	const flow = {
		start: {
			message: "Hello there! Try saying hello to me!",
			path: "end"
		},
		end: {
			message: "Keep trying!",
			path: "start"
		}
	}
	return (
		<ChatBot settings={settings} flow={flow}/>
	);
};

render(<MyChatBot/>)
```