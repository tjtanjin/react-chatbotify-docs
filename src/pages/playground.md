---
title: Playground
---

```jsx live noInline title=MyComponent.js
const MyChatBot = () => {
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
        <ChatBot options={{theme: {embedded: true}, chatHistory: {storageKey: "playground"}}} flow={flow}/>
    );
};

render(<MyChatBot/>)
```