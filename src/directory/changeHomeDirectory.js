import { homedir } from 'os';
import { chdir } from 'process';
import { redText } from '../helpers/coloredText/redText.js';

export const changeHomeDir = async () => {
  try {
    const homeDir = homedir();
    chdir(homeDir);
  } catch (error) {
    console.error(redText(error));
  }
};
