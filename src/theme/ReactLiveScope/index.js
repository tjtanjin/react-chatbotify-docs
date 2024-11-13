import React from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import OpenAI from "openai";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

let ChatBot = null;
let InputValidator = null;
let reactChatbotify = {};

if (ExecutionEnvironment.canUseDOM) {
	// imports react chatbotify core library
	const chatbotifyModule = require("react-chatbotify");
	ChatBot = chatbotifyModule.default;
	reactChatbotify = { ...chatbotifyModule };
	delete reactChatbotify.default;

	// imports rcb plugin - input validator
	InputValidator = require("@rcb-plugins/input-validator");
}

const ReactLiveScope = {
	React,
	ChatBot,
	...reactChatbotify,
	InputValidator,
	GoogleGenerativeAI,
	OpenAI,
};

export default ReactLiveScope;
