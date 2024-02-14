import React from 'react';

import BrowserOnly from '@docusaurus/BrowserOnly';

export default function Root({children}) {
	return (
		<>
			{children}
			<BrowserOnly>
				{() => {
					const CustomChatBot = require("../components/CustomChatBot/CustomChatBot").default;
					return <CustomChatBot/>
				}}
			</BrowserOnly>
		</>
	);
}