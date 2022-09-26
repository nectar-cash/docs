---
sidebar_position: 2
---

# Introduction to MEV

MEV was originally abbreviation of Miner Extractable Value, but with the move to Proof of Stake it has been renamed to Maximal Extractable Value.

MEV encompasses all financial opportunities that arise from transactions on the blockchain. From arbitrage to liquidations, bots can discover ways to extract value from the state of the blockchain before or after a certain transaction happens. The transaction might be a swap, an oracle update, change in liquidity or something else. MEV is a fairly generic concept and is constantly evolving, with new opportunities created by new DeFi protocols or other innovations on the blockchain. 

Value extraction is performed by bots called Searchers. Searchers tend to specialize into one type of MEV, and optimize themselves to be as efficient as possible. Searchers can operate on public mempools (list of yet-unconfirmed transactions) or private protocols.

Currently almost all MEV efforts are for the benefit of miners

## A Brief History of MEV

:::note
This brief history is only an introduction. Other chapters explore related concepts in more depth.
:::

With the advent of DeFi in the summer of 2020, user actions on the blockchain began creating opportunities for bots.

Initially there was little competition, and Searcher transactions were added using existing public mempools. As more developers have learned of MEV opportunities, competition increased, and gas wars started.

This wasn’t good, because a lot of failed Searcher transactions clogged available block space.

MEV was most famously introduced to the cryptocurrency community in “Flashbots 2.0” whitepaper in 2020.

Flashbots entered the space, establishing themselves as block builders. Flashbots provided an endpoint for Searchers to submit “bundles”: a list of transactions, both from mempool and their own contruction. These bundles would compete via gas fees, and Flashbots picked the most valuable bundles to construct. 

Flashbots and mining pools maintaind a trust-based relationship: Flashbots provided mining pools with the most valuable blocks that rewarded miners via priority gas fees, and miners in turned didn’t “unbundle” Searchers’ transactions, taking all MEV for themselves. This created a stable, competitive ecosystem, driving Searchers’ margin down over time.

With Ethereum’s migration to Proof of Stake, block production became a lot more decentralized. In Proof of Work, a small number of mining pools had trust-based relationship to Flashbots. If a mining pool stole from MEV Searchers, Flashbots could stop providing them with blocks. This becomes no longer feasible in Proof of Stake, with thousands of individual validators.

## Types of MEV

MEV being a very generic concept means that it includes a wide array of different Searcher-produced transactions. These can be split by strategy, toxicity, attribution, level of competition for them, sensitivity to timing or block ordering, and many other ways.

### MEV Strategy Types

Four main types of MEV tracked by MEV-Explore are:

#### Arbitrage
According to latest data, around 60% of MEV is arbitrage. This 

#### Liquidations
The second largest category of MEV, approximately 20%, are liquidations. These MEV transactions can be seen as “doing a job” that was designed by dapp developers.

#### Sandwiching
Sandwich attacks, approximately 20% of MEV, are the most notorious type duo to their toxicity and them directly taking money from the user that otherwise wouldn’t be taken.

#### Replay
One more type of MEV.

There is also a long tail of other strategies that don’t fit neatly in these buckets. Some searchers specifically focus on the long tail strategies, as there can be less competition for them.

### Toxic vs Non-Toxic MEV
It is common to split MEV into two other types: Toxic and Non-Toxic.

#### Toxic ME

Toxic MEV hurts the user in some way, usually by extracing maximum possible fees or providing user with the worst allowed exchange rate. Toxic MEV is almost always attributable to a single transaction, belonging to the user from whom the value is extracted. Some Searchers (particularly those with public identities) don’t perform any Toxic MEV.

#### Non-Toxic MEV

On the other hand, non-toxic MEV does not hurt any specific user, and in many ways provides a service to the blockchain as a whole. Arbitrage transactions normalize asset prices across different trading protocols; liquidation MEV enforces dapp design by ensuring that enough collateral is backing loans. Non-Toxic MEV can be harder to attribute to a single user transaction, and sometimes arise from events off-chain, such as oracle updates.

### Attributable vs Non-Attributable MEV
One more way to 

## Law of MEV Preservation
As explained by Hasu from Flashbots, MEV has an almost thermodynamic property of preservation: if one method to add MEV transactions gets disabled, there are other ways how MEV would show up. Financial opportunities left on the network would eventually be taken.

MEV transactions have a basic transmission channel of public mempools. This channel is highly inefficient both in terms of block use and value capture, but if more efficient channels are blocked, Searchers return to using them.

Even if MEV transactions were censored by some network participants, remaining network participants could still establish a direct connection with centralized block builders, and introduce MEV transactions that way. Block building is a fundamentally centralizing moment in blockchains, allowing additional value extraction.

Due to this “law”, Ethereum researchers have 

## MEV Supply Chain
who profits and how

## MEV Market Size
MEV-Explore estimates that over 2021

## Chapter Summary
In summary, Maximal Extractable Value is an unavoidable outcome of transparent, on-chain economy. It is also a very large portion of on-chain transactions, totalling $0.6B over 2022. MEV transactions are built by Searcher bots and include arbitrage, liquidations, and various “attacks” that surround user transaction to extract maximal value. Fundamentally, MEV cannot be avoided and can only be redirected, to be captured not just by Searchers.