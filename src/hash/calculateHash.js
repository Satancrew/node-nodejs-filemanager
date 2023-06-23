import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import { checkPath } from '../helpers/utils/checkPath.js';
import { wrongOperation } from '../helpers/utils/wrongOperation.js';
import { greenText } from '../helpers/coloredText/greenText.js';

export const calculateHash = async fileName => {
  try {
    const filePath = await checkPath(fileName);
    console.log(filePath)

    const data = await fs.promises.readFile(filePath);
    const hash = crypto.createHash('sha256');

    hash.update(data);
    const answer = hash.digest('hex');

    console.log(`\n${greenText(answer)}`);
  } catch (error) {
    wrongOperation('fail');
  }
};
