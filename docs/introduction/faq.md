---
sidebar_position: 7
sidebar_label: FAQ
---

# Frequently Asked Questions (FAQ)

The following contains some frequently asked questions. If you have questions that are not answered below, feel free to reach out on [**discord**](https://discord.gg/6R4DK4G5Zh) for more assistance. Alternatively, you may also open an issue on [**github**](https://github.com/tjtanjin/react-chatbotify/issues).

**Q1) Why I am seeing duplicate messages on starting the chatbot?**

If you notice duplicate messages on start and are on React 18 and above, it could be due to the use of **StrictMode**. Refer to this [**github issue**](https://github.com/tjtanjin/react-chatbotify/issues/5) for more details.

**Q2) I would like to integrate this with my own API to answer questions in a loop, how can I create this?**

If you're looking to use your own API, then the [**smart conversation**](/docs/examples/smart_conversation) example is likely what you're looking to use. If you are specifically looking to stream your responses, then you may also be interested in the [**real-time stream**](/docs/examples/real_time_stream) example.

**Q3) I am experiencing issues viewing the chatbot on mobile, how can I fix this?**

If you're using a version below 1.2.0 of React ChatBotify, there are known view issues on certain mobile devices and browsers. Check that you are on a later version and should the issue persist, please do not hesitate to raise an issue on [**github**](https://github.com/tjtanjin/react-chatbotify/issues).

**Q4) I would like to stream my responses from the bot instead of sending messages as a whole, how can I do this?**

There are 2 approaches to this. If you are streaming your responses from a backend (e.g. from LLM models), then the [**real-time stream**](/docs/examples/real_time_stream) example will be relevant to you. Otherwise, if you're just looking to simulate streaming of your messages, then you may take a look at the [**simulation stream**]((/docs/examples/simulate_stream)) example.