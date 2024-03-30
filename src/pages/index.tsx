import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import GitHubButtonsContainer from '../components/GitHubButtonsContainer/GitHubButtonsContainer';
import styles from "./index.module.css";

function HomepageHeader() {
	const {siteConfig} = useDocusaurusContext();
	const [isCopied, setIsCopied] = useState(false);

	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className={`container ${styles.heroContainer}`}>
				<div className={styles.leftContainer}>
					<h1 className="hero__title">{siteConfig.title}</h1>
					<p className={`hero__subtitle ${styles.landingPageSubtitleWide}`}>
						A modern React library for creating<br/> a flexible and extensible chatbot
					</p>
					<p className={`hero__subtitle ${styles.landingPageSubtitleThin}`}>
						A modern React library for creating a flexible and extensible chatbot
					</p>
					<GitHubButtonsContainer/>
					<div className={styles.buttonContainer}>
						<div className={styles.documentationButton}>
							<Link
								className="button button--secondary button--lg"
								style={{minWidth: 240}}
								to="/docs/introduction/quickstart">
								Documentation 📚
							</Link>
						</div>
						<div className={styles.playgroundButton}>
							<Link
								className="button button--secondary button--lg"
								style={{minWidth: 240}}
								to="/playground">
								Playground 🛝
							</Link>
						</div>
					</div>
					<div className={styles.codeContainer}>
						<code 
							onClick={() => {
								const clipboard = navigator.clipboard;
								clipboard.writeText("npm install react-chatbotify --save");
								setIsCopied(true);
								setTimeout(() => {
									setIsCopied(false);
								}, 3000)
							}}
							style={{color: "#333", padding: 16, backgroundColor: "#fff", cursor: "copy"}}
						>
							npm install react-chatbotify --save 📋
						</code>
					</div>
					<div 
						className={styles.copiedText}
						style={{
							opacity: isCopied ? 1 : 0
						}}
					>
						Copied to clipboard!
					</div>
				</div>
				<div className={styles.rightContainer}>
					<BrowserOnly>
						{() => {
							const LandingPageChatBot = 
								// eslint-disable-next-line @typescript-eslint/no-var-requires
								require("../components/LandingPageChatBot/LandingPageChatBot").default;
							return <LandingPageChatBot/>
						}}
					</BrowserOnly>
				</div>
			</div>
		</header>
	)
}

export default function Home(): JSX.Element {
	const {siteConfig} = useDocusaurusContext();
	return (
		<Layout
			title={`Hello from ${siteConfig.title}`}
			description="A modern React library for creating a flexible and extensible chatbot.">
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
