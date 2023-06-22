import { currentDir } from '../../directory/currentDirectory.js';
import { redText } from '../coloredText/redText.js';

export const wrongOperation = async operation => {
  switch (operation) {
    case 'invalid':
      console.log(redText('\nInvalid input\n'));
      break;
    case 'fail':
      console.log(redText('\nOperation failed\n'));
      break;
    case 'root':
      console.log(redText('\nYou cannot go higher than the root directory\n'));
      break;
    default:
      break;
  }
};
