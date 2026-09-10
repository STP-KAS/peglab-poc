# Track 0 — not a business

**First sentence:** One unit is one locked sompi. Anyone hosts. This desk keeps 0. Not USD.

This is the default. It is how Bitcoin, Lightning invoices, Liquity’s immutable core, and BTCPay’s *software* (not the hosted SKU) actually spread. PegLab’s own doctrine already chose this for successor A.

**project delusional.** Skip centralised stablecoins for dapps. Fill is not a business.

---

## What you are shipping

A **public-goods receipt protocol** on Kaspa L1:

- Lock tKAS (then KAS) into a covenant. Claim quantity = locked sompi.
- Transfer / split / merge conserve.
- Redeem to holder P2PK.
- Sponsor input (or prepaid grams) pays mass. Principal cannot skim.
- Timeout escrow: they claim now, or you reclaim after `tx.time`. Reuse Parker’s vault/escrow family, re-proven on **Testnet-10**.
- Identity = genesis outpoint + covenant ID + template + series. A name is not authenticity.
- HTTP 402 for agents: pay the receipt, get the resource. Postage may be grams. Two buttons.

The conversation happens in **KaChat on a phone**. This repo is the court file and the teaching bench. It is not a messenger.

---

## What you are not

- Not a company.
- Not an issuer.
- Not a market maker.
- Not a token.
- Not a PC KaChat.
- Not a jar that is Nakamoto (Gramlane grams stay a desk book until `consume()` is live).

If someone wants to donate tKAS to a Testnet-10 demo wallet, that is a testnet gift, not an investment.

---

## Who pays

| Need | Who pays | Who does not |
| --- | --- | --- |
| Compiler, node, KIPs | Already public (kaspanet, KEF, self-fund) | This desk |
| Indexer row per address | Ecosystem grant / volunteer / you run simply-kaspa-indexer | Users of the receipt |
| KaChat signer | KaChat maintainers; this desk can PR a `kchat:1:payunit` sketch | A round |
| Demo coins | TN10 faucet / miner | Public |
| Hosted UI | Anyone. Same rule as a node. | Circle |

Budget that is honest: **$0–$100k** of *time and grants* for the live TN10 series + indexer + one KaChat testnet pay. Not a seed round.

---

## Copy these, exactly

- Parker receipt rules (`docs/backed-receipt.md`).
- Lightning: invoice expires; proof is cryptographic; refund/timeout is a protocol path.
- L402: 402 challenge, pay, retry. Bearer asset.
- BTCPay self-host: keys never uploaded.
- Liquity: immutable core, no admin pause-as-peg.
- PegLab: WILL DEPEG classroom stays next door so nobody lists tPEG.

---

## Done looks like (PoC, not product)

Two phones, or one phone and this lab:

1. Alice locks 0.5 tKAS. Explorer shows genesis + series hashes.
2. She transfers the claim to Bob. Totals unchanged.
3. Bob redeems 0.2 tKAS to his P2PK. Sponsor paid the fee. No skim.
4. A second flow: Alice locks with a 48h timeout. Bob claims, *or* Alice reclaims after timeout. Both accepted on TN10. Txids in `artifacts/`.
5. An agent hits `/quote`, gets HTTP 402 with series + amount + timeout, pays, gets the body.
6. Copy never says `$`. tPEG is not in the asset picker.

Until step 3 has accepted txids, this track is still ENGINE_SPEC.

---

## Never (Track 0)

- Raise against tPEG or a “stability share.”
- Charge a spread on fill.
- Dump fill into miner fees.
- Burn KAS as a product (PoW, not PoS).
- Mainnet the 2 tKAS pool.
- Call grams `$1`.
- Claim SilverScript v1.0.0 shipped production dapps. It shipped a compiler.
