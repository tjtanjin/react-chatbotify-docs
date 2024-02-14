---
sidebar_position: 14
---

# Custom Options

The following is an example for the `BotOptionsContext`, which allows you to modify options from outside the chatbot using your own application's logic. Note that this is an **advance** feature and is thus slightly more involved in setup.

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
    // import getDefaultBotOptions for the initial values
    const defaultBotOptions = getDefaultBotOptions();

    // setup your own bot options state
	const [botOptions, setBotOptions] = React.useState({
        ...defaultBotOptions,
        theme: {
            ...defaultBotOptions.theme,
            embedded: true
        },
        chatHistory: {
            storageKey: "example_custom_options"
        },
        // remember to enable custom bot options under the advance section
        advance: {
            useCustomBotOptions: true
        }
    });

    // example options update with theme change
    const updateTheme = () => {
        if (botOptions.theme.primaryColor !== "#ff0000") {
            setBotOptions({
                ...botOptions,
                theme: {
                    ...botOptions.theme,
                    primaryColor: "#ff0000"
                }
            });
        } else {
            setBotOptions({
                ...botOptions,
                theme: {
                    ...botOptions.theme,
                    primaryColor: "#42B0C5"
                }
            });
        }
    }

    // example flow
	const flow = {
		start: {
			message: "Hello there! I am a demo for custom bot options!",
			chatDisabled: true
        }
	}
	return (
        <>
            <Button onClick={updateTheme} text="Click me to toggle theme!"/>
            {/* Import BotOptionsContext and wrap as Provider around the chatbot */}
            <BotOptionsContext.Provider value={{botOptions: botOptions, setBotOptions: setBotOptions}}>
                <ChatBot options={botOptions} flow={flow}/>
            </BotOptionsContext.Provider>
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