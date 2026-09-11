# Best practices to steal (other chains and beyond)

A peg is **redemption at par under stress**, not a pool price in a calm week. This PoC is **not** trying to win the dollar market. It is trying to ship programmable cash that other ecosystems already proved, then stay honest about what Kaspa still is not.

Sources sampled **10 Sep 2026**. Not legal advice.

---

## 1. What actually holds a dollar (so we do not fake one)

Fiat-backed is ~95% of working payment-stable value (~$300B+ of ~$320B, Q1 2026 surveys). That is the market’s vote and the regulator’s (US GENIUS Act 2025; EU MiCA full 2026).

| Model | Examples | Steal this | Do not steal |
| --- | --- | --- | --- |
| Fiat 1:1 | USDT, USDC, PYUSD | Redemption at par for cash/T-bills. Segregated reserves. Freeze disclosed. Issuer is a **company that can be sued**. | Their dollar claim, unless you are licensed. Circle: ~$1.1B equity, IPO Jun 2025, OCC path 2026. That is $10M–$50M+ and lawyers first. |
| Overcollateral + redemption | Maker/Sky DAI & USDS; Liquity LUSD/BOLD | Lock more than you mint. Liquity: redeem 1 stable for $1 of ETH. Fail closed on stale oracles. Publish the cap. | PegLab’s one admin key. Sister token that mints to defend $1. Maker: **no DAI ICO** — MKR private sales (Polychain / a16z). |
| PSM to an upstream dollar | Sky LitePSM (USDC ↔ USDS at $1 until the ceiling) | Arb against a *redeemable* dollar. Caps matter. DAI gapped ~$0.89 in Mar 2023 when the PSM *was* USDC and SVB froze Circle. | Raising to *be* the PSM before a named USDC/USDT exists on Kaspa. |
| Native receipt / programmable cash | Parker backed-receipt; Bitcoin DLCs / Taproot escrow; Sablier/Superfluid as *time-locked units* | The unit **is** the locked asset. Display FX is a banner, not a peg. Timeout reclaim. | Calling the receipt `$`. |

### Failed as money (forbidden copies)

| Model | Example | Lesson |
| --- | --- | --- |
| Algorithmic / sister token | Terra UST–LUNA, May 2022 | Backing was confidence. Do Kwon sentenced 2025. Terminal depeg. |
| Thin pool as “peg” | PegLab; farm tokens | Constant-product with shallow depth *is* the depeg. |
| Illiquid “reserves” | IRON / Titan 2021 | If you cannot sell the backing in a run, quantity is a slogan. |
| Yield that pays the peg | Anchor ~20% on UST | Subsidised yield is a run with a date. |
| Venue oracle as cash | Ethena USDe on Binance, Oct 2025 (~$0.65 print vs DEX near par) | CEX index ≠ redemption. |
| Bridge IOU as native | Chainge-class “USDT on Kaspa” | Issuer **plus** bridge risk. Kaspa already saw a depeg. |

