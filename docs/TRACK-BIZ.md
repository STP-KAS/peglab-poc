# Track 1 — a business

**First sentence:** We sell non-custodial invoicing, escrow, and optional hosting on Kaspa. We do not issue a dollar.

This is the BTCPay path, not the Circle path. It is still big: merchants, agents, and (later) a named USD as *inventory you host*, not money you print.

Not legal advice. Payment stables and e-money are regulated (GENIUS, MiCA). Software that never holds customer funds is a different object. If a lawyer says you need a license, stop the token — there is no token on this track either — and stop any custody until that is true.

---

## What you are selling

A **Kaspa settlement desk**:

| SKU | What the customer gets | What you never get |
| --- | --- | --- |
| **Software** (open, MIT) | Invoice + timeout escrow + receipt explorer + 402 endpoint | Their keys |
| **Hosted instance** | A URL, uptime, support, like LunaNode/Clovyr for BTCPay (~$10–$30/mo class) | Custody. Payments go to *their* wallet |
| **Agent 402** | A facilitator that *checks* an accepted Kaspa txid and returns the resource | The right to invent the amount after the fact. Prefer receiver-signed quotes (Lightning-style) |
| **Later: named USD** | Wallet lists USDC/USDT from a *named* issuer when that asset exists on Kaspa | Issuer status. Freeze UX is *theirs* |

Revenue is **subscription and support**, optionally a disclosed flat sponsor-fee for postage so a 0-KAS receiver still works. Revenue is **not** a cut of principal, a sister token, or tPEG.

BTCPay v2.3 (Dec 2025) already proved the monetization shape: hosts charge merchants for the *server*, never for the coins. Unbank’s official case study is **40,416 txs / $40M** in six months of 2024 — not “40 million payments.” That is still the scale *picture*. Kaspa does not have that traffic today. The PoC is one merchant invoice and one agent 402.

---

## What you are not selling (yet, and maybe never)

| Temptation | Reality |
| --- | --- |
| “Kaspa USDC” | You are Circle’s competitor. Circle raised ~$1.1B, IPO 2025, GENIUS, OCC path. Budget **$10M–$50M+**, bank and lawyers **before** SilverScript. |
| Overcollateral KAS→unit | Maker/Liquity class. Budget **$2M–$15M**: real oracles, audits, surplus, incident process. Not PegLab’s admin key. |
| 0.5% escrow fee as the business | DagLock already occupies covenant escrow. Competing on a take-rate before the receipt is live is a pitch. |
| Token sale | Forbidden. Maker did not ICO DAI. BTCPay did not ICO a processor token. |

If the pitch deck needs PegLab’s UI without WILL DEPEG, the pitch is the bug.

---

## Entity and money (realistic)

Assume Belgium/EU unless you incorporate elsewhere.

1. **Now:** no entity required to publish MIT code and a TN10 demo.
2. **When you take card/SEPA for hosting:** ordinary small-company SaaS. VAT, invoices, a bank account. Not a CASP just for selling software — confirm with counsel.
3. **When you hold customer KAS or issue a unit called euro/dollar:** stop. That is the licensed path. Do not “temporarily” custody to make the demo nicer.
4. **Fundraising:** angel/equity against *software revenue*, or a grant for the open engine. Order of magnitude to reach a paid hosted MVP: **$100k–$1M** (indexer, signer, support, EU entity). Not a $50k Discord round against a 2 KAS pool.

---

## Product scene (same as Track 0, plus a counter)

A designer and a client already talking in KaChat:

1. Quote 20 receipt-units, timeout 48h. Number does not move with KAS.
2. Pay / claim / reclaim. Postage sponsored.
3. Merchant QR on a laptop opens KaChat on the phone with amount filled.
4. Agent: `GET /work` → 402 → pay → body. Human optional.
5. Dashboard (the business surface): unpaid / paid / expired, explorer links, no seed in the browser.

Display FX (USD banner on a KAS receipt) is allowed if it is labelled as a banner. It is not a peg.

---

## Done looks like (PoC)

Track 1 **does not skip** Track 0’s on-chain journal. A hosted UI on top of ENGINE_SPEC is a website, not a settlement company.

Then add:

1. One hosted invoice page that never sees a seed.
2. One paid subscriber (even if it is you paying a test host).
3. Incident copy: five failure sentences (stale, postage, unknown series, paused, timeout).
4. Written policy: keys, pause, redeem-stays-open, no tPEG in the picker.
5. A one-page terms: software, not e-money; receipts are sompi; named USD if/when listed.

---

## Never (Track 1)

- Issue tPEG, points, or a stability token.
- Skim principal for fees.
- Call the receipt `$`.
- Mainnet PegLab’s pool.
- Ship a fake web KaChat.
- Use one admin oracle as a dollar.
- Race 1kUSD by launching a thinner PSM.

Host a named dollar when it exists. Do not print a thinner copy.
