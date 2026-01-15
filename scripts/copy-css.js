import fs from 'fs';
import path from 'path';

const srcDir = path.resolve('src');
const distDir = path.resolve('dist');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

for (const file of fs.readdirSync(srcDir)) {
  if (file.endsWith('.css')) {
    fs.copyFileSync(
      path.join(srcDir, file),
      path.join(distDir, file)
    );
  }
}
