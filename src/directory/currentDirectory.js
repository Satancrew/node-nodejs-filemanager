import { cwd } from 'process';
import { blueText } from '../helpers/blueText.js';

export const currentDir = () => {
  const dir = cwd();
  console.log(`You are currently in ${blueText(dir)}`);
};
