---
sidebar_position: 7
---

# Theming

The following is an example for theming your chatbot.

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
	const options = {
		// play around with the colors below to try out different themes!
		theme: {
			embedded: true,
			primaryColor: "#F4B41A",
			secondaryColor: "#143D59"
		},
        chatHistory: {
            storageKey: "example_theming"
        }

        // depending on your color scheme, you may want to make adjustments
        // to other parts of your chatbot (uncomment below to see what happens)
        // userBubbleStyle: {
        //     color: "#000000"
        // },
        // botOptionStyle: {
        //     color: "#FFA500",
        //     borderColor: "#FFA500"
        // },
        // botOptionHoveredStyle: {
        //     backgroundColor: "#FFA500",
        // },
        // sendButtonStyle: {
        //     backgroundColor: "#FFA500",
        // },
        // sendButtonHoveredStyle: {
        //     backgroundColor: "#FFD700",
        // }
	}
	return (
		<ChatBot options={options}/>
	);
};

render(
	<MyChatBot/>
)
```