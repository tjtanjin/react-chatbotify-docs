---
sidebar_position: 1
---

# Bot Options

This page documents all available sections and properties that may be passed into the `options` prop of the `ChatBot`. For an example on how to structure your `options`, please refer to the default bot options in the dropdown below.

<details>
<summary>Click to view default bot options</summary>

```jsx
const defaultOptions = {
	// Configurations Category
	theme: {
		primaryColor: "#42b0c5",
		secondaryColor: "#491d8d",
		fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', " +
			"'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', " +
			"sans-serif",
		showHeader: true,
		showFooter: true,
		showInputRow: true,
		actionDisabledIcon: actionDisabledIcon,
		embedded: false,
		desktopEnabled: true,
		mobileEnabled: true,
	},
	tooltip: {
		mode: "CLOSE",
		text: "Talk to me! 😊",
	},
	chatButton: {
		icon: chatIcon,
	},
	header: {
		title: (
			<h3 style={{cursor: "pointer", margin: 0}} onClick={
				() => window.open("https://github.com/tjtanjin/")
			}>Tan Jin
			</h3>
		),
		showAvatar: true,
		avatar: botAvatar,
		closeChatIcon: closeChatIcon,
	},
	notification: {
		disabled: false,
		defaultToggledOn: true,
		volume: 0.2,
		icon: notificationIcon,
		sound: notificationSound,
	},
	audio: {
		disabled: true,
		defaultToggledOn: false,
		language: "en-US",
		voiceNames: ["Microsoft David - English (United States)", "Alex (English - United States)"],
		rate: 1,
		volume: 1,
		icon: audioIcon,
	},
	chatHistory: {
		disabled: false,
		maxEntries: 30,
		storageKey: "rcb-history",
		viewChatHistoryButtonText: "Load Chat History ⟳",
		chatHistoryLineBreakText: "----- Previous Chat History -----",
	},
	chatInput: {
		disabled: false,
		enabledPlaceholderText: "Type your message...",
		disabledPlaceholderText: "",
		showCharacterCount: false,
		characterLimit: -1,
		botDelay: 1000,
		sendButtonIcon: sendButtonIcon,
		blockSpam: true,
		sendOptionOutput: true,
		sendCheckboxOutput: true,
		sendAttachmentOutput: true,
	},
	chatWindow: {
		showScrollbar: false,
		autoJumpToBottom: false,
		showMessagePrompt: true,
		messagePromptText: "New Messages ↓",
		messagePromptOffset: 30,
	},
	userBubble: {
		showAvatar: false,
		avatar: userAvatar,
		simStream: false,
		streamSpeed: 30,
	},
	botBubble: {
		showAvatar: false,
		avatar: botAvatar,
		simStream: false,
		streamSpeed: 30,
	},
	voice: {
		disabled: true,
		defaultToggledOn: false,
		timeoutPeriod: 10000,
		autoSendDisabled: false,
		autoSendPeriod: 1000,
		icon: voiceIcon,
	},
	footer: {
		text: (
			<div style={{cursor: "pointer"}} 
				onClick={() => window.open("https://react-chatbotify.tjtanjin.com")}
			>
				<span>Powered By </span>
				<span style={{fontWeight: "bold"}}>
					<img style={{width: 10, height: 10}} src={logo}></img>
					<span> React ChatBotify</span>
				</span>
			</div>
		),
	},
	fileAttachment: {
		disabled: false,
		multiple: true,
		accept: ".png",
		icon: fileAttachmentIcon,
	},
	emoji: {
		disabled: false,
		icon: emojiIcon,
		list: ["😀", "😃", "😄", "😅", "😊", "😌", "😇", "🙃", "🤣", "😍", "🥰", "🥳", "🎉", "🎈", "🚀", "⭐️"]
	},
	advance: {
		useCustomMessages: false,
		useCustomBotOptions: false,
		useCustomPaths: false,
	},

	// Styles Category
	tooltipStyle: {},
	chatButtonStyle: {},
	notificationBadgeStyle: {},
	chatWindowStyle: {},
	headerStyle: {},
	bodyStyle: {},
	chatInputContainerStyle: {},
	chatInputAreaStyle: {},
	userBubbleStyle: {},
	botBubbleStyle: {},
	botOptionStyle: {},
	botOptionHoveredStyle: {},
	botCheckboxRowStyle: {},
	botCheckboxNextStyle: {},
	botCheckMarkStyle: {},
	botCheckMarkSelectedStyle: {},
	sendButtonStyle: {},
	sendButtonHoveredStyle: {},
	characterLimitStyle: {},
	characterLimitReachedStyle: {},
	chatHistoryButtonStyle: {},
	chatHistoryButtonHoveredStyle: {},
	chatHistoryLineBreakStyle: {},
	chatMessagePromptStyle: {},
	chatMessagePromptHoveredStyle: {},
	footerStyle: {},
	loadingSpinnerStyle: {},
}
```
</details>

