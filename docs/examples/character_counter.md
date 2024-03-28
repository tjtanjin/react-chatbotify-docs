---
sidebar_position: 13
title: Character Counter
description: character counter chatbot example
keywords: [react, chat, chatbot, chatbotify]
---

# Character Counter

The following is an example of showing character count and enforcing character limits. This may be useful in situations where user input needs to be kept within a certain length.

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
    const flow={
        start: {
            message: "Hey! Keep within the character limit!",
            path: "loop"
        },
        loop: {
            message: "Seems like you are within the limit, great job!",
            path: "loop",
        }
    }
    return (
        <ChatBot options={{theme: {embedded: true}, chatInput: {showCharacterCount: true, characterLimit: 10},
            chatHistory: {storageKey: "example_character_counter"}}} flow={flow}
        />
    );
};

render(<MyChatBot/>)
```