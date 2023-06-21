import process from 'process';
import { homedir } from 'os';
import path from 'path';
import { redText } from '../helpers/coloredText/redText.js';
import { wrongOperation } from '../helpers/utils/wrongOperation.js';

export const switchDir = async (path) => {
  try {
  const homeDir = homedir();
  const currDir = process.cwd();
  if (path === 'up') {
    if (currDir === homeDir) {
      await wrongOperation('root');
    } else {
      process.chdir('../');
    }
  }
  else {
    process.chdir(path);
  }
} catch (err) {
  await wrongOperation('invalid');
}}