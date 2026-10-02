// Servidor estático sin dependencias para vista previa
import { createServer } from 'node:http';
import { readFileSync, existsSync } from 'node:fs';
import { extname, join } from 'node:path';
const T = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml' };
const port = process.env.PORT || 5173;
createServer((req, res) => {
  let f = req.url.split('?')[0]; if (f === '/') f = '/index.html';
  const p = join(process.cwd(), f.startsWith('/public/') ? f : (existsSync(join('public', f)) ? 'public' + f : f));
  if (!existsSync(p) || p.indexOf(process.cwd()) !== 0) { res.writeHead(404); return res.end('404'); }
  res.writeHead(200, { 'Content-Type': T[extname(p)] || 'application/octet-stream' }); res.end(readFileSync(p));
}).listen(port, '0.0.0.0', () => console.log('http://localhost:' + port));
