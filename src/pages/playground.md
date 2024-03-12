---
title: Playground
---

```jsx live noInline title=MyComponent.js
const MyChatBot = () => {
    const options={
        theme: {embedded: true},
        chatHistory: {storageKey: "playground"},
        botBubble: {simStream: true}
    }
    const flow={
        start: {
            message: "Welcome to the playground 🥳! Edit and experiment as you wish!",
            path: "end_loop"
        },
        end_loop: {
            message: (params) => `Received: ${params.userInput}`,
            path: "end_loop"
        }
    }
    return (
        <ChatBot options={options} flow={flow}/>
    );
};

render(<MyChatBot/>)
```