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
        const helpOptions = ["Quickstart", "API Docs", "Examples", "Github", "Discord"];
        const flow = {
          start: {
            message: "Hello, I am Tan Jin 👋! Welcome to React ChatBotify, I'm excited that you are using our " +
              "chatbot 😊!",
            transition: {duration: 0},
            path: "show_options"
          },
          show_options: {
            message: "I hope you find this documentation helpful 😊, Below are some links you may wish to checkout:",
            options: helpOptions,
            path: "process_options"
          },
          prompt_again: {
            message: "Do you need any other help?",
            options: helpOptions,
            path: "process_options"
          },
          unknown_input: {
            message: "Sorry, I do not understand your message 😢! If you require further assistance, you may click on " +
              "the Github option and open an issue there or visit our discord.",
            options: helpOptions,
            path: "process_options"
          },
          process_options: {
            transition: {duration: 0},
            path: (params) => {
              let link = "";
              switch (params.userInput) {
              case "Quickstart":
                link = "https://react-chatbotify.tjtanjin.com/docs/introduction/quickstart/";
                break;
              case "API Docs":
                link = "https://react-chatbotify.tjtanjin.com/docs/api/bot_options";
                break;
              case "Examples":
                link = "https://react-chatbotify.tjtanjin.com/docs/examples/basic_form";
                break;
              case "Github":
                link = "https://github.com/tjtanjin/react-chatbotify/";
                break;
              case "Discord":
                link = "https://discord.gg/6R4DK4G5Zh";
                break;
              default:
                return "unknown_input";
              }
              params.injectMessage("Sit tight! I'll send you right there!");
              setTimeout(() => {
                window.open(link);
              }, 1000)
              return "repeat"
            },
          },
          repeat: {
            transition: {duration: 3000},
            path: "prompt_again"
          },
        }

        const options = {
          theme: {embedded: true},
          chatHistory: {storageKey: "introduction_overview"},
          botBubble: {simStream: true}
        }

        return <ChatBot flow={flow} options={options}/>
      }}
    </BrowserOnly>
</div>

## About

React ChatBotify is an intuitive and versatile chatbot library tailored to streamline your development process while providing the flexibility to implement advanced features. It is crafted to meet a wide range of requirements, whether you're building a straightforward FAQ chatbot, an intricate conversational interface or even an integration with Large Language Models (LLMs).

React ChatBotify aims to simplify the creation of chatbots by offering a user-friendly experience while accommodating the diverse needs of developers. With its extensive capabilities, you can easily customize and expand your chatbot's functionalities. From basic interactions to sophisticated conversational flows, React ChatBotify empowers you to build chatbots that meet your specific project goals.

## Features

React ChatBotify offers a wide array of features designed to enhance your chatbot experience. Here are just a few of the key features:

- **Dynamic Attributes:** Create interactive conversations by dynamically generating messages and defining multiple conversation paths based on user inputs.
- **Custom Rendering of Components:** Seamlessly integrate your own custom components into the chatbot interface to boast your application's unique design and functionality.
- **Stream Responses:** Integrate with LLM models and custom endpoints to stream (or even simulate) your bot responses for an elevated user experience.
- **Timeouts and Auto-Transitions:** Set timeouts and automate transitions between chatbot paths, providing users with a guided flow and journey.
- **Voice Input & Audio Output:** Enable voice input for users to interact with the chatbot through speech, and leverage audio output capabilities to provide spoken responses or prompts.
- **Chat Notifications:** Keep users informed with real-time chat notifications, ensuring they never miss important updates or new messages.
- **Checkbox & Options Support:** Utilize checkboxes and options within the chatbot interface, allowing users to select from a list of choices and easily make selections.
- **Emoji Picker:** Enhance the chatbot's expression and engagement with users by incorporating emojis into messages, adding a touch of personality and emotion.
- **File Attachments:** Seamlessly handle file attachments within the chatbot, enabling users to share and receive documents, images, or other relevant files during conversations.
- **Mobile-Friendly Interface:** Provide smooth user experience across various devices with our mobile-friendly chatbot interface.

These features, **along with many others**, empower developers to create highly interactive and personalized chatbot experiences tailored to their specific application requirements.

In the next section, let us take a look at how to craft a simple conversation for your chatbot.