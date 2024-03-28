---
sidebar_position: 15
title: Custom Messages
description: custom messages chatbot example
keywords: [react, chat, chatbot, chatbotify]
---

# Custom Messages

The following is an example for the `MessagesContext`, which allows you to modify messages from outside the chatbot using your own application's logic. Note that this is an **advance** feature and is thus slightly more involved in setup.

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
    // setup your own messages state 
	const [messages, setMessages] = React.useState([]);

    // example clear messages (while keeping system message)
    // note: system message refers to the load history button
    const clearMessages = () => {
        setMessages(prev => prev.filter(msg => msg.sender === "system"));
    }

    // example insert messages
    const insertMessage = () => {
        setMessages(prev => {
            const newMessage = {
                content: "Hello I am new!",
                sender: "bot",
                type: "string",
            }
            return [...prev, newMessage]
        })
    }

    // example options
    const options = {
        theme: {
            embedded: true
        },  
        chatHistory: {
            storageKey: "example_custom_messages"
        },
        // remember to enable custom messages under the advance section
        advance: {
            useCustomMessages: true
        }
    }

    // example flow
    const flow = {
		start: {
			message: "Hello there! I am a demo for custom messages!",
			chatDisabled: true
        }
	}

	return (
        <>
            <Button onClick={clearMessages} text="Click me to clear messages!"/>
            <Button onClick={insertMessage} text="Click me to add a message!"/>
            {/* Import MessagesContext and wrap as Provider around the chatbot */}
            <MessagesContext.Provider value={{messages: messages, setMessages: setMessages}}>
                <ChatBot options={options} flow={flow}/>
            </MessagesContext.Provider>
        </>
	);
};

// button to test above feature
const buttonStyle = {
    backgroundColor: '#ff0000',
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
const Button = (props) => {
    return (
        <button onClick={props.onClick} style={buttonStyle}>{props.text}</button>
    );
};


render(<MyChatBot/>)
```