import fs from 'fs';
import { cwd } from 'process';
import { wrongOperation } from '../helpers/utils/wrongOperation.js';
import { greenText } from '../helpers/coloredText/greenText.js';

export const createFile = async fileName => {
  try {
    const dir = cwd();
    const filePath = `${dir}/${fileName}`;
    await fs.promises.writeFile(filePath, '');
    console.log(greenText('\nFile created successfully'))
  } catch (error) {
    wrongOperation('invalid');
  }
};
