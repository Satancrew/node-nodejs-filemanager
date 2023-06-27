import fs from 'fs';
import { cwd } from 'process';
import { wrongOperation } from '../helpers/utils/wrongOperation.js';
import { greenText } from '../helpers/coloredText/greenText.js';

export const removeFile = async (fileName) => {
  try {
    const dir = cwd();
    const filePath = `${dir}/${fileName}`;
    await fs.promises.unlink(filePath);
    console.log(greenText('\nFile removed successfully'))
  } catch (error) {
    wrongOperation('invalid');
  }
};