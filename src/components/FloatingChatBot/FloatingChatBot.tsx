import React from 'react';
import { useHistory } from 'react-router-dom';

import ChatBot, { Params } from "react-chatbotify";
import "react-chatbotify/dist/react-chatbotify.css";

// boolean indicating if user is on desktop (otherwise treated as on mobile)
const isDesktop = !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));

const FloatingChatBot = () => {
	const history = useHistory();
	const navigatePage = (page, params) => {
		if (page.startsWith("https")) {
			window.open(page);
		} else {
			if (!isDesktop) {
				params.openChat(false);
			}
			history.push(page);
		}
	};
	const helpOptions = ["Quickstart", "API Docs", "Examples", "Github", "Discord"];

	const options = {
		voice: {disabled: false},
		audio: {disabled: false},
		theme: {
			mobileEnabled: true
		},
		botBubble: {
			simStream: true
		},
		chatHistory: {
			storageKey: "main_chatbot"
		},
		tooltip: {
			mode: isDesktop ? "CLOSE" : "NEVER",
		}
	}

	const flow = {
		start: {
			message: "Hello, I am Tan Jin 👋! Welcome to React ChatBotify, I'm excited that you are using our " +
				"chatbot 😊!",
			transition: {duration: 0},
			path: "show_options",
			chatDisabled: true
		},
		show_options: {
			message: "Here are a few helpful things you can check out to get started:",
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
			chatDisabled: true,
			path: async (params: Params) => {
				let link = "";
				switch (params.userInput) {
				case "Quickstart":
					link = "/docs/introduction/quickstart/";
					break;
				case "API Docs":
					link = "/docs/api/bot_options";
					break;
				case "Examples":
					link = "/docs/examples/basic_form";
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
				await params.injectMessage("Sit tight! I'll send you right there!");
				setTimeout(() => {
					navigatePage(link, params);
				}, 2000)
				return "repeat"
			},
		},
		repeat: {
			transition: {duration: 3000},
			chatDisabled: true,
			path: "prompt_again",
		},
	}
	return (
		<ChatBot flow={flow} options={options}></ChatBot>
	);
};

export default FloatingChatBot;