// svg-to-css.js
import fs from 'fs';
import path from 'path';

const ICONS_DIR = 'src/icons';
const OUTPUT_DIR = 'src';

const OPTIONS = {
  encoding: 'uri', // 'uri' | 'b64'
  format: 'css'    // 'css' | 'scss' | 'less'
};

const svgConverter = {

  sanitizeSvg(svg) {
    return svg
      .replace(/<\?xml.*?\?>/g, '')
      .replace(/<!DOCTYPE.*?>/g, '')
      .replace(/\r?\n|\r/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
  },

  base64Encode(svg) {
    return Buffer.from(
      encodeURIComponent(svg).replace(
        /%([0-9A-F]{2})/g,
        (_, p1) => String.fromCharCode('0x' + p1)
      )
    ).toString('base64');
  },

  encodeSvg(svg, encoding) {
    const cleanSvg = this.sanitizeSvg(svg);

    if (encoding === 'b64') {
      return this.base64Encode(cleanSvg);
    }

    return encodeURIComponent(cleanSvg)
      .replace(/'/g, '%27')
      .replace(/"/g, '%22')
      .replace(/\(/g, '%28')
      .replace(/\)/g, '%29');
  },

  generateAll() {
    const folders = fs.readdirSync(ICONS_DIR, { withFileTypes: true })
      .filter(dir => dir.isDirectory());

    folders.forEach(folder => {
      this.generateCssForFolder(folder.name);
    });
  },

  generateCssForFolder(folderName) {
    const folderPath = path.join(ICONS_DIR, folderName);
    const files = fs.readdirSync(folderPath);

    let output = '';

    files.forEach(file => {
      if (!file.endsWith('.svg')) return;

      const svg = fs.readFileSync(path.join(folderPath, file), 'utf8');
      const iconName = path.basename(file, '.svg');

      const encoded = this.encodeSvg(svg, OPTIONS.encoding);
      const url =
        OPTIONS.encoding === 'b64'
          ? `data:image/svg+xml;base64,${encoded}`
          : `data:image/svg+xml,${encoded}`;

      output += this.buildCss(folderName, iconName, url, OPTIONS.format);
    });

    const outFile = path.join(OUTPUT_DIR, `${folderName}-icons.css`);
    fs.writeFileSync(outFile, output.trim() + '\n');

    console.log(`✔ ${folderName}.css gerado`);
  },

  buildCss(folder, name, url, format) {
    const className = `.drg-${folder}-${name}`;

    switch (format) {
      case 'scss':
        return `
@mixin drg-${folder}-${name} {
  &::before {
    content: "";
    display: inline-block;
    width: 1em;
    height: 1em;
    background-color: currentColor;

    -webkit-mask: url("${url}") no-repeat center / contain;
    mask: url("${url}") no-repeat center / contain;
  }
}
`;
      case 'less':
        return `
.drg-${folder}-${name}() {
  &::before {
    content: "";
    display: inline-block;
    width: 1em;
    height: 1em;
    background-color: currentColor;

    -webkit-mask: url("${url}") no-repeat center / contain;
    mask: url("${url}") no-repeat center / contain;
  }
}
`;
      default:
        return `
${className}::before {
  content: "";
  display: inline-block;
  width: 1em;
  height: 1em;
  background-color: currentColor;

  -webkit-mask: url("${url}") no-repeat center / contain;
  mask: url("${url}") no-repeat center / contain;
}
`;
    }
  }
};

// RUN
svgConverter.generateAll();
