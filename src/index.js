import { user } from './findUser.js';
import { createInterface } from 'readline';
import { greenText } from './helpers/greenText.js';
import { currentDir } from './directory/currentDirectory.js';
import { changeHomeDir } from './directory/changeHomeDirectory.js';

const { stdin, stdout } = process;

const start = createInterface({
  input: stdin,
  outut: stdout,
});

start.on('line', text => {
  if (text === '.exit') {
    console.log(greenText(`Thank you for using File Manager, ${user}, goodbye!`));
    start.close();
  }
});

if (user) {
  console.log(greenText(`Welcome to the File Manager, ${user}!\n`))
  changeHomeDir();
  currentDir();
} else {
  console.log(greenText(`Enter your username and try again`));
  start.close();
}