[1kUSD](https://github.com/NeaBouli/1kUSD) is the serious Kaspa-dollar research program (PSM, no CDP, Toccata-primary ADR-041). Verified 16 Aug 2026: 229 Foundry tests, mock oracle, stub governance, no external audit, no mainnet. Do not race it with a thinner copy.

---

## 2. Invoices, not stables (what this PoC actually is)

The job is: **two parties agree on a number, then one of them gets paid, without the number becoming an FX trade.** Other ecosystems already shipped that without printing a dollar.

### Lightning (Bitcoin)

- **BOLT 11 invoice:** single-use, expires, amount and payee are signed by the receiver. Settlement proof is `payment_hash` + preimage. No issuer.
- **BOLT 12 offers** (merged Sep 2024): reusable offer → fresh invoice per pay. Refunds exist at protocol level. CLN full support since v24.11; LDK full support.
- **HTLC / hodl invoice:** lock now, claim later, or timeout reclaim. This is Parker’s TN12 delayed vault, said in Lightning words.
- **L402** (Lightning Labs, agent toolkit Feb 2026): HTTP 402 + macaroon + Lightning invoice. Agent pays sats, gets a preimage, retries. Bearer asset, no freeze, sub-cent fees. ~58 live L402 services tracked early 2026 — early, but real.
- **Async payments** (LDK, 2026): mobile node can receive without a custodian holding the HTLC. Still beta, LDK-to-LDK.

**Kaspa takeaway:** a quote in KaChat should look like a BOLT 12 offer (reusable intent) that becomes a one-shot covenant lock (invoice) with an expiry. Proof of pay is an accepted txid, not a screenshot.

### HTTP 402 / machine pay

| Protocol | Rail | Trust | Status (2026) |
| --- | --- | --- | --- |
| **L402** | Bitcoin / Lightning | Receiver-signed invoice. No facilitator for amount. | Live, small. |
| **x402** | Mostly USDC (Base first; v2 multi-chain). Linux Foundation, 2 Apr 2026 (Coinbase, Cloudflare, Stripe + card networks). | Facilitator often attests settlement. Composite receipts (BOLT11-in-x402, issue #1921) try to cut that trust. | Larger agent mindshare. Humans still most of the volume. |
| **MPP** | Stripe / Tempo sessions | Lock a spend cap, batch settle. | Complementary, not a replacement. |
| **AP2** | Google + 60 orgs | Signed *mandate* (user intent), not the cash. | Auth layer. |
| **ACP** | OpenAI + Stripe | Agent checkout at merchants. | Checkout layer. |

Gramlane already speaks HTTP 402 with **grams** (KIP-21 mass). That is postage, not the designer’s invoice. Keep two buttons: **stamp** vs **pay**.

**Kaspa takeaway:** agent commerce does not require a Kaspa dollar. It requires a still number, a timeout, a receipt, and a 402 challenge. L402 did this with sats. x402 did it with USDC. Kaspa can do it with sompi receipts *or* later a named USDC.

### BTCPay Server (the honest business shape)

BTCPay is free, MIT, self-hosted, non-custodial Bitcoin invoicing. Payments go to the merchant wallet. Hosts do **not** hold keys.

- Namecheap: **>$73M / 1.1M txs** on BTCPay (May 2020–Oct 2024) and a **$2M** domain sale (Sep 2025). Unbank official case study: **40,416 txs / $40M** (Jun–Dec 2024) — not “40 million payments.”
- v2.3 (Dec 2025): **subscriptions + server monetization** — a host charges merchants a monthly fee for the *instance*, never a cut of the coins.
- Third-party hosts: LunaNode ~$10/mo, Clovyr ~$20/mo (docs, 2026). Same software.

**Kaspa takeaway for Track 1:** sell **hosting and support**, not a peg. For Track 0: ship the invoice engine, anyone runs it, desk keeps 0.

### Streaming / escrow elsewhere

- **Sablier:** 534k+ streams, 297k+ users (2025). Time-locked units. Gas on L1 hurts micropay. Kaspa’s cheap mass is the opening.
- **DagLock** (Kaspa L1 escrow, SilverScript): 0.5% on settlement, atomic swaps, vaults. Testnet beta; mainnet claim tied to Toccata. **Not this desk.** Steal “covenant escrow, no admin key,” not the fee or the brand.
- **Cashu / ecash:** prepaid bearer inside a mint. Fast and private; the mint is a custodian. Grams are closer to a *desk book* than to Cashu. Do not call the jar Nakamoto.

---

## 3. Engineering rules that survived a run

1. **Redemption is the product.** Liquity, Sky PSM, Parker receipt. PegLab’s redeem-at-admin-price is a different object.
2. **Fail closed on stale prices.** Mint/swap stop; existing holders still exit if backing remains.
3. **Publish the cap.** Sky’s ceiling *is* why DAI gapped. Infinite depth is a lie.
4. **Name ≠ identity.** Genesis / template / series. Wallets that show “USD” from a ticker will get people hurt.
5. **Attestation ≠ audit.** A snapshot of balances is not controls.
6. **Sponsor pays fees.** Kaspa Core R&D already flagged: a dollar UTXO that still needs KAS for mass is bad consumer UX. Solve this *before* calling it payments. KIP-21 grams are the postage answer; receipts are the pay answer.
7. **Pause is a brake, not a peg.** Circle recovered from SVB because reserves were real.
8. **Evidence pack.** Parker: accepted txid JSON. Lightning: preimage. x402 without an invoice is a facilitator story.
9. **No foreign `readInputState`.** silverscript `#234` closed unmerged (Sep 2026). Own-UTXO `validateOutputState` only. Pin compiler **v1.0.0**, do not recompile onto master.
10. **Do not use testnet-12** for Toccata product work. TN10 only.

---

## 4. What Kaspa uniquely adds (so “bigger” is not “become Circle”)

Live on mainnet (Toccata, DAA 474,165,565, 30 Jun 2026):

- ~10 blocks/s, cheap settlement, public evidence.
- Covenants: lock, timeout, split, prove a spend rule — programmable cash.
- Native chat+pay already in a store app (KaChat iOS/Android).
- KIP-21 lanes / grams for prepaid mass.

Kaspa does **not** add: a Treasury, a banking charter, verified Ethereum consensus, or a reason to ignore GENIUS/MiCA if you print “USD.”

vProgs, Kurrent, DAGKnight, KCC-0020 are **research or draft**. Not this PoC.

---

## 5. Capital instruments (copy the instrument, not the tweet)

| Project | Instrument | What money bought | What it did not buy |
| --- | --- | --- | --- |
| Circle | Equity → IPO | Bank, exams, ops, lawyers | A contract that *is* the dollar |
| Maker | Private MKR sales; no DAI ICO | Years of SAI, audits, oracles | Shares in the stable |
| Liquity | Company + fee token | Audits, immutability, independent frontends | A governance god-key |
| BTCPay | Donations + (v2.3) host subscriptions | Payroll for open invoicing | Custody |
| Lightning Labs | Company R&D | L402 / Taproot Assets | A Bitcoin dollar |
| This lab / tPEG | **$0 public raise** | A depeg demo | Nothing that holds $1 |
| This receipt PoC | Grants (Track 0) or software equity (Track 1) | Indexer, signer, KaChat glue | A peg |

**Name matches backing.** “Receipt” → grants / self-fund / SaaS. “Dollar” → equity in a licensed company.
