# Todo — make the PoC work

Think big (KaChat, merchants, agents). Stay factual (TN10 journals first). Shared work is **one list**. Tracks split only after the unit is live on Testnet-10.

Compiler: SilverScript **v1.0.0** (`3ed9733`, 9 Sep 2026). Network: **testnet-10 only**. No foreign `readInputState`. No mainnet `kaspa:`. No tPEG in the asset picker.

`[x]` = already true in some STP/Parker repo. `[ ]` = this PoC still empty.

---

## Phase 0 — Honesty (lab)

- [x] PegLab WILL DEPEG classroom exists (`peglab-stp`)
- [x] Parker receipt rules written and VM-tested (`backed-receipt.md`, 27 fixtures)
- [x] ENGINE_SPEC of those rules in this repo (`src/receipt.mjs`, `npm test`)
- [x] Doctrine: Parker unit, PegLab warning, no dollar, no raise against tPEG
- [x] Master file pin: silverc v1.0.0, KIPs 16/17/20/21 Active, TN10 not TN12
- [ ] This repo’s public GitHub live, README matches the battle verdict
- [ ] HTTPS later; localhost is enough for Phase 0

**Done when:** a stranger can run `npm test` and read the two-track sentence without seeing `$` on the receipt.

---

## Phase 1 — Live TN10 receipt (the actual PoC)

This is the empty box PegLab already named. Do not start KaChat or a company until it ticks.

| Item | Done when | Copy from |
| --- | --- | --- |
| [ ] Pin silverc v1.0.0 locally | SHA256 of the Windows zip matches master file `3e0d660c15a9e7ac90f3960da24d348b076b1891481bfe758db18accc8a102e1` | kaspanet/silverscript v1.0.0 |
| [ ] Receipt `.sil` | Compiles on v1.0.0. Own-UTXO `validateOutputState` only. Binding range explicit. | Parker `contracts/public/backed-receipt.sil` |
| [ ] Genesis on TN10 | Outpoint, template hash, series bytes published in `artifacts/tn10-receipt.json` | Parker wrap verification JSON |
| [ ] Lock | Node accepts. Backing sompi = claim sompi | Parker genesis |
| [ ] Transfer | Node accepts. Totals unchanged | Parker move |
| [ ] Partial + full redeem | Holder P2PK paid. Series empty after full redeem | Parker redeem |
| [ ] Skim rejected on-chain | Wrong-fee / principal-as-fee tx **rejected** by the node | Parker 21 adversarial fixtures |
| [ ] Sponsor fee | Separate input; change back to sponsor | Parker + Kaspa Core “who pays the KAS” |
| [ ] Caps in UI | 10 tKAS teaching cap, dust, max fee 3e6 sompi | Both labs |
| [ ] Copy | No `$`. Name ≠ authenticity. ENGINE_SPEC vs SCRIPT_ENFORCED labelled | Doctrine |

**Done when:** an explorer and a second wallet agree on one series balance, and `artifacts/tn10-receipt.json` lists accepted txids for lock, transfer, redeem, plus one reject.

Do **not** use testnet-12 for this phase.

---

## Phase 2 — Timeout pay (the scene primitive)

| Item | Done when | Copy from |
| --- | --- | --- |
| [ ] Quote object | amount, series, timeout, who pays postage | Lightning BOLT 11/12; `kchat:1:payunit` sketch |
| [ ] Lock with timeout | Recipient claims now **or** sender reclaims after `tx.time` | Parker TN12 delayed vault + buyer escrow, **re-proven on TN10** |
| [ ] Both paths journaled | One claim txid, one reclaim txid | Parker evidence pack |
| [ ] Failure copy | Five sentences: stale, postage, unknown series, paused, timeout | PegLab VISION |

**Done when:** one timeout claim and one timeout reclaim are accepted on TN10.

This can go live on **raw tKAS** even before the receipt series, if the receipt contract is still in review. Prefer the receipt.

---

## Phase 3 — Indexer and wallets

