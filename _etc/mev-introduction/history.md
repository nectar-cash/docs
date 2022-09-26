---
sidebar_position: 2
---

# A Brief History of MEV

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