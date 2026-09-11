# Security

TESTNET-10 LAB. NOT USD. NOT PRODUCTION CUSTODY.

- Never paste a seed, key, or mnemonic into this site or this repo.
- `.local/` is gitignored. Do not publish it.
- The local preview binds `127.0.0.1` and serves an allowlist (`web/`, `src/`, `docs/`, `artifacts/`, `contracts/`, plus a few root markdown files). It must not serve `.git` or `.local`.
- Mainnet `kaspa:` addresses are refused by design in the PegLab classroom; this PoC has no mainnet deploy script.
- Compiler pin is silverscript v1.0.0. Do not recompile onto `master`.
- Do not `readInputState` a foreign covenant UTXO (`#234` closed unmerged).
- No independent audit. ENGINE_SPEC is not SCRIPT_ENFORCED.

Report issues on the GitHub repo, or a GitHub Security advisory — never paste seeds into an issue. Do not DM @StppStp with keys.
