import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Earn rewards just by using the blockchain',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <p>
          Docusaurus was designed from the ground up to be easily installed and used to get your website up and running
          quickly.
        </p>
        <Link className="button button--secondary button--lg" to="/user/overview">
          User Guide
        </Link>
      </>
    ),
  },
  {
    title: 'Earn as an MEV Searcher on our Marketplace',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <p>
          Docusaurus was designed from the ground up to be easily installed and used to get your website up and running
          quickly.
        </p>
        <Link className="button button--secondary button--lg" to="/searcher/intro">
          Searcher Guide
        </Link>
      </>
    ),
  },
  {
    title: 'Reward your users and earn as a Transaction Provider',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <p>
          Docusaurus was designed from the ground up to be easily installed and used to get your website up and running
          quickly.
        </p>
        <Link className="button button--secondary button--lg" to="/provider/intro">
          Transaction Provider Guide
        </Link>
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
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
