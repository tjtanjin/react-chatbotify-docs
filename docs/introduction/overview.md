---
sidebar_position: 2
---

import BrowserOnly from '@docusaurus/BrowserOnly';
import Loading from '@theme/Loading';

# Overview

<div style={{display: "flex", justifyContent: "center"}}>
    <BrowserOnly>
      {() => {
        const ChatBot = require("react-chatbotify").default;
        return <ChatBot options={{theme: {embedded: true}, chatHistory: {storageKey: "introduction_overview"}}}/>
      }}
    </BrowserOnly>
</div>

## About

React ChatBotify is an intuitive and versatile chatbot library tailored to streamline your development process while providing the flexibility to implement advanced features. It is crafted to meet a wide range of requirements, whether you're building a straightforward FAQ chatbot or an intricate conversational interface. 

React ChatBotify aims to simplify the creation of chatbots by offering a user-friendly experience while accommodating the diverse needs of developers. With its extensive capabilities, you can easily customize and expand your chatbot's functionalities. From basic interactions to sophisticated conversational flows, React ChatBotify empowers you to build chatbots that meet your specific project goals.

## Features

React ChatBotify offers a wide array of features designed to enhance your chatbot experience. Here are just a few of the key features:

- **Dynamic Attributes:** Create interactive conversations by dynamically generating messages and defining multiple conversation paths based on user inputs.
- **Custom Rendering of Components:** Seamlessly integrate your own custom components into the chatbot interface to boast your application's unique design and functionality.
- **Timeouts and Auto-Transitions:** Set timeouts and automate transitions between chatbot paths, allowing for a smooth user experience.
- **Voice Input & Audio Output:** Enable voice input for users to interact with the chatbot through speech, and leverage audio output capabilities to provide spoken responses or prompts.
- **Chat Notifications:** Keep users informed with real-time chat notifications, ensuring they never miss important updates or new messages.
- **Checkbox & Options Support:** Utilize checkboxes and options within the chatbot interface, allowing users to select from a list of choices and easily make selections.
- **Emoji Picker:** Enhance the chatbot's expression and engagement with users by incorporating emojis into messages, adding a touch of personality and emotion.
- **File Attachments:** Seamlessly handle file attachments within the chatbot, enabling users to share and receive documents, images, or other relevant files during conversations.
- **Mobile-Friendly Interface:** Provide smooth user experience across various devices with our mobile-friendly chatbot interface.

These features, **along with many others**, empower developers to create highly interactive and personalized chatbot experiences tailored to their specific application requirements.

In the next section, let us take a look at how to craft a simple conversation for your chatbot.