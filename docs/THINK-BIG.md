# Think big — second pass (11 Sep 2026)

Four agents plus this desk. Same pins as the master file. Ambitious, gated, sourced.

**The 10-year bet is not a Kaspa dollar.** It is programmable cash that keeps a promise: a still number, a timeout, a public court file, postage that does not skim principal, and machines that pay without Circle as the only rail. Kaspa’s emission is already ~96% out. After the remaining ~1B KAS (through ~2057) miners eat **fees**. This product class is how those fees exist. Becoming Circle is the failure mode, not the win.

Parker already has the unit. PegLab already has the warning. This file is what sits **on top** of both.

---

## 1. Correction to the first pass

The 10 Sep todo said the next empty box was “broadcast receipt lock / transfer / redeem on Testnet-10.”

**Parker already did that.** Dated **6 Sep 2026**, `design/PUBLIC-APPS-REVIEW.md`, node `wss://muon-10.kaspa.blue`. Browser path: three disposable keys, encrypted journal, Testnet-10 faucet. Node-specific acceptance, not finality. No independent audit. Not mainnet.

| Action | txid (TN10) |
| --- | --- |
| create | `9e6f73970704fee4e6374ca4b6a320c2f626ea820f15556beca9274201f14750` |
| split | `711cb57137a8ef9dfe8fac9ae4f8df4a01f5e491b5850b6a474b8f3829fa9862` |
| merge | `9d884f44868d0ef044f2294b8127b158ee5dbd98b89d2f6255e253b97dca2ca7` |
| move | `41fe310957bb2f75e7df562f55d5b4cbba2326853a43d69d24583155e4619670` |
| redeem-half | `4f73b413ab63602462cb99051990a83a748bd2f6b32055d9b8526d25688dbd39` |
| redeem-full | `c474525df24a718d1e4ecebc3ec081cb8d7cf5c95614c12d3273f554da3247bd` |

Wrap round trip **7 Sep 2026**: 100 pUSD Sepolia ↔ 100 wTestUSD. Trusted local oracle. **wTestUSD cannot buy the town’s crops.** Economy first order **7 Sep**: 21 accepted TN10 txs. V6 local **8 Sep**: 26 accepted + 5 VM rejects. Cloudflare Pages is **not** proof the signer backend is ready.

This repo’s `src/receipt.mjs` is still **ENGINE_SPEC**. Parker’s pack is cited in `artifacts/parker-tn10-receipt.json` (not our series). Our `tn10-receipt.json` is still missing. Two honest paths:

1. **Cite Parker’s pack** as SCRIPT_ENFORCED evidence of the *rules*. Do not pretend we invented the unit.
2. **Reproduce** on a *new* series (our genesis, our journal) if we need independent evidence.

**Do not re-litigate the receipt.** Steal it. The empty boxes that are actually empty: timeout on **TN10**, user-wallet signing, indexer row, postage, HTTP 402, KaChat covenant signer.

---

## 2. Layer cake (never flatten)

```
  humans:  KaChat quote → pay → claim/reclaim     (pocket)
  agents:  HTTP 402 + receiver-signed quote        (machine)
  postage: sponsor input  |  prepaid grams         (stamp, not pay)
  channel: optional k402 / x402 batch-settlement   (many tiny pays)
  escrow:  timeout covenant  (claim now XOR reclaim after tx.time)
  unit:    Parker receipt    (1 sompi locked = 1 sompi claimed)
  court:   Kaspa L1 Toccata  (10 BPS, KIP-16/17/20/21)
  warning: PegLab classroom  (WILL DEPEG forever)
```

Each layer is a different object. Mixing them is how tPEG becomes “money” and grams become “Nakamoto.”

---

## 3. Why now (security budget, not a price story)

