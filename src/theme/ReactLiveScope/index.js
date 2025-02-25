import React from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import OpenAI from "openai";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

let ChatBot = null;
let InputValidator = null;
let MarkdownRenderer = null;
let HtmlRenderer = null;
let reactChatbotify = {};

if (ExecutionEnvironment.canUseDOM) {
	// imports react chatbotify core library
	const chatbotifyModule = require("react-chatbotify");
	ChatBot = chatbotifyModule.default;
	reactChatbotify = { ...chatbotifyModule };
	delete reactChatbotify.default;

	// imports rcb plugin - input validator
	InputValidator = require("@rcb-plugins/input-validator");

	// imports rcb plugin - markdown renderer
	MarkdownRenderer = require("@rcb-plugins/markdown-renderer");

	// imports rcb plugin - html renderer
	HtmlRenderer = require("@rcb-plugins/html-renderer");
}

const ReactLiveScope = {
	React,
	ChatBot,
	...reactChatbotify,
	InputValidator,
	MarkdownRenderer,
	HtmlRenderer,
	GoogleGenerativeAI,
	OpenAI,
};

export default ReactLiveScope;
