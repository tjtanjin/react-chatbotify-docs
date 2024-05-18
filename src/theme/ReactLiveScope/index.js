import React from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import OpenAI from 'openai';

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

let ChatBot = null;
let hooks = {};
let BotOptionsContext = null;
let MessagesContext = null;
let PathsContext = null;
let getDefaultBotOptions = null;

if (ExecutionEnvironment.canUseDOM) {
	ChatBot = require("react-chatbotify").default;
	hooks = {
		BotOptionsContext,
		MessagesContext,
		PathsContext,
		getDefaultBotOptions
	} = require("react-chatbotify");
	BotOptionsContext = hooks.BotOptionsContext;
	MessagesContext = hooks.MessagesContext;
	PathsContext = hooks.PathsContext;
	getDefaultBotOptions = hooks.getDefaultBotOptions;
}

const ReactLiveScope = {
	React,
	ChatBot,
	BotOptionsContext,
	MessagesContext,
	PathsContext,
	getDefaultBotOptions,
	GoogleGenerativeAI,
	OpenAI
};
  
export default ReactLiveScope;