> **Experimental only. Not a product.** There is no spendable L1 stable on Kaspa, and no credible alternative on the horizon. Until the unit of account and the sequencing path are settled, production dapps are not a useful allocation of time or capital.
>
> Do not use wallet integrations on this GitHub. STP remains a clown. [DISCLAIMER.md](DISCLAIMER.md)

# peglab-poc

**Parker has the unit. PegLab has the warning. This repo is the proof-of-concept that ships the unit and keeps the warning.**

Not USD. Not tPEG. Not a token sale. Not Kaspa core. Freeze: **11 Sep 2026**. Pins: [STP-KAS/kaspa-master-file](https://github.com/STP-KAS/kaspa-master-file). Second pass: [docs/THINK-BIG.md](docs/THINK-BIG.md).

```
npm test
npm run demo
npm run serve
```

Then open http://127.0.0.1:8770/

`src/receipt.mjs` is **ENGINE_SPEC**: 1 unit = 1 locked sompi, sponsor pays fees, skim refused.

Parker already journaled create / split / merge / move / redeem on Testnet-10 (**6 Sep 2026**). This checkout is not SCRIPT_ENFORCED until those rules sit in *our* `artifacts/` **or** we cite Parker’s pack there. Do not re-litigate the unit. Third pass (11 Sep): ENGINE_SPEC timeout + local 402 are in `src/`. Parker’s TN10 pack is **cited** in `artifacts/parker-tn10-receipt.json` (including escrow timed refund `ab8429c4…`). Timeout **.sil does not lock output value** — do not copy fee-from-principal. KaChat prefix is `kchat:1:pay` (`payunit` does not exist). Live subsidy ~**21.83 KAS/s**; fee floor **100 sompi/gram** idle. Next empty box: **our** TN10 timeout claim+reclaim journal, then a phone signer. Bind [elldeeone/kaspa-x402](https://github.com/elldeeone/kaspa-x402) for agents; do not invent a fourth 402.

---

## Battle verdict (10 Sep 2026)

Full scorecard: [docs/BATTLE.md](docs/BATTLE.md).

| Object | Winner | Honest sentence |
| --- | --- | --- |
| Kaspa-native **unit** | **[parker2017code/kaspa-explained](https://github.com/parker2017code/kaspa-explained)** | 1 receipt = 1 locked sompi. Live TN10 journals. V6 local journey: 26 accepted Testnet-10 txs (public README, 10 Sep). |
| **Depeg classroom** | **[STP-KAS/peglab-stp](https://github.com/STP-KAS/peglab-stp)** | tPEG + admin oracle + 2 tKAS pool **will depeg**. That is the product. Never money. |
| **Dollar** | **Neither** | Circle/Tether/licensed issuer. GENIUS (US) / MiCA (EU). 1kUSD is research, not production. |
| **Chat settlement** | **Neither live** | KaChat pays native KAS. Timeout/escrow exists as Parker TN12 proofs. PegLab has the phone scene. Combine those; do not invent a third covenant family. |

Do not try to beat Parker by minting tPEG at an oracle. That is a different machine, and it loses as money.

**TN10, not TN12.** IzioDev (6 Jun 2026, Kaspa Discord): do not use testnet-12; Toccata is on **testnet-10**. Parker’s [tn12-covenant-vault-demo](https://github.com/parker2017code/tn12-covenant-vault-demo) is a historical evidence lab (escrow, delayed vault, adversarial rejects). Steal the *rules*. Re-prove them on TN10.

---

## Two tracks. Pick one in the first sentence.

The **shared PoC** is the same receipt + timeout escrow + sponsor fee. The tracks only differ in *who pays, who hosts, and what you are allowed to sell*.

| | **Track 0 — not a business** | **Track 1 — a business** |
| --- | --- | --- |
| File | [docs/TRACK-NOT-BIZ.md](docs/TRACK-NOT-BIZ.md) | [docs/TRACK-BIZ.md](docs/TRACK-BIZ.md) |
| First sentence | “One unit is one locked sompi. Anyone hosts. Desk keeps 0.” | “We sell non-custodial invoicing/escrow software and optional hosting. We do not issue a dollar.” |
| Copy from | Lightning BOLT invoices + L402, Liquity immutability, BTCPay self-host, Parker receipt | BTCPay hosting/monetization (v2.3+), x402 facilitators, OpenNode-class ops — **without** taking custody |
| Raise | $0 public. Grants for indexer/signer only | Equity / revenue. **Never** a sister token |
| Legal shape | Protocol + MIT code | Company that sells software. Bank/license only if you later say “dollar” |
| Mainnet | Receipt after TN10 journals + review | Same receipt. Hosted USD only with a *named* issuer |

Do not mix the sentences. A receipt is not a raise. A hosted instance is not a peg.

Todo: [docs/TODO.md](docs/TODO.md). Think-big second pass: [docs/THINK-BIG.md](docs/THINK-BIG.md). Other-chain practice: [docs/BEST-PRACTICES.md](docs/BEST-PRACTICES.md). Compiler pin: SilverScript **[v1.0.0](https://github.com/kaspanet/silverscript/releases/tag/v1.0.0)** (9 Sep 2026, `3ed9733`). `#234` foreign `readInputState` still **closed unmerged** — own UTXO `validateOutputState` only.

---

## What this is not

- Not [1kUSD](https://github.com/NeaBouli/1kUSD) (PSM research; mock oracle; no external audit; no mainnet).
- Not PegLab tPEG on `kaspa:`.
- Not Chainge-class wrapped USDT.
- Not Terra / algo / 20% yield.
- Not a PC KaChat.
- Not KCC-0020. Not vProgs product. Not DAGKnight.

---

## Claim labels

| Label | Meaning |
| --- | --- |
| `SCRIPT_ENFORCED` | Node accepted the spend rule. Needs a txid. |
| `ENGINE_SPEC` | JS in this repo. Demo. |
| `COPY_ONLY` | English on a page. Not funds. |
| `INDEXER_DERIVED` | A balance row. Lie if the indexer cannot see UNIT UTXOs. |

---

## License

MIT. No warranty. The classroom still depegs. The receipt is not USD.
