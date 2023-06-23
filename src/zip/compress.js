import path from 'path';
import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream';
import { checkPath } from '../helpers/utils/checkPath.js';
import { wrongOperation } from '../helpers/utils/wrongOperation.js';
import { currentDir } from '../directory/currentDirectory.js';
import { greenText } from '../helpers/coloredText/greenText.js';

export const compress = async (pathToFile, destinationDirectory) => {
  try {
    const copyFrom = await checkPath(pathToFile);
    const copyTo = await checkPath(destinationDirectory);

    if (!fs.existsSync(copyTo)) {
      fs.mkdirSync(copyTo, { recursive: true });
    }

    const fileName = path.basename(copyFrom);

    const pathToFileCopy = path.join(copyTo, `${path.parse(fileName).name}.br`);

    const sourceStream = fs.createReadStream(copyFrom);
    const destinationStream = fs.createWriteStream(pathToFileCopy);

    const brFile = zlib.createBrotliCompress();

    await pipeline(sourceStream, brFile, destinationStream, error => {
      if (error) {
        wrongOperation('fail');
      } else {
        console.log(greenText('File compressed successfully'));
        currentDir();
      }
    });
  } catch (error) {
    wrongOperation('invalid');
  }
};
