import { resolve, join } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { readdirSync, statSync } from 'fs';

function travel(dir, deep, callback) {
  readdirSync(dir).forEach((file) => {
    var pathname = join(dir, file)
    if (deep && statSync(pathname).isDirectory()) {
      travel(pathname, deep, callback)
    } else {
      callback(pathname)
    }
  })
}

export function travelDir(dir) {
  travel(resolve(__dirname, dir), false, function (pathname) {
    console.log(pathname);
  });
}