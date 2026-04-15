const fs = require("fs");
const path = require("path");

// 🔥 resolve automaticamente onde está o primereact
const sourceDir = path.dirname(require.resolve("primereact/package.json"));
const targetDir = path.resolve(__dirname, "../dist/types/primereact");

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function getRelativeImport(from, to) {
  let relativePath = path.relative(path.dirname(from), to);
  relativePath = relativePath.replace(/\\/g, "/");
  if (!relativePath.startsWith(".")) {
    relativePath = "./" + relativePath;
  }
  return relativePath;
}

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;

  const stats = fs.statSync(src);

  if (stats.isDirectory()) {
    ensureDir(dest);

    const files = fs.readdirSync(src);
    for (const file of files) {
      copyRecursive(
        path.join(src, file),
        path.join(dest, file)
      );
    }

  } else if (src.endsWith(".d.ts")) {
    ensureDir(path.dirname(dest));

    let content = fs.readFileSync(src, "utf-8");

    // 🔥 resolve imports corretamente (não mais fixo "../")
    content = content.replace(
      /from ['"]primereact\/(.*?)['"]/g,
      (_, p1) => {
        const targetImport = path.join(targetDir, p1 + ".d.ts");
        const relative = getRelativeImport(dest, targetImport.replace(".d.ts", ""));
        return `from "${relative}"`;
      }
    );

    fs.writeFileSync(dest, content);
    console.log("✔", dest);
  }
}

function clean() {
  if (fs.existsSync(targetDir)) {
    fs.rmSync(targetDir, { recursive: true, force: true });
  }
}

function run() {
  console.log("📦 Extraindo tipos do PrimeReact...");
  console.log("📍 Source:", sourceDir);
  console.log("📍 Target:", targetDir);

  if (!fs.existsSync(sourceDir)) {
    console.error("❌ PrimeReact não encontrado!");
    return;
  }

  clean();
  copyRecursive(sourceDir, targetDir);

  console.log("✅ Tipos copiados com sucesso!");
}

run();