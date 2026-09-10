import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const port = Number(process.env.PORT || 8770);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url || '/', `http://127.0.0.1:${port}`);
  let rel = decodeURIComponent(url.pathname);
  if (rel === '/') rel = '/web/index.html';
  const file = path.normalize(path.join(root, rel));
  if (!file.startsWith(root) || file.includes(`${path.sep}.local${path.sep}`)) {
    res.writeHead(403);
    res.end('forbidden');
    return;
  }
  fs.readFile(file, (err, buf) => {
    if (err) {
      res.writeHead(404);
      res.end('not found');
      return;
    }
    res.writeHead(200, {'content-type': types[path.extname(file)] || 'application/octet-stream'});
    res.end(buf);
  });
});

server.listen(port, '127.0.0.1', () => {
  console.log(`peglab-poc  http://127.0.0.1:${port}/`);
  console.log('TESTNET TOY. NOT USD. ENGINE_SPEC until a txid journal exists.');
});
