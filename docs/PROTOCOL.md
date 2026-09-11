# Protocol (implementable) — 11 Sep 2026

ENGINE_SPEC in this repo. SCRIPT_ENFORCED only with a Testnet-10 txid.

## Objects

| Button | Object | Code |
| --- | --- | --- |
| **PAY** | Receipt (1 sompi) or timeout lock of native tKAS | `src/receipt.mjs`, `src/timeout.mjs` |
| **STAMP** | Grams / KIP-21 mass (Gramlane). Not this engine. | Out of this file |

Do not mix buttons. Do not call either `$`.

## Timeout (KaChatPayTimeout)

Copied: `contracts/KaChatPayTimeout.sil` = tutorial TransferWithTimeout.

```
LOCKED --claim(recipient sig, any time)--> CLAIMED
LOCKED --reclaim(sender sig, medianTime >= timeout)--> RECLAIMED
```

After timeout **both** paths are live until one accepted spend. Equality `tx.time == timeout` stays locked (CLTV `<` past median time). Clock is **node median time**, not the browser.

**Honest hole in the .sil:** it does not constrain output value or force a sponsor input. Tutorial escrow skims fee from principal (Parker TN10 `ab8429c4…` did that). A receipt timeout **must not**. ENGINE_SPEC `skimTimeout()` refuses. Next SilverScript pass: `require` output value == principal and a sibling P2PK sponsor.

`LOCK_TIME_THRESHOLD = 500_000_000_000` Unix ms. Do not pass DAA into `tx.time`.

Timeout can ship on **raw tKAS** before a new receipt series. Prefer composing with the receipt later.

## Quote + 402

`src/quote.mjs` scheme `peglab-poc-quote-v1`. Local only.

Proof of pay = **accepted 32-byte txid**, not a facilitator attestation.

Production agents: bind [elldeeone/kaspa-x402](https://github.com/elldeeone/kaspa-x402) `exact` / `standard-native`, CAIP-2 `kaspa:testnet-10`, headers `PAYMENT-REQUIRED` / `PAYMENT-SIGNATURE` / `PAYMENT-RESPONSE`. This repo does not invent a competing envelope.

## Reject codes

| Code | When |
| --- | --- |
| `BAD_HEX` / `BAD_TXID` / `BAD_TIME` | Domain |
| `STALE` | Timeout not in the future, or quote expired, or already settled (engine) |
| `TOO_EARLY` | Reclaim before timeout |
| `WRONG_CLAIMER` / `WRONG_RECLAIMER` | Wrong key |
| `ALREADY_SETTLED` | Second spend |
| `SKIM` | Fee from principal |
| `MIXED_BUTTONS` | Grams stamp on a receipt quote |
| `ASSET` / `SERIES` | tPEG/USD, or receipt without series id |

## Evidence already on TN10 (not this series)

`artifacts/parker-tn10-receipt.json` — Parker 6 Sep receipt pack + escrow timed refund. Cite, do not claim as ours.
