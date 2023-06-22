import os from 'os';
import process from 'process';
import { wrongOperation } from '../helpers/utils/wrongOperation.js';
import { greenText } from '../helpers/coloredText/greenText.js';

export const osParams = async param => {
  switch (param) {
    case '--EOL':
      try {
        console.log(`\n${greenText(JSON.stringify(os.EOL))}`);
      } catch (error) {
        wrongOperation('fail');
      }
      break;
    case '--cpus':
      try {
        for (let cpu of os.cpus()) {
          console.log(
            `Model: `,
            greenText(cpu.model),
            ` Speed: `,
            greenText(cpu.speed),
          );
        }
        console.log(`\nAmount of CPU: ${greenText(os.cpus().length)}\n`);
      } catch (error) {
        wrongOperation('fail');
      }
      break;
    case '--homedir':
      try {
        console.log(`\n${greenText(os.homedir())}`);
      } catch (error) {
        wrongOperation('fail');
      }
      break;
    case '--username':
      try {
        console.log(`\n${greenText(os.userInfo().username)}`);
      } catch (error) {
        wrongOperation('fail');
      }
      break;
    case '--architecture':
      try {
        console.log(`\n${greenText(process.arch)}`);
      } catch (error) {
        wrongOperation('fail');
      }
      break;
    default:
      break;
  }
};
