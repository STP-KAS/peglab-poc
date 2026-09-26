# Grok heavy review (11 Sep 2026)

Three parallel reviewers on [STP-KAS/peglab-poc](https://github.com/STP-KAS/peglab-poc) `main` (`8e129b3`), then this branch.

## Verdict

The engines are an honest ENGINE_SPEC. The HTTP preview was the real defect: it could read anything under the repo, including `.git`. Docs were mostly aligned after the third pass; leftover `kchat:1:payunit` in Track 0 was a lie. GitHub had no CI.

## Issues closed in this branch

| Severity | Issue | Fix |
| --- | --- | --- |
| bug | `server/serve.mjs` served `.git` and any path under the repo (`startsWith(root)` prefix) | `server/public-path.mjs` allowlist + `..` reject. Tests in `tests/public-path.test.mjs` |
| bug | No GitHub Action, so `npm test` never ran on push | `.github/workflows/test.yml` Node 20 |
| suggestion | Track 0 still offered a `kchat:1:payunit` PR | KaChat prefix is `kchat:1:pay` only |
| nit | Serve banner said no txid journal after Parker pack was cited | Banner distinguishes cited pack vs our series |
| bug | Unsigned quote sold as receiver-signed; mapper emitted `x402Version: 2` | HTML + `signed: false`; mapper is `doNotSend` |
| bug | PROTOCOL said equality stays locked; `.sil` is `>=` | PROTOCOL matches `tx.time >= timeout` |
| bug | Race test never raced | Both claim and reclaim succeed on one locked snapshot |

## Still open (do not pretend CI fixed these)

| Severity | Issue |
| --- | --- |
| bug (on-chain, not JS) | `KaChatPayTimeout.sil` does not lock output value or require a sponsor input. Tutorial escrow skims principal. Next compile. |
| suggestion | `makeQuote` does not sign. Local 402 is not x402 v2. Bind elldeeone for agents. |
| suggestion | `acceptPayment` accepts any 64-hex as a txid. ENGINE_SPEC; a node must journal it. |
| suggestion | No our-series TN10 timeout txids. Parker pack is cited, not ours. |

Reviewer notes (scratch, not law): engine / docs / GitHub slices. This file is the public residue.
