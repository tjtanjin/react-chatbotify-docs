---
sidebar_position: 4
---

# Bot Options

The chatbot provides an `options` prop that empowers you to personalize your chatbot according to your preferences. There are 2 categories: **Configurations** and **Styles**. The **Configurations** category enables you to customize the chatbot's features and functionality, while the **Styles** category allows you to modify its appearance. By adjusting these options, you can customize the chatbot to perfectly align with your specific needs and preferences.

Each of these two categories contain `sections` (which in turn contains `properties`) and they may be passed to the `ChatBot` in the form of
`section: {property: value}` as shown in the examples below:

- `advance: {useCustomMessages: true}`
- `audio: {disabled: false}`
- `theme: {primaryColor: "#ff0000", embedded: true}`
- `headerStyle: {backgroundColor: "#00ff00", color: "#0000ff"}`
- `footerStyle: {fontSize: 12}`

:::tip Tip

If any of the explanations or usages are unclear to you, you may always reference the [**default bot options**](/docs/api/bot_options) for an example.

:::

## Configurations

Within **Configurations**, options are grouped into different **sections**, each representing a specific aspect of the chatbot. Here are the available sections:

- **Advance**: Advanced configurations for the chatbot.
- **Audio**: Configuration for chatbot audio settings.
- **BotBubble**: Configuration for bot chat bubbles.
- **ChatButton**: Configuration for the chatbot button.
- **ChatWindow**: Configuration for the chatbot window.
- **ChatHistory**: Configuration for chatbot chat history.
- **ChatInput**: Configuration for chatbot input settings.
- **Emoji**: Configuration for chatbot emojis.
- **FileAttachment**: Configuration for chatbot file attachments.
- **Footer**: Configuration for the chatbot footer.
- **Header**: Configuration for the chatbot header.
- **Notification**: Configuration for chatbot notifications.
- **Theme**: Configuration for the chatbot theme.
- **Tooltip**: Configuration for the chatbot tooltip.
- **UserBubble**: Configuration for user chat bubbles.
- **Voice**: Configuration for chatbot voice settings.

Each section contains distinct properties that provide granular control over the behavior of the chatbot. These properties are extensively documented in the API documentation for bot options under the **Configurations** category, providing comprehensive details and guidance on customization. Below is a brief snippet demonstrating how certain configuration sections can be customized:

```jsx
import { ChatBot } from 'react-chatbotify';

const options = {
	isOpen: true,
	// ...other configurations
	theme: {
		primaryColor: '#42b0c5',
		secondaryColor: '#491d8d',
		fontFamily: 'Arial, sans-serif',
	},
	audio: {
		disabled: false,
	},
	// ...other styles
};

const App = () => {
	return (
		<div>
			<h1>My Chatbot</h1>
			<ChatBot options={options} />
		</div>
	);
}
```

## Styles

The **Styles** category comprises **sections** that allow you to personalize the visual components of the chatbot. By adjusting these sections, you have the ability to customize the colors, typography, and other visual elements of the chatbot's interface. Here are the available sections:

- `headerStyle`: Styles for the chatbot header.
- `chatWindowStyle`: Styles for the chat window.
- `chatInputStyle`: Styles for the chat input area.
- `userBubbleStyle`: Styles for user chat bubbles.
- `botBubbleStyle`: Styles for bot chat bubbles.
- `botOptionStyle`: Styles for bot options.
- `botOptionHoveredStyle`: Styles for hovered bot options.
- `botCheckboxRowStyle`: Styles for bot checkbox rows.
- `botCheckboxNextStyle`: Styles for the next bot checkbox.
- `botCheckMarkStyle`: Styles for the bot checkmark.
- `botCheckMarkSelectedStyle`: Styles for the selected bot checkmark.
- `sendButtonStyle`: Styles for the send button.
- `sendButtonHoveredStyle`: Styles for the send button when hovered.
- `characterLimitStyle`: Styles for the character limit.
- `characterLimitReachedStyle`: Styles for the character limit when limit is reached.
- `chatHistoryButtonStyle`: Styles for the chat history button.
- `chatHistoryButtonHoveredStyle`: Styles for the chat history button when hovered.
- `chatHistoryLineBreakStyle`: Styles for the chat history line break.
- `footerStyle`: Styles for the chatbot footer.
- `loadingSpinnerStyle`: Styles for the loading spinner.

Each section is responsible for the appearance of a chatbot component. The API documentation for bot options under the **Styles** category offers extensive information and guidance on customizing these sections that can assist you in achieving the desired visual customization. Below is a brief snippet demonstrating how certain style sections can be customized:


```jsx
import { ChatBot } from 'react-chatbotify';

const options = {
	// ...other configurations
	headerStyle: {
		backgroundColor: '#42b0c5',
		color: '#ffffff',
		padding: '10px',
	},
	chatWindowStyle: {
		backgroundColor: '#f2f2f2',
	},
	// ...other styles
};

const App = () => {
  return (
	<div>
	  <h1>My Chatbot</h1>
	  <ChatBot options={options} />
	</div>
  );
}
```

:::tip Tip

Sections belonging to **Styles** follow a naming convention that ends with `Style`. You can safely assume that the other sections fall under **Configurations**.

:::
