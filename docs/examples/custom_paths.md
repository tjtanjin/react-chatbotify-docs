---
sidebar_position: 16
---

# Custom Paths

The following is an example for the `PathsContext`, which allows you to modify paths from outside the chatbot using your own application's logic. Note that this is an **advance** feature and is thus slightly more involved in setup.

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
    // setup your own paths state (!important, always initialize paths with "start")
	const [paths, setPaths] = React.useState(["start"]);

    // example to jump to start of chat
    const jumpToStart = () => {
        setPaths(prev => [...prev, "start"]);
    }

    // example to jump to end of chat
    const jumpToEnd = () => {
        setPaths(prev => [...prev, "end"]);
    }

    // example options
    const options = {
        theme: {
            embedded: true
        },
        chatHistory: {
            storageKey: "example_custom_paths"
        },
        // remember to enable custom paths under the advance section
        advance: {
            useCustomPaths: true
        }
    }

    // example flow
    const flow = {
		start: {
			message: "Hello there! I am the start of the chat!",
            path: "middle1"
        },
        middle1: {
            message: "I am in middle1 of the chat.",
            path: "middle2"
        },
        middle2: {
            message: "I am in middle2 of the chat.",
            path: "end"
        },
        end: {
            message: "I am at the end of the chat!",
            chatDisabled: true
        }
	}

	return (
        <>
            <Button onClick={jumpToStart} text="Click me to jump to start!"/>
            <Button onClick={jumpToEnd} text="Click me to jump to end!"/>
            {/* Import PathsContext and wrap as Provider around the chatbot */}
            <PathsContext.Provider value={{paths: paths, setPaths: setPaths}}>
                <ChatBot options={options} flow={flow}/>
            </PathsContext.Provider>
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