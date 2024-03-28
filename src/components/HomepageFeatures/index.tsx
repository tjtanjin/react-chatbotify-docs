import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const EmpoweredAdaptabilityImage = require("@site/static/img/empowered_adaptability.png").default
// eslint-disable-next-line @typescript-eslint/no-var-requires
const intuitiveTouchImage = require("@site/static/img/intuitive_touch.png").default
// eslint-disable-next-line @typescript-eslint/no-var-requires
const enhancedEngagementsImage = require("@site/static/img/enhanced_engagements.png").default

type FeatureItem = {
  title: string;
  imgSrc: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
	{
		title: 'Empowered Adaptability',
		imgSrc: EmpoweredAdaptabilityImage,
		description: (
			<>
				Harness the chatbot's power and versatility to meet your unique needs with a diverse range of features.
			</>
		),
	},
	{
		title: 'Intuitive Touch',
		imgSrc: intuitiveTouchImage,
		description: (
			<>
				Curate a seamless journey with an organized and sleek chatbot, ensuring a delightful user experience.
			</>
		),
	},
	{
		title: 'Enhanced Engagements',
		imgSrc: enhancedEngagementsImage,
		description: (
			<>
				Offer dynamic and interactive chatbot conversations that keep users engaged and excited to learn more.
			</>
		),
	},
];

function Feature({title, imgSrc, description}: FeatureItem) {
	return (
		<div className={clsx('col col--4')}>
			<div className="text--center">
				<img style={{width: 240, height: 200}} src={imgSrc} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
