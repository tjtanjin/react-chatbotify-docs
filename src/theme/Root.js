import React from 'react';

import BrowserOnly from '@docusaurus/BrowserOnly';

export default function Root({children}) {
	return (
		<>
			{children}
			<BrowserOnly>
				{() => {
					const FloatingChatBot = require("../components/FloatingChatBot/FloatingChatBot").default;
					return <FloatingChatBot/>
				}}
			</BrowserOnly>
		</>
	);
}