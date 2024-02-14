import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from "./index.module.css";

function HomepageHeader() {
	const {siteConfig} = useDocusaurusContext();

	const [isCopied, setIsCopied] = useState(false);
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className="container">
				<h1 className="hero__title">{siteConfig.title}</h1>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div style={{paddingBottom: 25}} className={styles.buttons}>
					<Link
						className="button button--secondary button--lg"
						to="/docs/introduction/quickstart">
						Documentation 📚
					</Link>
				</div>
				<div className={styles.buttons}>
					<Link
						className="button button--secondary button--lg"
						to="/playground">
						Playground 🛝
					</Link>
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
		</header>
	);
}

export default function Home(): JSX.Element {
	const {siteConfig} = useDocusaurusContext();
	return (
		<Layout
			title={`Hello from ${siteConfig.title}`}
			description="A React library for creating a flexible and extensible chatbot.">
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