- Chromatic emission: ~5.6% step down every Kaspa month; halves yearly. No tail emission unless a *future KIP* says so (today: no).
- Circulating ~27.69B of ~28.70B max (~96%). Remainder ~1B KAS through ~2057, then **fees only**.
- Toccata min relay 100 sompi/gram (policy, 100× the old floor). Absolute user fees are still tiny.
- Core R&D already named the consumer hole: a “dollar” UTXO that still needs KAS for storage mass ([Who Pays the KAS?, 1 Sep 2026](https://kaspa.news/articles/who-pays-the-kas-the-ux-problem-hiding-inside-a-dollar-payment)). Menu, **not a KIP**: receiver-funded, sender-funded, or **sponsor-funded with refundable KAS**.
- McKinsey/Artemis: actual stablecoin *payments* ~$390B annualized from Dec 2025 activity ≈ **0.02% of global payments**. Most “stablecoin volume” is treasury/trading. Kaspa does not win coffee by printing a thinner USDC.

**Implication:** hide KAS from the user only if a named sponsor inventories it. Wholesale demand is real and lumpy. It is not millions of people keeping gas in a wallet. Track 0 keeps the meter honest (desk 0; miners get the *network* fee). Track 1 may sell a disclosed postage SKU. Neither may pretend the chain stopped needing KAS.

---

## 4. HTTP 402 — do not invent a fourth protocol

Three efforts already exist. Cite them. Bind or stay out.

| Effort | What it is | Status (checked 11 Sep 2026) | Use |
| --- | --- | --- | --- |
| **[elldeeone/kaspa-x402](https://github.com/elldeeone/kaspa-x402)** | Intended **x402 v2 binding**. `exact` = ordinary native KAS (no seller covenant). Optional `batch-settlement` covenant. CAIP-2, PAYMENT-* headers. | **TN10 alpha.10**. 18 required flows passed 10 Aug 2026. Demo [kaspa-x402.org](https://kaspa-x402.org). Kas-Smiths thread. Not RC. | Default for **agent 402**. Do not fork the envelope. |
| **[Kali123411/k402](https://github.com/Kali123411/k402)** + [kccs#4](https://github.com/kaspanet/kccs/pull/4) | L1 **covenant payment channel**: lock once, BIP340 vouchers off-chain, close/refund on-chain. Author says **mainnet open/close with split enforced**. | KCC **draft**. elldeeone (22 Aug): HTTP example is **not** x402 v2. Author agreed to renumber / drop 402 framing. | Steal the **channel primitive**. Do not call it Kaspa’s x402. |
| **[KASPACOM/x402-KAS](https://github.com/KASPACOM/x402-KAS)** | TN12 two-party facilitator experiment. | **Superseded.** Their README: do not use for new integrations; evaluating elldeeone on TN10. | Historical only. |
| **[kaspa-x402-router](https://github.com/Kali123411/kaspa-x402-router)** | Paying proxy: USDC on Base → KAS service (and reverse). **Not a bridge.** Router holds its own working KAS, takes a spread. | Author claims Base corridors live. | Track 1 may *point* at it. It is issuer+operator risk. Not native money. |

**Kaspa 402 this PoC is allowed to ship:** L402 trust model (receiver-signed quote; proof = accepted `txid` / preimage), x402 HTTP envelope **if** we bind to elldeeone, AP2-style human mandate later. **Acceptance rule:** our node checks quote signature, expiry, amount, `payto`, and the txid. A facilitator may exist; it is never the source of truth for the amount.

Gramlane `/seq` 402 is a **stamp** (grams). Keep two buttons.

---

## 5. Other-chain steal list (sourced, 11 Sep)

Full tables: [BEST-PRACTICES.md](BEST-PRACTICES.md). Corrections from the second-pass research:

| Steal | Do not steal | Source |
| --- | --- | --- |
| BTCPay: MIT invoices, keys never on host, v2.3 **instance monetization** | A processor token; a % of coins | BTCPay 2.3.0, 18 Dec 2025 |
| Namecheap on BTCPay | Inflated volume slogans | **1.1M txs, >$73M**, May 2020–Oct 2024; **$2M** domain Sep 2025 |
| Unbank on BTCPay | “40 million payments” | Official case study: **40,416 txs, $40M**, Jun–Dec 2024 |
| L402 + Lightning Agent Tools (11 Feb 2026) | Giving an agent the node keys | lightning.engineering |
| BOLT12 offer → fresh invoice | Reusing BOLT11 (preimage leak) | Spec merged 2025; CLN/LDK native |
| Hold invoice = quote accepted, goods not released | Jamming the DAG with long holds | Optech; Lightning hold *fees* 2025 |
| Circle: cash existed at SVB (~$0.87–0.88, then recovered) | Calling a KAS pool cash-like | Circle blog; GENIUS signed **18 Jul 2025**; OCC trust **final 10 Jul 2026** |
| Sky LitePSM **caps** (gap lifted $400M→$800M Jun 2026 after outflow days) | Infinite PSM | ARK / Sky forum |
| Liquity redemption; **no ICO of the stable** | Sister token that mints to defend $1 | Liquity docs; $2.4M seed + $6M Series A |
| Cashu FAQ: mint **custodies** | Desk book wearing cryptography | docs.cashu.space |
| DagLock 0.5% in bytecode | DagLock as a dollar | github.com/dilljens/DagLock, unaudited |
| Sablier as a *schedule* | Streaming as a monetary base | Team wound down product **Jul 2026**; contracts live |
| Ethena Oct 2025: Binance print ~$0.65 vs DEX near par | One CEX index as the dollar | CoinDesk 11 Oct 2025 |
| Chainge wKAS 2025: wrap paused, traded far below native | “1:1 wrap” without live unwrap | Kaspa Daily / Protos |
| 1kUSD | Racing it | 229 tests, mock oracle, 0 production |

Industrial: quote **kWh / hour / job-id** in a signed quote; convert to sompi at quote time; hold; settle on delivery. Display FX is a banner. COPA-DATA is context, not a partner. No invented plant.

---

## 6. Two tracks at 10-year scale

Unchanged first sentences. Bigger scenes.

### Track 0 — not a business
[TRACK-NOT-BIZ.md](TRACK-NOT-BIZ.md)

A plant manager and an agent agree: “lock 20 receipt-units, 48 hours.” Either they claim now or you reclaim after timeout. Postage is sponsor or grams. Anyone runs the MIT binary. This desk keeps 0. KaChat is the pocket. PegLab still depegs next door.

**Instrument:** grants + donations (BTCPay software, Lightning R&D). Optional Belgian VZW only if a grant needs a payee. **$0–$100k** time/grants for timeout journal + indexer + one KaChat testnet pay.

**Year 10:** Bitcoin-invoice public goods. Desk still 0. If a licensed EMT exists on Kaspa, document how to verify it. Do not issue it.

### Track 1 — a business
[TRACK-BIZ.md](TRACK-BIZ.md)

Same still number. The plant pays **~$10–$30/mo** for a URL, uptime, support (BTCPay host class). Payments go to *their* wallet. Optional disclosed postage SKU (sponsor UTXO owned by the merchant if possible). Named USD in the picker only with a named issuer and freeze UX *theirs*.

**Instrument:** Belgian BV when taking card/SEPA. Equity against *software*. MiCA: grandfathering for crypto-asset services ended **1 Jul 2026**. Software that never holds keys is a different object from CASP/EMT — confirm with counsel. Postage sponsor is the dangerous edge (can look like transfer-on-behalf). ESMA EMT register 7 Sep 2026: 23 issuers; USDC/EURC listed; **USDT not**.

**Correction:** do not cite Unbank as “40 million payments.” Cite **40,416 txs / $40M**.

**Year 10:** a hosting/support company. If the world got a licensed Kaspa EMT, host it. If not, still do not print one.

---

## 7. Shared spine (revised empty boxes)

Tracks still split only after an invoice + a 402 exist. Phase 1 is **Parker-done for the rules**; this checkout still owes its own journal *or* an explicit citation file.

```
Cite or reproduce Parker’s TN10 receipt pack
  → timeout claim AND reclaim on TN10 (not TN12)
  → indexer row + unknown-series reject
  → KaChat (phone) signs the covenant
  → postage: sponsor and/or grams consume()
  → one human invoice + one 402 (bind elldeeone; do not invent K402-prime)
  → Track 0 anyone-hosts  and/or  Track 1 instance SaaS
  → mainnet receipt after review
  → named USD only if an issuer is on Kaspa
  → optional channel (k402 / x402 batch-settlement) for many tiny pays
```

Timeout can ship on **raw tKAS** before a new receipt series, because KaChat already pays KAS. Prefer the receipt.

`validateOutputState` does **not** lock amount (official v1 tutorial). Every continuation must `require(tx.outputs[i].value == …)`. Hardcoded miner fees in example escrows are a trap: principal cannot pay mass.

---

## 8. Kill criteria

Kill the PoC if:

- six months pass with no timeout TN10 journal and no cited Parker pack in `artifacts/`
- tPEG listed in KaChat as money
- receipt called `$`
- foreign `readInputState`
- work moves to TN12
- silverc `master` replaces v1.0.0
- a fourth incompatible 402 envelope ships “because ours is simpler”
- Track 1 takes a cut of principal or holds keys
- Track 0 keeps fill
- grams called Nakamoto or `$1`
- 1kUSD raced with a thinner PSM
- PegLab’s 2 tKAS pool mainnetted as money
- one CEX index used as a dollar
- the pitch needs WILL DEPEG removed

---

## 9. This is delusional if…

1. Essays keep shipping and `artifacts/` stays empty **and** Parker’s pack is not even cited.
2. KaChat never signs the covenant — then this is a block-explorer toy.
3. Grams stay one host’s `ledger.json` while copy says Nakamoto.
4. x402 USDC eats machine commerce and Kaspa 402 has no still number and no receiver-signed quote.
5. Fee demand never shows up (faucet spam ≠ security budget).
6. Someone lists tPEG or reserved kUSD as money.
7. Track 1 “temporarily” custodies.
8. `#234` is ignored.
9. SilverScript v1.0.0 is sold as a dapp.
10. Industrial named bills pretend to be a zenon/SCADA deployment that was never asked.

**Still not delusional:** Parker has the unit. PegLab has the warning. Gramlane has the sequenced work tab. KaChat has the pocket. elldeeone has a TN10 x402 alpha. k402 has a channel primitive. Circle has the dollar. This desk’s job is timeout + postage + one 402 that does not lie, then pick a sentence — public goods, or software company — and never mix them.

---

## 10. What “done” looks like when we actually think big

A designer and a client already talking in KaChat. Quote 20 receipt-units, 48 hours. Number does not move with KAS. Pay / claim / reclaim. Postage sponsored. An agent hits the same quote over HTTP 402 and our node, not a facilitator, is the truth. A plant manager sees job-id + kWh as a banner on sompi. Miners got mass. Nobody was told to buy USDT on another chain to finish a Kaspa conversation.

That scene is allowed to be the north star. It is not allowed to skip the timeout journal.
