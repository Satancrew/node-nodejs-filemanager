import fs from 'fs';
import path from 'path';
import { greenText } from '../helpers/coloredText/greenText.js';
import { wrongOperation } from '../helpers/utils/wrongOperation.js';
import { checkPath } from '../helpers/utils/checkPath.js';

export const copyFile = async (pathToFile, destinationDirectory) => {
  try {
    const copyFrom = await checkPath(pathToFile);
    const copyTo = await checkPath(destinationDirectory);

    if (!fs.existsSync(copyFrom)) {
      wrongOperation('invalid');
      return;
    }

    if (!fs.existsSync(copyTo)) {
      fs.mkdir(copyTo, { recursive: true });
    }

    const fileName = path.basename(pathToFile);
    const pathToFileCopy = path.join(copyTo, fileName);

    const sourceStream = fs.createReadStream(copyFrom);
    const destinationStream = fs.createWriteStream(pathToFileCopy);

    sourceStream.on('error', error => {
      wrongOperation('invalid');
      return;
    });

    destinationStream.on('error', error => {
      wrongOperation('invalid');
      return;
    });

    await sourceStream.pipe(destinationStream);
    console.log(greenText('\nFile copied successfully'));
  } catch (error) {
    wrongOperation('invalid');
  }
};