| Item | Done when | Copy from |
| --- | --- | --- |
| [ ] Indexer row | Address → UNIT UTXOs. Documented endpoint | simply-kaspa-indexer; Parker payload receipts |
| [ ] Unknown series rejected | Wallet does not show a cloned ticker as funds | Parker identity rule |
| [ ] KasWare / Kastle | Desktop connect for the lab only | STP wallet-integration |
| [ ] KaChat signer | iOS (and Android) signs the covenant. KasWare-on-the-web is not enough | vsmirn0v/KaChat |
| [ ] Asset picker | KAS \| receipt. **No tPEG.** Child mode: receipts/KAS only | PegLab KACHAT.md |
| [ ] `.local/` | Keys never in git, never on the public host | Parker wrap-poc |

**Done when:** a phone that did not create the series can see the balance and sign a transfer.

---

## Phase 4 — Postage so 0-KAS receivers work

| Item | Done when | Copy from |
| --- | --- | --- |
| [ ] Sponsor path on pay | Receiver with 0 tKAS still gets the redeem | Parker sponsor input |
| [ ] Optional grams | Prepaid KIP-21 mass; fill is not a peg; desk keeps 0 on Track 0 | Gramlane WorkCredit |
| [ ] Dust policy | Refuse, don’t strand | PegLab caps |

**Done when:** the pay button does not open with “buy KAS first.”

---

## Phase 5 — Agents and merchants (where “think big” is still realistic)

| Item | Done when | Copy from |
| --- | --- | --- |
| [ ] HTTP 402 | `GET` → 402 with series, amount, timeout → pay → body | L402; x402 v2; Gramlane `/seq` |
| [ ] Merchant QR | Desktop shows QR; phone opens KaChat with amount filled | BTCPay invoice QR; PegLab phone QR |
| [ ] Display FX banner | Optional USD *display* on a sompi receipt, labelled as banner | Parker wrap honesty |
| [ ] Split / tip / stake | Same covenant family, more names | Parker escrow; KaChat groups |

**Done when:** one human invoice and one agent 402 complete on TN10.

This is the last shared phase. After this, pick a track.

---

## Phase 6a — Track 0 only (not a business)

- [ ] Public MIT repo stays the spec. Anyone hosts.
- [ ] Grant application for indexer/signer, or self-fund. **No token.**
- [ ] Classroom (PegLab depeg) remains linked, never merged.
- [ ] Mainnet receipt only after Phase 1–3 + one external review of the `.sil`. Still not USD.

---

## Phase 6b — Track 1 only (a business)

- [ ] Entity that can invoice for hosting (SaaS). Counsel on MiCA *before* any custody.
- [ ] Hosted invoice URL that never sees a seed.
- [ ] Written terms: software, not e-money; receipts are sompi.
- [ ] Price list: instance subscription, not a take-rate on principal.
- [ ] One paying host subscriber (can be internal).
- [ ] Named USD in the picker **only** if that issuer is on Kaspa. Separate asset id.

Do not start Phase 6b while Phase 1 is empty. A landing page is not a settlement company.

---

## Phase 7 — Mainnet receipt (both tracks, gated)

- [ ] New genesis on `kaspa:` with published hashes
- [ ] Caps published
- [ ] No admin USD oracle on this asset
- [ ] Incident channel and pause policy written *before* first user
- [ ] KaChat review
- [ ] Still not called USD. Still not a token sale

---

## Never

- [ ] Mainnet the 2 tKAS PegLab pool as money
- [ ] List lab tPEG in KaChat as a stable
- [ ] Sister token / algo / 20% yield
- [ ] Raise against tPEG
- [ ] Remove WILL DEPEG from the classroom
- [ ] Use TN12
- [ ] `readInputState` a foreign UTXO
- [ ] Recompile onto silverscript `master` instead of v1.0.0

---

## Order (non-negotiable)

```
Honesty (Phase 0)
  → live TN10 receipt + reject journal (Phase 1)
  → timeout claim/reclaim (Phase 2)
  → indexer + a phone signer (Phase 3)
  → postage / grams (Phase 4)
  → one invoice + one 402 (Phase 5)
  → Track 0 public goods  and/or  Track 1 hosted SaaS (Phase 6)
  → mainnet receipt after review (Phase 7)
  → named USD only if an issuer is on Kaspa
```

Skipping to “mainnet chat-pay with a dollar glyph” is how a bridge IOU gets minted.

**Next empty box:** Phase 1 — broadcast receipt lock / transfer / redeem on Testnet-10 and journal txids. Not another tPEG feature. Not another essay.
