import fs from 'fs';
import { redText } from '../helpers/coloredText/redText.js';
import { cwd } from 'process';
import { wrongOperation } from '../helpers/utils/wrongOperation.js';

export const list = async () => {
  try {
    const currDir = cwd();
    const table = [];
    const files = await fs.promises.readdir(currDir, { withFileTypes: true });
    files.forEach((file, index) => {
      const type = file.isDirectory() ? 'directory' : 'file';
      table.push({ name: file.name, type: type });
    });

    table.sort((a, b) => {
      if (a.type !== b.type) {
        return a.type === 'directory' ? -1 : 1;
      }
      return a.name.localeCompare(b.name);
    });

    console.table(table);
  } catch (error) {
    await wrongOperation('fail');
  }
};
