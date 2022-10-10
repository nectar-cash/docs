---
sidebar_position: 8
---

# MEV Marketplace Company

This chapter is of the whitepaper is not about the MEV Marketplace protocol, but about productization of this protocol and other aspects that relate to the company behind the protocol.

## Development Roadmap

### Proof of Concept Milestone: September 2022

The purpose of Proof of Concept is to build essential system components that work in their simplest case, without regard to scalability or user-friendliness. Following components are part of our PoC:

- [x] JSON-RPC node proxy
- [x] Auction controller
- [x] Searcher WebSocket channel
- [x] Transaction signature remover
- [x] Simple arbitrage searcher
- [ ] User rewards tracker
- [ ] User rewards claiming

### Minimum Viable Product Milestone: Q1 2023

MVP milestone is about taking PoC components and upgrading them to be suitable for public deployment, ensuring it can handle a reasonable amount of participants and is user-friendly to use.

- [ ] Production-ready JSON-RPC node
- [ ] Auction system able to handle 100 transactions per second
- [ ] Searcher channels working with 100 searchers
- [ ] As least one searcher in the network (own or onboarded) for most common types of MEV
- [ ] User-friendly claiming dapp
- [ ] At least one wallet integration

### Scaling Milestone: Q2 2023

Scaling milestone is about focusing on the following usage growth dynamics:

- Gaining adoption via new integrations (wallets, node providers) and users' elective actions (choosing to use our node)
- Increasing competition between Searchers by making their integrations with the martkeplace easier.
- Scaling the product to handle increasing volume of transactions.

### Expansion Milestone

Technology built by this point should allow us to expand the marketplace to other networks, starting with Ethereum Layer 2 blockchains that have public mempools or other MEV integrations, and other EVM-compatible Layer 1 blockchains.

### Decentralization Milestone

All parts of the system are decentralizable, both private mempools and auctioning system. Transaction mempools can be decentralized by open-sourcing our own implementation and allowing wallet or node developers to run their own pools. Auctioning system can also be decentralized by allowing auction system choice for RPCs. The entire protocol can be migrate to a custom rollup, with proofs that the most efficent bundles were submitted.

## Long-Term Product Structure

A fully developed system might have the following structure:

It contains:

- **Node Component**, with
  - an efficient JSON-RPC node/proxy implementation
  - a private mempool with signature remover
  - Auction connection manager
- **Auction Component**, with
  - efficient bidding system
  - manager for direct connection to Searchers
- **Integrity Monitor**, with
  - monitoring for submitted transactions
  - monitoring for submitted bids
  - an accounting system for fee and reward payments
  - a rollup for publishing auction proofs

This high level structure is only one of many possible approaches to scalability and decentralization. Further research will very likely introduce changes to this structure.

## Growth Roadmap

## Marketing Roadmap

### Brand

### MEV Gamification

## Team

## Chapter Summary

:::info Forward-Looking Statements
This document is for general information purposes only. It does not constitute investment advice or a recommendation or solicitation to buy or sell any investment and should not be used in the evaluation of the merits of making any investment decision. It should not be relied upon for accounting, legal or tax advice or investment recommendations. This document reflects current opinions of the authors and is not made on behalf of MEV.org Inc., or their affiliates and does not necessarily reflect the opinions of MEV.org Inc., their affiliates or individuals associated with them. The opinions reflected herein are subject to change without being updated.
:::