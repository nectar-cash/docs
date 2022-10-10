---
sidebar_position: 4
---

# Law of MEV Preservation

As explained by Hasu from Flashbots, MEV has an almost thermodynamic property of preservation: if one method to add MEV transactions gets disabled, there are other ways how MEV would show up. Financial opportunities left on the network would eventually be taken.

MEV transactions have a basic transmission channel of public mempools. This channel is highly inefficient both in terms of block use and value capture, but if more efficient channels are blocked, Searchers return to using them.

Even if MEV transactions were censored by some network participants, remaining network participants could still establish a direct connection with centralized block builders, and introduce MEV transactions that way. Block building is a fundamentally centralizing moment in blockchains, allowing additional value extraction.

Due to this “law”, Ethereum researchers have 