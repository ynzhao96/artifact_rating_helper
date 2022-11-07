import { readFileSync, writeFileSync } from 'fs';

import { resolve } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let content = readFileSync(resolve(__dirname, './dist/index.html')).toString();
console.log(content);

content = content.replace(/\/assets/g, './assets');
writeFileSync(resolve(__dirname, './dist/index.html'), content);