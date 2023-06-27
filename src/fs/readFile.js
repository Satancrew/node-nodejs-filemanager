import fs from 'fs';
import { cwd } from 'process';
import { wrongOperation } from '../helpers/utils/wrongOperation.js';
import { greenText } from '../helpers/coloredText/greenText.js';
import { currentDir } from '../directory/currentDirectory.js';

export const readFile = async fileName => {
  const dir = cwd();
  const filePath = `${dir}/${fileName}`;

  try {
    const readableStream = fs.createReadStream(filePath, 'utf8');
    readableStream.on('data', data => {
      console.log(greenText(`\n${data}\n`));
    });
    readableStream.on('end', () => {
      currentDir();
    });
    readableStream.on('error', error => {
      wrongOperation('fail');
    });
  } catch (error) {
    wrongOperation('invalid');
  }
};