:::info Info

Default values for icons, avatars and JSX Elements may not be reflected in the tables below due to space constraints. If you would like information on those, you may refer to the source code containing the default options [**here**](https://github.com/tjtanjin/react-chatbotify/blob/main/src/services/BotOptionsService.tsx).

:::

## Configurations

Below is the list of sections available for configurations.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| isOpen                    | boolean                          | false                                            | Boolean indicating if chat window is open                                                                                                      |
| advance                    | object                          | {}                                            | Advanced configurations.                                                                                                       |
| audio                      | object                          | {}                                            | Configuration for chatbot audio.                                                                                               |
| botBubble                  | object                          | {}                                            | Configuration for bot chat bubbles.                                                                                            |
| chatButton                 | object                          | {}                                            | Configuration for the chatbot button.                                                                                          |
| chatWindow                 | object                          | {}                                            | Configuration for the chatbot window.                                                                                          |
| chatHistory                | object                          | {}                                            | Configuration for chatbot chat history.                                                                                        |
| chatInput                  | object                          | {}                                            | Configuration for chatbot input.                                                                                               |
| emoji                      | object                          | {}                                            | Configuration for chatbot emojis.                                                                                              |
| fileAttachment             | object                          | {}                                            | Configuration for chatbot file attachments.                                                                                    |
| footer                     | object                          | {}                                            | Configuration for the chatbot footer.                                                                                          |
| header                     | object                          | {}                                            | Configuration for the chatbot header.                                                                                          |
| notification               | object                          | {}                                            | Configuration for chatbot notifications.                                                                                       |
| theme                      | object                          | {}                                            | Configuration for the chatbot theme.                                                                                        |
| tooltip                    | object                          | {}                                            | Configuration for the chatbot tooltip.                                                                                         |
| userBubble                 | object                          | {}                                            | Configuration for user chat bubbles.                                                                                           |
| voice                      | object                          | {}                                            | Configuration for chatbot voice.                                                                                               |

### Advance

These properties are only recommended for advanced use cases. You may refer to the examples [**here**](/docs/examples/custom_options) for more details.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| useCustomMessages          | boolean                         | false                                       | Specifies whether to use custom messages in the chatbot.                                                                       |
| useCustomBotOptions        | boolean                         | false                                       | Specifies whether to use custom bot options in the chatbot.                                                                    |
| useCustomPaths             | boolean                         | false                                       | Specifies whether to use custom paths in the chatbot.                                                                          |

### Audio

Properties here handle the playing of audio for messages sent by the bot. When toggled on, messages sent by the bot will be read out.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| disabled                   | boolean                         | true                                        | Specifies whether chatbot audio is disabled.                                                                                   |
| defaultToggledOn           | boolean                         | false                                       | Specifies whether chatbot audio is toggled on by default.                                                                      |
| language                   | string                          | "en-US"                                     | The language for chatbot audio, set by a string representing a [**BCP 47 language tag**](https://www.techonthenet.com/js/language_tags.php).                                                                                                |
| voiceNames                  | string[]                          | "Google US English Male"                    | An array of voice names for the chatbot audio. Voices are based off what is provided in [**SpeechSynthesis**](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices) - you can provide as many voices as you wish (**the first voice matched will be used**).                                                                                              |
| rate                       | number                          | 1                                           | The rate (between 0.1 to 10) at which chatbot audio is played.                                                                                     |
| volume                       | number                          | 1                                           | The volume (between 0 to 1) at which chatbot audio is played.                                                                                     |
| icon                 | string                          | -                                            | Image import or URL for the audio icon to be displayed in the chatbot interface.                                                     |

### BotBubble

Properties here handle the chat bubble for messages sent by the bot.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| showAvatar                 | boolean                         | false                                       | Specifies whether the avatar should be displayed for bot chat bubbles.                                                         |
| avatar                | string                          | -                                            | Image import or URL for the avatar to be displayed for bot chat bubbles.                                                             |                                                                              |
| simStream                 | boolean                         | false                                       | Specifies whether to simulate text messages from the bot as a stream.                                                         |
| streamSpeed                | number                          | 30                                            | Specifies the interval in milliseconds between streaming each character (ignored if `simStream` is false).                                                             |                                                                              |

### ChatButton

Properties here handle the chat button that is used to toggle chat window. Note that the chat button does not show if chat window is embedded.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| icon            | string                          | -                                            | Image import or URL for the chatbot button.                                                                                          |

### ChatWindow

Properties here handle the UI/UX in the chat window. Note that it is recommended to stick to default values for this section as they have been optimized for the ideal experience.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| showScrollbar              | boolean                         | false                                       | Specifies whether scrollbar will be shown when chat messages overflow the window.                                                                            |
| autoJumpToBottom           | boolean                         | false                                       | Specifies whether new messages will always send the user to the bottom of the chat window (recommended to keep `false` as this can be disruptive).                    |
| showMessagePrompt          | boolean                         | true                                        | Specifies whether to show a message prompt when new messages are received while a user is scrolling the window.                                                      |
| messagePromptText          | string                          | "New Messages ↓"                            | The text to be displayed on the message prompt shown.                                                                             |
| messagePromptOffset        | number                          | 30                                          | The offset (in pixels) that the user must be from the bottom of the chat window to be considered scrolling and thus see the message prompt (recommended to keep at `30` or higher).                                                                  |

### ChatHistory

Properties here handle the viewing of chat history.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| disabled                   | boolean                         | false                                       | Specifies whether chatbot chat history is disabled.                                                                            |
| maxEntries                 | number                          | 30                                          | The maximum number of chat history entries to display.                                                                         |
| storageKey                 | string                          | "rcb-history"                               | The key to use for storing chat history. Can be ignored if you only have a single instance of the chatbot on your website. Otherwise, if multiple chatbots share the same storage key, their chat history will overlap.                                                                                       |
| viewChatHistoryButtonText  | string                          | "Load Chat History"                         | The text to be displayed on the view chat history button.                                                                     |
| chatHistoryLineBreakText   | string                          | "----- Previous Chat History -----"         | The text to be displayed as a line break in the chat history.                                                                  |

### ChatInput

Properties here handle the chat input sent by the user. Note that when chatbot input is disabled, emoji picker and voice will also be disabled.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| disabled                   | boolean                         | false                                       | Specifies whether chatbot input is disabled (can be overriden by the `chatDisabled` attribute within a **Block**).                                                                                   |
| enabledPlaceholderText     | string                          | "Type your message..."                      | The placeholder text to display in the chat input when it is enabled.                                                          |
| disabledPlaceholderText    | string                          | ""                                            | The placeholder text to display in the chat input when it is disabled.                                                         |
| showCharacterCount         | boolean                         | false                                           | Specifies whether to show the character count and limit (note that this value is **ignored if** `characterLimit` **is not set to 0 or more**).                                                            |
| characterLimit             | number                          | -1                                            | The maximum number of characters allowed in the chat input, defaults to -1 (no limit).                                                         |
| botDelay                   | number                          | 1000                                        | The delay in milliseconds before chatbot responses are displayed (**minimum value of 500**).                                                             |
| sendButtonIcon            | string                          | -                                            | Image import or URL for the send button to be displayed in the chat input.                                                           |
| blockSpam                  | boolean                         | true                                        | Specifies whether user input should be blocked while the bot is processing its next action (highly recommended to keep this `true` as spamming messages can result in unexpected behaviors).                                     |
| sendOptionOutput           | boolean                         | true                                        | Specifies whether to send user option as a message to the bot.                                                   |
| sendCheckboxOutput         | boolean                         | true                                        | Specifies whether to send user selection(s) as a message to the bot.                                                 |
| sendAttachmentOutput         | boolean                         | true                                        | Specifies whether to send a message with name(s) of file attachments as a message to the bot.                                                |

### Emoji

Properties here handle the emoji picker. Note that this feature will be disabled if chat input is disabled.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| disabled                   | boolean                         | false                                       | Specifies whether emoji picker is disabled.                                                                                 |
| icon                       | string                          | -                                        | Image import or URL for the emoji icon to be displayed in the chatbot footer.                                                               |
| list                       | string[]                        | ["😀", "😃", "😄", "😅", "😊", "😌", "😇", "🙃", "🤣", "😍", "🥰", "🥳", "🎉", "🎈", "🚀", "⭐️"] | An array of emojis available for selection in the emoji picker.                                                           |

### FileAttachment

Properties here handle the file attachment button.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| disabled                   | boolean                         | false                                       | Specifies whether chatbot file attachments are disabled.                                                                       |
| multiple                   | boolean                         | true                                        | Specifies whether multiple file attachments are allowed.                                                                        |
| accept                     | string                          | *                                      | The accepted file types for file attachments (e.g. `".png, .jpg"` to restrict file types or `*` to accept all file types).                                                                                  |
| icon        | string                          | -                                            | Image import or URL for the file attachment icon to be displayed in the chatbot footer.                                             |

### Footer

Properties here handle the chat footer.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| text                       | string \| JSX.Element           | -                                            | The text or JSX element to be displayed in the chatbot footer.                                                                 |

### Header

Properties here handle the chat header.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| title                      | string \| JSX.Element           | -                                            | The title to be displayed in the chatbot header.                                                                               |
| showAvatar                 | boolean                         | true                                        | Specifies whether the avatar should be displayed in the chatbot header.                                                        |
| avatar                | string                          | -                                            | Image import or URL for the avatar to be displayed in the chatbot header.                                                            |                                               |
| closeChatIcon             | string                          | -                                            | Image import or URL for the close chat icon to be displayed in the chatbot header.                                                    |

### Notification

Properties here handle the message notification sent to the user. When toggled on, a notification sound will be played when a message is sent while the chat window is closed or while the user is alt-tab. Note that this feature will be disabled if chat window is embedded.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| disabled                   | boolean                         | false                                       | Specifies whether chatbot notifications are disabled.                                                                          |
| defaultToggledOn           | boolean                         | true                                        | Specifies whether chatbot notifications are toggled on by default.                                                             |        
| volume                       | number                          | 0.2                                           | The volume (between 0 to 1) at which notification sound is played.                                                                                     |                                                   |
| notificationSound          | string                          | -                                            | The sound to be played for chatbot notifications.                                                                              |
| icon          | string                          | -                                            | Image import or URL for the notification icon to be displayed in the chatbot header.

### Theme

Properties here handle the chatbot theme.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| primaryColor               | string                          | "#42b0c5"                                   | The primary color for the chatbot's interface.                                                                                 |
| secondaryColor             | string                          | "#491d8d"                                   | The secondary color for the chatbot's interface.                                                                               |
| fontFamily                 | string                          | "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" | The default font family to be used for the chatbot's text.                                                                             |
| showHeader        | boolean                          | true                                            | Specifies whether the header should be shown in the chat window.                                                                        |
| showFooter        | boolean                          | true                                            | Specifies whether the footer should be shown in the chat window.                                                                        |
| showInputRow        | boolean                          | true                                            | Specifies whether the chat input row should be shown in the chat window.                                                                        |
| actionDisabledIcon        | string                          | -                                            | The cursor image to display when hovering over an action that is disabled.                                                                        |
| embedded                   | boolean                         | false                                       | Specifies whether the chatbot is embedded in the webpage or accessed through a floating button. Note that notifications feature **will not work** for embedded chat windows.                                                             |
| desktopEnabled                   | boolean                         | true                                       | Specifies whether the chatbot is enabled for users on desktop.                                                             |
| mobileEnabled                    | boolean                         | true                                       | Specifies whether the chatbot is enabled for users on mobile.                                                             |

### Tooltip

Properties here handle the tooltip shown beside the chat button.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| mode                       | string                          | "CLOSE"                                     | The mode of the tooltip which includes: <ul><li>`ALWAYS`:</li> Tooltip is always shown<li>`CLOSE`:</li> Tooltip is shown when chat window is closed<li>`START`:</li> Tooltip is shown once on page load</ul>                                                                                                   |
| text                       | string                          | "Talk to me! 😊"                            | The text to be displayed in the tooltip.                                                                                       |

### UserBubble

Properties here handle the chat bubble for messages sent by the user.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| showAvatar                 | boolean                         | false                                       | Specifies whether the avatar should be displayed for user chat bubbles.                                                        |
| avatar                | string                          | -                                            | Image import or URL for the avatar to be displayed for user chat bubbles.                                                            |
| simStream                 | boolean                         | false                                       | Specifies whether to simulate text messages from the user as a stream.                                                         |
| streamSpeed                | number                          | 30                                            | Specifies the interval in milliseconds between streaming each character (ignored if `simStream` is false).                                                             |      

### Voice

Properties here handle the voice to text feature (**feature is available only on desktop**). Note that this feature will be disabled if chat input is disabled.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| disabled                   | boolean                         | false                                       | Specifies whether chatbot voice is disabled.                                                                                   |
| defaultToggledOn           | boolean                         | false                                       | Specifies whether chatbot voice is toggled on by default.                                                                      |
| timeoutPeriod              | number                          | 10000                                       | The timeout period in milliseconds for chatbot voice before it automatically toggles off.                                                                          |
| autoSendDisabled           | boolean                         | false                                       | Specifies whether auto-sending of voice messages into the chat is disabled.                                                                  |
| autoSendPeriod             | number                          | 1000                                        | The period in milliseconds after which voice messages are automatically sent.                                                  |
| icon                 | string                          | -                                            | Image import or URL for the voice icon to be displayed in the chatbot interface.                                                     |

## Styles

:::tip Tip

Before diving into styling, note that if you merely wish to change the color theme of the chatbot to suit your website, you are advised to modify the `primaryColor` and `secondaryColor` properties within the `theme` section. Often times, this is enough to complement your website theme.

:::

If you wish to make further changes to the chatbot styles, then below is the list of sections available.

| Name                       | Type                            | Default                                                                                  | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| bodyStyle                | object                          | {}                                                                                       | Styles for the chatbot body.                                                                                                    |
| botBubbleStyle           | object                          | {}                                                                                       | Styles for bot chat bubbles.                                                                                                    |
| botCheckboxNextStyle     | object                          | {}                                                                                       | Styles for the next bot checkbox.                                                                                               |
| botCheckboxRowStyle      | object                          | {}                                                                                       | Styles for bot checkbox rows.                                                                                                   |
| botCheckMarkSelectedStyle| object                          | {}                                                                                       | Styles for the selected bot checkmark.                                                                                          |
| botCheckMarkStyle        | object                          | {}                                                                                       | Styles for the bot checkmark.                                                                                                   |
| botOptionHoveredStyle    | object                          | {}                                                                                       | Styles for hovered bot options.                                                                                             |
| botOptionStyle           | object                          | {}                                                                                       | Styles for bot options.                                                                                                         |
| chatButtonStyle          | object                          | {}                                                                                       | Styles for the chatbot button.                                                                                                  |
| chatHistoryButtonHoveredStyle | object                      | {}                                                                                       | Styles for the hovered chat history button.                                                                                     |
| chatHistoryButtonStyle   | object                          | {}                                                                                       | Styles for the chat history button.                                                                                             |
| chatHistoryLineBreakStyle | object                          | {}                                                                                       | Styles for the chat history line break.                                                                                         |
| chatInputContainerStyle           | object                          | {}                                                                                       | Styles for the chatbot input text area.                                                                                                   |
| chatInputAreaStyle           | object                          | {}                                                                                       | Styles for the chatbot input container.                                                                                                   |
| chatWindowStyle          | object                          | {}                                                                                       | Styles for the chatbot window.                                                                                                  |
| footerStyle              | object                          | {}                                                                                       | Styles for the chatbot footer.                                                                                                  |
| headerStyle              | object                          | {}                                                                                       | Styles for the chatbot header.                                                                                                  |
| loadingSpinnerStyle      | object                          | {}                                                                                       | Styles for the loading spinner.                                                                                                 |
| notificationBadgeStyle   | object                          | {}                                                                                       | Styles for the chatbot notification badge.                                                                                      |
| sendButtonHoveredStyle   | object                          | {}                                                                                       | Styles for the hovered send button.                                                                                             |
| sendButtonStyle          | object                          | {}                                                                                       | Styles for the send button.                                                                                                     |
| tooltipStyle             | object                          | {}                                                                                       | Styles for the chatbot tooltip.                                                                                                 |
| userBubbleStyle          | object                          | {}                                                                                       | Styles for user chat bubbles.                                                                                                   |

The utilization of styles is remarkably simple, as each section readily accepts inline React styles. For instance, you can customise the headerStyle with `headerStyle: {backgroundColor: "red"}`.

:::tip Tip

If you wish to customise the chatbot appearance with even more granularity, you may also overwrite the CSS classes directly. Class names for this library are appended with `rcb` and you may find the relevant classes through **inspect element** or by combing through the CSS files within the components in the [**code repository**](https://github.com/tjtanjin/react-chatbotify/tree/main/src/components).

:::