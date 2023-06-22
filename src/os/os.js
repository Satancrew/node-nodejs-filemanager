import os from 'os';
import { wrongOperation } from '../helpers/utils/wrongOperation.js';

export const osParams = async param => {
  switch (param) {
    case '--EOL':
      try {
        console.log(`\n${JSON.stringify(os.EOL)}`);
      } catch (error) {
        wrongOperation('fail');
      }
      break;
    default:
      break;
  }
};
