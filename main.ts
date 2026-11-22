import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Program entrypoint for news-image-20261121 (revised)
const sourceImagePath = fileURLToPath(new URL('./entry.png', import.meta.url));
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const targetImagePath = join(targetDir, 'entry.png');

mkdirSync(dirname(targetImagePath), { recursive: true });
copyFileSync(sourceImagePath, targetImagePath);

const info = statSync(targetImagePath);
if (!info.isFile() || info.size === 0) {
  throw new Error(`Output file invalid: ${targetImagePath}`);
}
