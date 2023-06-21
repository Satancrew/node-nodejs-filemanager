import { user } from './helpers/utils/findUser.js';
import { createInterface } from 'readline';
import { greenText } from './helpers/coloredText/greenText.js';
import { currentDir } from './directory/currentDirectory.js';
import { changeHomeDir } from './directory/changeHomeDirectory.js';
import { switchDir } from './directory/switchDirectory.js';
import { list } from './fs/list.js';
import { parse } from 'path';
import { wrongOperation } from './helpers/utils/wrongOperation.js';

const { stdin, stdout } = process;

const start = createInterface({
  input: stdin,
  outut: stdout,
});

start.on('line', async operation => {
  switch (operation) {
    case '.exit':
      console.log(
        greenText(`\nThank you for using File Manager, ${user}, goodbye!`),
      );
      start.close();
      break;
    case 'up':
      await switchDir('up');
      currentDir();
      break;
    case 'ls':
      await list();
      currentDir();
      break;
    default:
      if (operation.startsWith('cd')) {
        const args = operation.split(' ');
        if (args.length > 2) {
          await wrongOperation('invalid');
          currentDir();
        } else {
          await switchDir(args[1]);
          currentDir();
        }
      }
      break;
  }
});

if (user) {
  console.log(greenText(`Welcome to the File Manager, ${user}!\n`));
  await changeHomeDir();
  currentDir();
} else {
  console.log(greenText(`Enter your username and try again`));
  start.close();
}
