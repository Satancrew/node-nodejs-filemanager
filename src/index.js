import { user } from './helpers/utils/findUser.js';
import { createInterface } from 'readline';
import { greenText } from './helpers/coloredText/greenText.js';
import { currentDir } from './directory/currentDirectory.js';
import { changeHomeDir } from './directory/changeHomeDirectory.js';
import { switchDir } from './directory/switchDirectory.js';
import { list } from './fs/list.js';
import { parse } from 'path';
import { wrongOperation } from './helpers/utils/wrongOperation.js';
import { checkOperation } from './helpers/utils/checkOperation.js';
import { createFile } from './fs/createFile.js';
import { removeFile } from './fs/removeFile.js';

const { stdin, stdout } = process;

const start = createInterface({
  input: stdin,
  outut: stdout,
});

start.on('line', async operation => {
  const command = await checkOperation(operation);
  let args;

  switch (command) {
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
    case 'cd':
      args = operation.split(' ');
      if (args.length > 2) {
        await wrongOperation('invalid');
        currentDir();
      } else {
        await switchDir(args[1]);
        currentDir();
      }
      break;
    case 'add':
      args = operation.split(' ');
      if (args.length > 2) {
        await wrongOperation('invalid');
        currentDir();
      } else {
        await createFile(args[1]);
        currentDir();
      }
      break;
    case 'rm':
      args = operation.split(' ');
      if (args.length > 2) {
        await wrongOperation('invalid');
        currentDir();
      } else {
        await removeFile(args[1]);
        currentDir();
      }
      break;
    default:
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
