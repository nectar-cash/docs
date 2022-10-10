---
sidebar_position: 3
---

# MEV Mitigation Approaches

As the Law of MEV Preservation states, MEV can’t be removed (except for changing dapp economic design), it can only be moved around by changing methods in which MEV transactions are collected. This chapter explores various approaches that have been used in the past, are used currently, and also those that are planned for the future by Ethereum researchers and the community.

## Gas Price Auctions

One method that is always available to Searchers but is inefficient both in value capture and used block space is Priority Gas Auctions. Searchers can submit transactions to public mempools with gas price slightly higher or slightly lower to their target transaction, and hope to be the winning Searcher.
This method of MEV transaction inclusion also doesn’t guarantee the the entire “bundle” will be included: it might be frontrunning transaction is included in the block, and the backrunning is not. Searches can introduce additional complexity via previous hash checking, atomic trasnactions, and more, but overall this method of submitting MEV transactions is inefficient.

## Flashbots Auctions

## MEV-Boost Sidecar

## Proposer-Builder Separation

## Protected Mempools

## Chapter Summary