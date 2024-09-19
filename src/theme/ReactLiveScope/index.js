import React from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import OpenAI from 'openai';

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

let ChatBot = null;
let ChatBotProvider = null;
let hooks = {};
let Button = null;
let getDefaultSettings = null
let getDefaultStyles = null;
let useAudio = null;
let useNotifications = null;
let useFlow = null;

if (ExecutionEnvironment.canUseDOM) {
	ChatBot = require("react-chatbotify").default;
	hooks = {
		ChatBotProvider,
		Button,
		getDefaultSettings,
		getDefaultStyles,
		useAudio,
		useNotifications,
		useFlow
	} = require("react-chatbotify");
	ChatBotProvider = hooks.ChatBotProvider;
	Button = hooks.Button;
	getDefaultSettings = hooks.getDefaultSettings;
	getDefaultStyles = hooks.getDefaultStyles;
	useAudio = hooks.useAudio;
	useNotifications = hooks.useNotifications;
	useFlow = hooks.useFlow;
}

const ReactLiveScope = {
	React,
	ChatBot,
	ChatBotProvider,
	Button,
	getDefaultSettings,
	getDefaultStyles,
	useAudio,
	useNotifications,
	useFlow,
	GoogleGenerativeAI,
	OpenAI
};
  
export default ReactLiveScope;