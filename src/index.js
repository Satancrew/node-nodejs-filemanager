import { user } from './findUser.js';
import { createInterface } from 'readline';

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
  console.log(`Welcome to the File Manager, ${user}!`)
} else {
  console.log(`Enter your username and try again`);
  start.close();
}




