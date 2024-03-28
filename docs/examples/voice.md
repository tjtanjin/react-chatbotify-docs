---
sidebar_position: 6
title: Voice
description: voice chatbot example
keywords: [react, chat, chatbot, chatbotify]
---

# Voice

The following is an example with a looping input involving the voice (speech-to-text) feature.

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
	const flow={
		start: {
			message: "Hey! What would you like to share with me?",
			path: "loop"
		},
		loop: {
			message: "I see, keep going!",
			path: "loop",
		}
	}
	return (
		<ChatBot options={{theme: {embedded: true}, voice: {disabled: false}, chatHistory: {storageKey: "example_voice"}}} flow={flow}/>
	);
};

render(<MyChatBot/>)
```