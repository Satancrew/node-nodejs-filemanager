import path from 'path';
import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream';
import { checkPath } from '../helpers/utils/checkPath.js';
import { wrongOperation } from '../helpers/utils/wrongOperation.js';
import { currentDir } from '../directory/currentDirectory.js';
import { greenText } from '../helpers/coloredText/greenText.js';

export const decompress = async (pathToFile, destinationDirectory) => {
  try {
    const copyFrom = await checkPath(pathToFile);
    const copyTo = await checkPath(destinationDirectory);

    if (!fs.existsSync(copyTo)) {
      fs.mkdirSync(copyTo, { recursive: true });
    }

    const fileName = path.basename(copyFrom, '.br');
    const pathToFileCopy = path.join(copyTo, `${fileName}.txt`);

    const sourceStream = fs.createReadStream(copyFrom);
    const destinationStream = fs.createWriteStream(pathToFileCopy);

    const brFile = zlib.createBrotliDecompress();

    await pipeline(sourceStream, brFile, destinationStream, error => {
      if (error) {
        wrongOperation('fail');
      } else {
        console.log(greenText('File decompressed successfully'));
        currentDir();
      }
    });
  } catch (error) {
    wrongOperation('invalid');
  }
};
