# Battle test: PegLab vs Parker’s GitHub

Freeze: **10 Sep 2026**. Authority for pins: [kaspa-master-file](https://github.com/STP-KAS/kaspa-master-file). Cite Parker as GitHub only.

Parker’s public model is not a dollar printer. It is **[kaspa-explained](https://github.com/parker2017code/kaspa-explained)** (Testnet-10 receipts, wrap lab, Sprout Harbor, V6 economy) plus **[tn12-covenant-vault-demo](https://github.com/parker2017code/tn12-covenant-vault-demo)** (accepted vault/escrow/assurance proofs on the old TN12 lab).

PegLab is allowed to lose. If a row says Parker wins, do not “fix” it by calling tPEG USD.

**TESTNET TOY. NOT USD. DO NOT RAISE AGAINST tPEG.**

---

## 1. What Parker actually proved (rechecked 10 Sep)

### Native receipt (the object PegLab should become)

From `docs/backed-receipt.md` / wrap lab:

- One receipt unit **equals one locked sompi**. Not USD.
- Transfer / split / merge conserve quantity and backing.
- Redeem pays the holder’s P2PK. No mint refill.
- **Sponsor input pays fees.** Principal cannot be skimmed.
- Identity is genesis outpoint + covenant ID + template + series. **A name is not authenticity.**
- 27 VM fixtures: 6 success paths, 21 adversarial rejects (wrong signer, inflation, skim, foreign covenant, series swap).
- Live TN10 evidence exists for create, split, merge, move, partial and full redeem in Parker’s public review docs.

### Wrap / “stable” path (explicitly not money)

- Lock 100 **pUSD** (freely minted Sepolia test token) → issue Kaspa units → burn → release.
- **Trusted local oracle.** Kaspa does **not** verify Ethereum consensus.
- **wTestUSD cannot buy the town’s crops.** Written in the README.
- Round trip recorded **7 September 2026**; vault and claim balances ended at zero.

### Economy (Sprout Harbor + V6)

- Real tKAS spends with rules: wage UTXO, vouchers, pledges, schedule check.
- First order: **21 accepted TN10 txs** (7 Sep 2026).
- Public README (10 Sep): V6 local browser journey reached six outcomes with **26 accepted Testnet-10 transactions** and five native VM rejections. Hosted Cloudflare runtime is a **separate** release gate; a preview is not evidence the backend is ready.
- Game art is interpretation; signatures and spend limits are on-chain.

### TN12 covenant lab (historical primitives)

- Accepted: delayed vault, pledge release/refund, buyer escrow, batch-assurance, payload receipts, adversarial rejects.
- Vocabulary: `SCRIPT_ENFORCED` vs `PLANNER_ONLY` vs `INDEXER_DERIVED` vs `WALLET_POLICY`.
- Honest gaps Parker already listed: no AMM, no lending, no production oracle, no user-wallet signing on those accepted proofs (local keys), no independent audit, mainnet out of scope.
- **Do not build the PoC on TN12.** Toccata product path is **Testnet-10** (IzioDev, 6 Jun 2026). Steal the rules; re-journal on TN10.

Parker’s model in one sentence: **lock real tKAS (or a named test wrap), prove the spend rule, journal the txid, never call it a bank dollar.**

---

## 2. Scorecard

| Test | Parker PoC | PegLab (`peglab-stp`) | Winner |
| --- | --- | --- | --- |
| What the unit *is* | 1 receipt = 1 sompi locked in the output | tPEG minted at an **admin oracle** (default 100_000 sompi/tPEG) plus a 2 tKAS constant-product pool | **Parker** for money. PegLab is a *different object*: a depeg toy. |
| Dollar claim | Forbidden. wTestUSD cannot buy crops. pUSD is freely minted test. | Forbidden in copy (WILL DEPEG). Engine still *has* a USD-shaped oracle + pool | **Tie on copy.** Parker wins on *mechanism* (no dollar feed). |
| Redemption | Holder spends backing; no oracle | Redeem tPEG for tKAS at **admin price** | **Parker** |
| Fees | Sponsor input; no skim of principal | Lab UI does not yet enforce sponsor-fee on a live UNIT tx | **Parker** |
| On-chain evidence | Accepted TN10/TN12 txids, JSON journals, explorer links, V6 26-tx local journey | CONTROL genesis journaled. Mint/redeem on the page still ENGINE_SPEC | **Parker** |
| Caps | 10 tKAS teaching bound on receipts | 10 tKAS backing, 10k tPEG, 2 tKAS pool — same teaching scale | Tie |
| Identity | Genesis / template / series; name ≠ authenticity | Same sentence in PegLab copy | Tie |
| Fail closed | Wrong signer/amount/skim rejected; wrap rejects duplicate deposit/burn | Engine rejects ALIGN, OVER_CAP, PAUSED, STALE_ORACLE, BAD_ADMIN, TINY_POOL | Tie on *intent*. Parker has VM + node rejects on record. |
| Oracle honesty | Wrap oracle is **named as trust**. Native receipt has **none**. | Admin key *is* the price. Lab shows the depeg on purpose | **PegLab** as a *lesson*. **Parker** as a *product*. |
| AMM / “peg defense” | Explicitly **no AMM** on TN12 | Tiny pool **is** the depeg demo | **PegLab** for teaching. **Parker** for not pretending a pool is a peg. |
| Timeout / escrow | TN12 buyer escrow, delayed vault, pledge refund — accepted | Documented for KaChat; **not live** | **Parker** |
| Indexer / replay | Payload receipts, replay guards, claim classes | No UNIT indexer row yet | **Parker** |
| Wallets | Encrypted browser journal; wrap keys stay `.local/`; no public signing server | KasWare header + localhost faucet; public site has no host key | **Tie** (different surfaces). Parker is ahead on **recorded** independent-role txs. |
| Product scene | Town that spends tKAS with rules | KaChat-on-phone vision; PC told KaChat is mobile-only | **PegLab** on *consumer story*. **Parker** on *executed economy*. |
| Funding / law map | Wrap-poc “from here to real capital” table | STABLES-GUIDE: Maker/Circle/Liquity funding, GENIUS, never raise tPEG | **PegLab** on *capital honesty*. Parker’s table is tighter on *ops*. |
| Compiler pin | Claims file: SilverScript v1.0.0 | README still mentions v1-rc1 in places | **Parker / master file**. This PoC pins **v1.0.0**. |
| Mainnet | Out of scope; readiness doc is gaps | Out of scope as money; successor A = Parker’s receipt | **Parker already *is* successor A** |

**Verdict:** PegLab does **not** beat Parker as a Kaspa unit. Parker’s backed receipt is the thing MAINNET.md called successor **A**. PegLab wins only as the **public depeg classroom** and the **fundraising/KaChat map**. If you deploy PegLab’s pool+oracle on `kaspa:`, you lose the battle Parker already won in copy: *do not let a test wrap buy the town.*

Score: **receipts 1–0 Parker; classroom 1–0 PegLab; dollars 0–0; chat settlement 0–0 live.**

---

## 3. Battle on Parker’s own tests

Run this repo’s engine (`npm test`) against Parker’s receipt rules.

| Parker rule | This PoC (`src/receipt.mjs`) | PegLab tPEG engine | Result |
| --- | --- | --- | --- |
| Quantity = backing sompi | Lock/transfer/redeem conserve sompi | Mint: tKAS in must be a multiple of **oracle** price | **This PoC PASS as receipt.** PegLab FAIL as receipt, PASS as toy. |
| No price oracle on the unit | `oracle: 'none'` | `DEFAULT_ORACLE = 100_000n` | **This PoC PASS.** |
| Sponsor pays fees; no skim | `skimPrincipal` throws `SKIM` | Not encoded in the live UNIT path | **This PoC PASS as spec.** Still ENGINE_SPEC until a live UNIT tx. |
| Transfer conserves units | Conserves sompi | Conserves tPEG quantities | Both PASS their object. |
| Redeem to holder | Burns claim, releases sompi | Burns tPEG, pays tKAS at oracle | **This PoC PASS as receipt.** |
| Tiny pool cannot defend $1 | Not this object | `cannotDefendPeg` true at seed | **PegLab PASS** — that is its job |
| Name ≠ authenticity | Series name is a label | Same | Tie |
| Accepted txid journal | **Missing** | CONTROL genesis only | **FAIL** — next empty box |
| wTestUSD cannot buy crops | tPEG must not sit in KaChat as money | Same rule in KACHAT.md | **PASS** in copy; **FAIL** if anyone lists lab tPEG |

---

## 4. What to steal (and what not to merge)

### From Parker

1. Successor A = the receipt. Kill the admin USD oracle on any asset a wallet would show.
2. Sponsor fee input. Principal cannot pay mass.
3. Evidence pack: every “done” is an accepted txid JSON.
4. Claim vocabulary: `SCRIPT_ENFORCED` / `ENGINE_SPEC` / `COPY_ONLY` / `INDEXER_DERIVED`.
5. Wrap honesty: if you ever host USDC, say “trusted issuer/bridge.”
6. Timeout / escrow family already accepted on TN12 — re-prove on TN10.
7. `.local/` never on the public host.

### From PegLab

1. WILL DEPEG classroom, kept **next to** the receipt, never instead of it.
2. KaChat-on-phone scene. Desktop is the lab.
3. Capital instruments: grants for receipts; equity only if you are an issuer; no sister token.
4. KasWare `getBalance` on the public page; host key never there.

### Do not

- Merge tPEG and the receipt into one ticker.
- Build on TN12.
- `readInputState` a foreign UTXO (silverscript `#234` closed unmerged).
- Call a compiler tag a dapp. SilverScript v1.0.0 is a compiler.

---

## 5. Outcome

| If you wanted… | Winner | Next move |
| --- | --- | --- |
| A Kaspa-native **unit** | **Parker receipt** | This repo’s ENGINE_SPEC, then live TN10 lock/transfer/redeem + journal. |
| A **dollar** | **Neither** | Licensed company. See Track 1 only as *software*, not as issuer. |
| A **teaching depeg** | **PegLab** | Keep WILL DEPEG. Do not mainnet the pool. |
| **Chat settlement** | **Neither live** | Parker primitive + KaChat signer. |
| **Something to raise money against** | **Neither as a coin** | Track 0: grants. Track 1: equity in a software company. Never tPEG. |

Parker: https://github.com/parker2017code/kaspa-explained · https://github.com/parker2017code/tn12-covenant-vault-demo  
PegLab: https://github.com/STP-KAS/peglab-stp
