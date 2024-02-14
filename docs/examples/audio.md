---
sidebar_position: 5
---

# Audio

The following is an example with passage-reading involving the audio (text-to-speech) feature.

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
	const flow={
		start: {
			message: "Hello there! Would you like me to read you a passage?",
            options: ["Yes", "No"],
			path: (params) => {
                if (params.userInput === "Yes") {
                    return "accept";
                } else {
                    return "decline";
                }
            }
		},
		accept: {
			message: "React ChatBotify is good!",
            transition: 5000,
			path: "ask_repeat",
		},
		decline: {
			message: "Alright! Do let me know if you change your mind!",
            options: ["I change my mind!"],
			path: "change_mind"
		},
        change_mind: {
            message: "I see you changed your mind, let me get you the passage!",
            transition: 1000,
            path: "accept"
        },
		ask_repeat: {
			message: "That's all for the passage, would you like me to repeat?",
			options: ["Yes", "No"],
			path: (params) => {
                if (params.userInput === "Yes") {
                    return "accept";
                } else {
                    return "decline";
                }
            }
		},
	}
	return (
		<ChatBot options={{theme: {embedded: true}, audio: {disabled: false, defaultToggledOn: true, tapToPlay: true}, chatInput: {disabled: true}, chatHistory: {storageKey: "example_audio"}}} flow={flow}/>
	);
};

render(<MyChatBot/>)
```