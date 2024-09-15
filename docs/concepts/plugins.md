---
sidebar_position: 5
title: Plugins
description: content describing chatbot plugins
keywords: [react, chat, chatbot, chatbotify]
---

# Plugins

A newly added feature in **v2** of the chatbot, the `plugins` prop provides users with the means to install and use custom plugins. Similar to [**themes**](/docs/concepts/themes), the browsing of plugins can be done on [**React ChatBotify Gallery**](https://gallery.react-chatbotify.com), where you will find both **official and community plugins**.

## Overview

There is a small group of official plugins maintained, which provide useful functionalities in common use cases. As of the last update, the list of official plugins are as below:

- [**rcb-input-validator-plugin**](https://github.com/react-chatbotify-plugins/rcb-input-validator-plugin) [Work-In-Progress]
- [**rcb-message-transformer-plugin**](https://github.com/react-chatbotify-plugins/rcb-message-transformer-plugin) [Work-In-Progress]

If you strongly believe that there are common use cases with no suitable plugins, you may feel free to make a suggestion for one on [**discord**](https://discord.gg/6R4DK4G5Zh).

For instructions on using plugins (both official or community-based), please refer to the plugin's documentation. Note that the maintenance of plugins are **separate** from the maintenance of the core React ChatBotify library.

:::tip Tip

Most plugins tend to rely on chatbot [**events**](/docs/api/events) for their logic. As [**events**](/docs/api/events) are an opt-in feature, make sure you read the plugin's setup instructions in detail to understand which events are required to be enabled!

:::

## Building Your Own Plugin

In the ideal scenario, there is already an existing plugin out there to address your use case. At times however, it may be necessary to build your own custom plugins. The chatbot is currently **already capable** of supporting plugins. However, the documentation for instructions on creating your own plugins are still a work-in-progress. These will be provided soon, latest by the **v2** stable release which is aimed for **late October 2024**.

You may wish to join the [**discord**](https://discord.gg/6R4DK4G5Zh) to stay up to date with the latest information.