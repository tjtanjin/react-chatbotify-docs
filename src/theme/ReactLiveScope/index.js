import React from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import OpenAI from 'openai';

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

let ChatBot = null;
let hooks = {};
let SettingsContext = null;
let StylesContext = null;
let MessagesContext = null;
let PathsContext = null;
let Button = null;
let getDefaultSettings = null
let getDefaultStyles = null;

if (ExecutionEnvironment.canUseDOM) {
	ChatBot = require("react-chatbotify").default;
	hooks = {
		SettingsContext,
		StylesContext,
		MessagesContext,
		PathsContext,
		Button,
		getDefaultSettings,
		getDefaultStyles,
	} = require("react-chatbotify");
	SettingsContext = hooks.SettingsContext;
	StylesContext = hooks.StylesContext;
	MessagesContext = hooks.MessagesContext;
	PathsContext = hooks.PathsContext;
	Button = hooks.Button;
	getDefaultSettings = hooks.getDefaultSettings;
	getDefaultStyles = hooks.getDefaultStyles;
}

const ReactLiveScope = {
	React,
	ChatBot,
	SettingsContext,
	StylesContext,
	MessagesContext,
	PathsContext,
	Button,
	getDefaultSettings,
	getDefaultStyles,
	GoogleGenerativeAI,
	OpenAI
};
  
export default ReactLiveScope;