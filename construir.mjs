// Sin dependencias: copia index.html y public/ a dist/
import { cpSync, mkdirSync, rmSync, existsSync } from 'node:fs';
rmSync('dist', { recursive: true, force: true });
mkdirSync('dist', { recursive: true });
cpSync('index.html', 'dist/index.html');
if (existsSync('public')) cpSync('public', 'dist', { recursive: true });
console.log('OK dist/index.html');
