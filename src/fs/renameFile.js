import path from 'path';
import fs from 'fs';
import { greenText } from '../helpers/coloredText/greenText.js';
import { redText } from '../helpers/coloredText/redText.js';
import { wrongOperation } from '../helpers/utils/wrongOperation.js';
import { checkPath } from '../helpers/utils/checkPath.js';

export const renameFile = async (pathToFile, newFileName) => {
  try {
    const copyFrom = await checkPath(pathToFile);
    const fileName = path.basename(copyFrom);

    await fs.promises.rename(fileName, newFileName);
    console.log(greenText('File renamed successfully'));
  } catch (error) {
    wrongOperation('fail');
  }
};
