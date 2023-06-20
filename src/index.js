import { user } from './findUser.js';
import { createInterface } from 'readline';

const { stdin, stdout } = process;

const start = createInterface({
  input: stdin,
  outut: stdout,
});

console.log(`Welcome to the File Manager, ${user}!`);

start.on('line', text => {
  if (text === '.exit') {
    console.log(`Thank you for using File Manager, ${user}, goodbye!`);
    start.close();
  }
});

