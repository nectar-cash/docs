---
sidebar_position: 3
---

# Types of MEV
MEV being a very generic concept means that it includes a wide array of different Searcher-produced transactions. These can be split by strategy, toxicity, attribution, level of competition for them, sensitivity to timing or block ordering, and many other ways.

## MEV Strategy Types
Four main types of MEV tracked by MEV-Explore are:

### Arbitrage
According to latest data, around 60% of MEV is arbitrage. This 

### Liquidations
The second largest category of MEV, approximately 20%, are liquidations. These MEV transactions can be seen as “doing a job” that was designed by dapp developers.

### Sandwiching
Sandwich attacks, approximately 20% of MEV, are the most notorious type duo to their toxicity and them directly taking money from the user that otherwise wouldn’t be taken.

### Replay
One more type of MEV.

There is also a long tail of other strategies that don’t fit neatly in these buckets. Some searchers specifically focus on the long tail strategies, as there can be less competition for them.

## Toxic vs Non-Toxic MEV
It is common to split MEV into two other types: Toxic and Non-Toxic.

### Toxic MEV

Toxic MEV hurts the user in some way, usually by extracing maximum possible fees or providing user with the worst allowed exchange rate. Toxic MEV is almost always attributable to a single transaction, belonging to the user from whom the value is extracted. Some Searchers (particularly those with public identities) don’t perform any Toxic MEV.

### Non-Toxic MEV
Non-Toxic MEV, on the other hand, does not hurt any specific user, and in many ways provides a service to the blockchain as a whole. Arbitrage transactions normalize asset prices across different trading protocols; liquidation MEV enforces dapp design by ensuring that enough collateral is backing loans. Non-Toxic MEV can be harder to attribute to a single user transaction, and sometimes arise from events off-chain, such as oracle updates.

## Attributable vs Non-Attributable MEV

One more way to 
