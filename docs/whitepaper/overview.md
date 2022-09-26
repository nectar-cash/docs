---
sidebar_position: 1
---

# Overview
We propose a marketplace and auction system for user transactions before they are published to the public mempool. Unlike existing solutions, this auction is done for the users’, not miners’, benefit, allowing to reward the user with any value extractable from their transaction. This method uses game theory to align incentives and maximise user returns, while allowing to monetize the protocol itself. We further estimate that the market size of transaction auctioning can reach $X.XB in 2023 on Ethereum L1, without accounting for additional adoption by alternative Layer 1 or Layer 2 networks.

## Whitepaper Structure
This whitepaper is organized in chapters:

1. [**Introduction to MEV**](./mev-introduction.md) chapter introduces the concept of Maximal Extractable Value, its history, types and market size. Understanding MEV is important to better understand the concepts upon which the marketplace is constructed. *This chapter can be skipped if the reader has a good understanding of MEV.*

2. [**Dealing with MEV**](./dealing-with-mev.md) chapter talks about Ethereum’s current and planned future solutions to mitigate destructive aspects of MEV and enshrine sufficient decentralization for external block building. Understanding current approaches is useful for discussion about compatibility with Ethereum and other networks in the future. *This chapter can be skipped if the reader has a good understanding of Ethereum’s development roadmap, particularly Proposer-Builder Separation.*

3. [**MEV Marketplace**](./mev-marketplace.md) chapter introduces our proposed auction system for user transactions, and discusses Supply and Demand sides for the marketplace.

4. [**Technical Implementation**](./technical-implementation.md) chapter provides a deep dive into system components, protocol structure and decentralization approach.

5. [**Economic Implementation**](./economic-implementation.md) chapter discusses game theory aspects of the system, going through incentives of all market participants, ability to resist counter-incentives, and potential token utility.

6. [**Market Size and Growth**](./market-size.md) chapter estimates existing and future size of the marketplace opportunity, explores competing alternatives and growth opportunities.

7. [**MEV Marketplace Company**](./marketplace-company.md) chapter is about the business behind the marketplace: development, product, marketing and growth strategies, and existing team.

This whitepaper is likely to take approximately 90 minutes to read through and understand. With this in mind, each chapters ends with a one-paragraph summary, and we have provided a much shorter lightpaper.

## Terms Used

This whitepaper assumes some technical knowledge about the way Ethereum works. If you don't have any technical background, some of the more technical terms used in the paper are listed below.

- **Block builders** are network participants that specialize in composing optimally profitable blocks, and suggest these blocks for block proposers, keeping some profits for themselves.

- **JSON-RPC node** is a type of network node that can handle Ethereum JSON-RPC API requests. Infura or Alchemy are examples of SaaS companies that provide JSON-RPC nodes as a service. JSON-RPC is a type of API, using JavaScript Object Notation formatted requests to execute Remote Procedure Calls.

- **Mempool**, or memory pool, is a pool (group) of transactions that have not yet been included in the block by miners or validators. Mempools can be public (default) or private, maintained by inidividual block builders.

- **MEV** stands for Maximal Extractble, and is explained in detail in chapter ["Introduction to MEV"](./mev-introduction.md).

- **Validators** are network participants that have staked 32 ETH, run a network node and occasionally can propose blocks.