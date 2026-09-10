import {receiptDemo, inspect} from '../src/receipt.mjs';

const out = document.getElementById('demo');
const btn = document.getElementById('run');

const fmt = (n) => `${n.toString()} sompi`;

btn.addEventListener('click', () => {
  const demo = receiptDemo();
  const snap = inspect(demo.state);
  const lines = demo.steps.map((s, i) => {
    const flag = s.backedOneToOne ? '1:1' : 'BROKEN';
    return `${i + 1}. ${s.title}\n   ${s.lesson}\n   locked ${fmt(s.lockedSompi)} · claims ${fmt(s.circulating)} · ${flag}`;
  });
  lines.push('');
  lines.push(`skim try → ${demo.skim}`);
  lines.push(`series empty → ${snap.lockedSompi === 0n && snap.circulating === 0n}`);
  lines.push(`oracle → ${snap.oracle}`);
  lines.push(snap.warning);
  lines.push('');
  lines.push('ENGINE_SPEC. Not SCRIPT_ENFORCED. No Testnet-10 txids in this click.');
  out.textContent = lines.join('\n');
});
