---
sidebar_position: 5
title: File Upload
description: file upload chatbot example
keywords: [react, chat, chatbot, chatbotify]
---

# File Upload

The following is an example for uploading a resume.

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
	const [name, setName] = React.useState("");
	const handleUpload = (params) => {
		const files = params.files;
		// handle files logic here
	}

	const flow={
		start: {
			message: "Hello there! What is your name?",
			function: (params) => setName(params.userInput),
			path: "upload_resume"
		},
		upload_resume: {
			message: (params) => `Nice to meet you ${params.userInput}, please upload your resume.`,
			chatDisabled: true,
			file: (params) => handleUpload(params),
			path: "end"
		},
		reupload_resume: {
			message: (params) => `Hi again ${name}, please reupload your resume.`,
			chatDisabled: true,
			file: (params) => handleUpload(params),
			path: "end"
		},
		end: {
			message: (params) => `We have received your resume (${params.userInput}) and will get back to you shortly!`,
			options: ["Reupload"],
			chatDisabled: true,
			path: "reupload_resume"
		},
	}
	return (
		<ChatBot settings={{general: {embedded: true}, chatHistory: {storageKey: "example_file_upload"}}} flow={flow}/>
	);
};

render(<MyChatBot/>)
```