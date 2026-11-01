// Injects the server-rendered app into dist/index.html so crawlers receive full HTML.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const serverDir = path.join(dist, 'server');

const {render} = await import(pathToFileURL(path.join(serverDir, 'entry-server.js')).href);
const indexPath = path.join(dist, 'index.html');
const template = fs.readFileSync(indexPath, 'utf-8');

if (!template.includes('<!--app-html-->')) {
  throw new Error('Missing <!--app-html--> placeholder in index.html');
}

fs.writeFileSync(indexPath, template.replace('<!--app-html-->', render()));
fs.rmSync(serverDir, {recursive: true, force: true});
console.log('Prerendered dist/index.html');
