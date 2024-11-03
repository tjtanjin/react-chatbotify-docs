import React from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import OpenAI from "openai";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

let ChatBot = null;
let reactChatbotify = {};

if (ExecutionEnvironment.canUseDOM) {
	const chatbotifyModule = require("react-chatbotify");
	ChatBot = chatbotifyModule.default;
	reactChatbotify = { ...chatbotifyModule };
	delete reactChatbotify.default;
}

const ReactLiveScope = {
	React,
	ChatBot,
	...reactChatbotify,
	GoogleGenerativeAI,
	OpenAI,
};

export default ReactLiveScope;
