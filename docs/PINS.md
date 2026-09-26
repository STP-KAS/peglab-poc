# Pins (from kaspa-master-file, freeze 10 Sep 2026; think-big addendum 11 Sep)

Not Kaspa core. Merged Active KIP = law. Open PR, Discord rumor, tweet ≠ a pin. Recheck before quoting.

Full map: [STP-KAS/kaspa-master-file](https://github.com/STP-KAS/kaspa-master-file).

## Consensus / compiler

| Pin | Value |
| --- | --- |
| Network for this PoC | **testnet-10** |
| Mainnet Toccata | Live. DAA `474_165_565` (~30 Jun 2026). KIPs 16, 17, 20, 21 Active 15 Jul 2026 |
| rusty-kaspa | **v2.0.1** Toccata maintenance tag |
| silverc | **[v1.0.0](https://github.com/kaspanet/silverscript/releases/tag/v1.0.0)** Ori / someone235, 9 Sep 2026, commit `3ed9733`. Windows zip SHA256 `3e0d660c15a9e7ac90f3960da24d348b076b1891481bfe758db18accc8a102e1` |
| `#234` | Foreign `readInputState` **closed unmerged**. Own UTXO `validateOutputState` only |
| `#243` | Compiled artifact has no compute-budget estimate — still **open** |
| KCC-0020 | **Draft**. Not a gram token |
| DAGKnight (KIP-2) | Still Proposed. Not shipped |
| vProgs / Kurrent | Research. Not product |
| TN12 | Do not use for Toccata product work |

## Parker / PegLab

| What | URL | Note |
| --- | --- | --- |
| Parker education + TN10 apps | https://github.com/parker2017code/kaspa-explained |  |
| Parker site | https://kaspaexplained.com |  |
| Parker TN12 evidence lab | https://github.com/parker2017code/tn12-covenant-vault-demo |  |
| PegLab classroom | https://github.com/STP-KAS/peglab-stp |  |
| Darwin mix | https://github.com/STP-KAS/gramlanepeglab |  |
| Gramlane grams | https://github.com/STP-KAS/gramlane |  |
| This PoC | https://github.com/STP-KAS/peglab-poc |  |
| elldeeone/kaspa-x402 | https://github.com/elldeeone/kaspa-x402 | Intended x402 v2 binding. TN10 alpha.10 (18 flows, 10 Aug 2026). Default for agent 402. Not RC. |
| Kali123411/k402 | https://github.com/Kali123411/k402 | Covenant payment channel. Draft KCC. Author: mainnet open/close. **Not** x402 v2 (elldeeone 22 Aug). |
| KASPACOM/x402-KAS | https://github.com/KASPACOM/x402-KAS | TN12 facilitator experiment. **Superseded.** |
| Who pays the KAS | https://kaspa.news/articles/who-pays-the-kas-the-ux-problem-hiding-inside-a-dollar-payment | Core R&D 25 Jun 2026 recap. Receiver / sender / sponsor+refund. Not a KIP. |

Live chain (api.kaspa.org, 11 Sep 2026): circulating **27.694B / 28.704B** (~96.48%). Subsidy **21.82676446 KAS/s** (DAA ≥ 531,207,000). Fee estimate **100 sompi/gram** all buckets (idle at Toccata floor). DagLock mainnet launch **not evidenced** (API 525; README still testnet beta). k402 README mainnet claim **unverified**; kccs#4 open unmerged. elldeeone kaspa-x402 still **TN10 alpha.10** (10 Aug 2026); demo.kaspa-x402.org live.

## Wallets / chat

| What | Note |
| --- | --- |
| Inject on lab pages | KasWare, Kastle only |
| KaChat | iOS `id6759102359`, Android `com.kachat.app`. No PC. Prefix is **`kchat:1:pay`**. **`kchat:1:payunit` does not exist** (checked MESSAGING.md 11 Sep 2026). |
| KNS | Official GitBook. Indexer FCFS. Not kasdomain |

## Do not claim from these pins

100 BPS live; instant irreversible payments; DAGKnight is consensus; KCC-0020 adopted; foreign `readInputState` is safe; vProgs live; 1kUSD is production; tPEG is USD; SilverScript v1.0.0 shipped audited dapps.
