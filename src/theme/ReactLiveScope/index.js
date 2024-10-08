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
let useToasts = null;

if (ExecutionEnvironment.canUseDOM) {
	ChatBot = require("react-chatbotify").default;
	hooks = {
		ChatBotProvider,
		Button,
		getDefaultSettings,
		getDefaultStyles,
		useAudio,
		useNotifications,
		useFlow,
		useToasts
	} = require("react-chatbotify");
	ChatBotProvider = hooks.ChatBotProvider;
	Button = hooks.Button;
	getDefaultSettings = hooks.getDefaultSettings;
	getDefaultStyles = hooks.getDefaultStyles;
	useAudio = hooks.useAudio;
	useNotifications = hooks.useNotifications;
	useFlow = hooks.useFlow;
	useToasts = hooks.useToasts;
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
	useToasts,
	GoogleGenerativeAI,
	OpenAI
};
  
export default ReactLiveScope;