import { cwd } from 'process';
import { blueText } from '../helpers/coloredText/blueText.js';

export const currentDir = () => {
  const dir = cwd();
  console.log(`\nYou are currently in ${blueText(dir)}\n`);
};
