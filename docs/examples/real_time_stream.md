---
sidebar_position: 9
---

# Real-time Stream

The following is a detailed example demonstrating real-time message streaming. Given the current popularity of Large Language Models (LLMs), I've opted to showcase real-time streaming using [**Google's Gemini AI**](https://ai.google.dev/), which generously offers free API usage. This example can easily be extended to interact with other providers or even your own custom endpoints.

However, you will need to acquire your own API key for testing within this editor. It's important to highlight that streaming functionality is exclusively supported through the `params.streamMessage` parameter, as illustrated below. If you are unable to obtain an API key but would still like to visualize the streaming in action, you may wish to check out the [**simulated stream**](/docs/examples/simulated_stream.md) example.

:::caution

This is for testing purposes only. **Do not** embed your API keys on your website in production, you will want to use a proxy instead. I'll be writing a medium article on this soon (link will be updated here when the article is out).

:::

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
    let api_key = null;
    let has_error = false;

    // example gemini stream
    // you can replace with other LLMs or even have a simulated stream
    const gemini_stream = async (params) => {
        try {
            const genAI = new GoogleGenerativeAI(api_key);
            const model = genAI.getGenerativeModel({ model: "gemini-pro"});
            const result = await model.generateContentStream(params.userInput);

            let text = "";
            let offset = 0;
            for await (const chunk of result.stream) {
                const chunkText = chunk.text();
                text += chunkText;
                for (let i = offset; i < chunkText.length; i++) {
                    // while this example shows params.streamMessage taking in text input,
                    // you may also feed it custom JSX.Element if you wish
                    params.streamMessage(text.slice(0, i + 1));
                    await new Promise(resolve => setTimeout(resolve, 30));
                }
                offset += chunkText.length;
            }

            // in case any remaining chunks are missed (e.g. timeout)
            // you may do your own nicer logic handling for large chunks
            for (let i = offset; i < text.length; i++) {
                params.streamMessage(text.slice(0, i + 1));
                await new Promise(resolve => setTimeout(resolve, 30));
            }
            params.streamMessage(text);
        } catch {
            params.injectMessage("Unable to load model, is your API Key valid?");
            has_error = true;
        }
    }
    const flow={
        start: {
            message: "Enter your gemini api key and start asking away!",
            path: "api_key"
        },
        api_key: {
            message: (params) => {
                api_key = params.userInput.trim();
                return "Ask me anything!";
            },
            path: "loop",
        },
        loop: {
            message: async (params) => {
                await gemini_stream(params);
            },
            path: () => {
                if (has_error) {
                    return "start"
                }
                return "loop"
            }
        }
    }
    return (
        <ChatBot options={{theme: {embedded: true}, chatHistory: {storageKey: "example_real_time_stream"}, botBubble: {simStream: true}}} flow={flow}/>
    );
};

render(<MyChatBot/>)
```