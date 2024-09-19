---
sidebar_position: 20
title: Custom Hooks
description: custom hooks chatbot example
keywords: [react, chat, chatbot, chatbotify]
---

# Custom Hooks

The following is an example for using custom hooks, which allows you to interact with the chatbot functionalities **externally** (i.e. from your own components). The full list of hooks and the functionalities they expose can be found [**here**](/docs/api/hooks) but for this example, we'll only be using the [**`useAudio`**](/docs/api/hooks#useaudio) hook. Specifically, we'll toggle the chatbot audio from our own `MyChatBotWrapper` component.

```jsx live noInline title=MyChatBot.js
const MyChatBotWrapper = () => {
    const { toggleAudio } = useAudio();
    const { restartConversationFlow } = useFlow();
    const { showToast } = useToast();
    const { playNotificationSound } = useNotifications();

    const settings = {
        general: {embedded: true},
        chatHistory: {storageKey: "example_custom_hooks"},
        botBubble: {simStream: true},
        audio: {disabled: false}
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
        <>
          <ExampleButton onClick={toggleAudio} text="Click me to toggle audio!"/>
          <ExampleButton onClick={restartConversationFlow} text="Click me to reset the flow!"/>
          <ExampleButton onClick={restartConversationFlow} text="Click me to show a toast!"/>
          <ExampleButton onClick={playNotificationSound} text="Click me to play notification sound!"/>
          <ChatBot settings={settings} flow={flow}/>
        </>
    );
};

const MyChatBotProvider = () => {
    return (
        <ChatBotProvider>
            <MyChatBotWrapper/>
        </ChatBotProvider>
    );
};

// button to test above feature
const exampleButtonStyle = {
    backgroundColor: '#491D8D',
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

render(<MyChatBotProvider/>)
```