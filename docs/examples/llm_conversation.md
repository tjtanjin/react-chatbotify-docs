---
sidebar_position: 10
title: LLM Conversation
description: llm conversation chatbot example
keywords: [react, chat, chatbot, chatbotify]
---

# LLM Conversation

The following is an example showing how to use React ChatBotify to front conversations with LLMs (demonstrated using OpenAI/ChatGPT). If you wish to try out this example, you will have to obtain and provide an [OpenAI API key](https://platform.openai.com/docs/introduction) (note that OpenAI charges for API key use). Alternatively, you may refer to the [**real-time stream**](/docs/examples/real_time_stream) example which uses [**Google Gemini**](https://ai.google.dev/) that comes with free API keys.

:::caution

This is for testing purposes only, **do not** embed your API keys on your website in production. You may refer to [**this article**](https://tjtanjin.medium.com/how-to-build-and-integrate-a-react-chatbot-with-llms-a-react-chatbotify-guide-part-4-b40cd59fd6e6) for more details.

:::

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
	let apiKey = null;
	let modelType = "gpt-3.5-turbo";
	let hasError = false;

	// example openai conversation
	// you can replace with other LLMs such as Google Gemini
	const call_openai = async (params) => {
		try {
			const openai = new OpenAI({
				apiKey: apiKey,
				dangerouslyAllowBrowser: true // required for testing on browser side, not recommended
			});

			// for streaming responses in parts (real-time), refer to real-time stream example
			const chatCompletion = await openai.chat.completions.create({
				// conversation history is not shown in this example as message length is kept to 1
				messages: [{ role: 'user', content: params.userInput }],
				model: modelType,
			});

			await params.injectMessage(chatCompletion.choices[0].message.content);
		} catch (error) {
			await params.injectMessage("Unable to load model, is your API Key valid?");
			hasError = true;
		}
	}
	const flow={
		start: {
			message: "Enter your OpenAI api key and start asking away!",
			path: "api_key",
			isSensitive: true
		},
		api_key: {
			message: (params) => {
				apiKey = params.userInput.trim();
				return "Ask me anything!";
			},
			path: "loop",
		},
		loop: {
			message: async (params) => {
				await call_openai(params);
			},
			path: () => {
				if (hasError) {
					return "start"
				}
				return "loop"
			}
		}
	}
	return (
		<ChatBot options={{theme: {embedded: true}, chatHistory: {storageKey: "example_llm_conversation"}}} flow={flow}/>
	);
};

render(<MyChatBot/>)
```