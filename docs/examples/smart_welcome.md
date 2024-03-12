---
sidebar_position: 11
---

# Smart Welcome

The following is an example welcome message which remembers if a user has visited before (clear your local storage if you would like to try this again).

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
	const flow={
		start: {
			message: () => {
                const seenBefore = localStorage.getItem("example_welcome");
                if (seenBefore) {
                    return `Welcome back ${seenBefore}!`;
                }
                return "Welcome there 👋! It's nice to meet you, what is your name?";
            },
            function: (params) => localStorage.setItem("example_welcome", params.userInput),
			path: "say_goodbye"
		},
		say_goodbye: {
			message: (params) => `Great to know you ${params.userInput}, hope to see you again!`,
            chatDisabled: true
		}
	}
	return (
		<ChatBot options={{theme: {embedded: true}, voice: {disabled: false}, chatHistory: {storageKey: "example_smart_welcome"}}} flow={flow}/>
	);
};

render(<MyChatBot/>)
```