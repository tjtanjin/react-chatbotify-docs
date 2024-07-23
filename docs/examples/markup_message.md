---
sidebar_position: 16
title: Markup Message
description: markup message chatbot example
keywords: [react, chat, chatbot, chatbotify]
---

# Sensitive Input

The following is an example showing how you may allow markup syntax (e.g. `<br/>`, `<b>`, `<hr/>`) in user chat bubbles and bot chat bubbles.

:::caution

Note that since this uses the `dangerouslySetInnerHTML` attribute, you should perform the necessary validation beforehand on the message strings. 

:::

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
	const flow={
		start: {
			message: "<b>Hey there, I am a bolded sentence!</b> Try typing a bolded message to me!",
			path: "reply"
		},
		reply: {
			message: "Interesting, let's try again?",
			options: ["Try again"],
			chatDisabled: true,
			path: "start"
		},
	}
	return (
		<ChatBot settings={{general: {embedded: true}, chatHistory: {storageKey: "example_markup_message"},
			userBubble: {dangerouslySetInnerHtml: true},
			botBubble: {dangerouslySetInnerHtml: true}}} flow={flow}
		/>
	);
};

render(<MyChatBot/>)
```