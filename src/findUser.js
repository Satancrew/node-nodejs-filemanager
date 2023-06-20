import { argv } from 'process';

const findUser = () => {
  const args = argv.slice(2); // Игнорируем первые два аргумента, так как они относятся к Node.js

  // Проверяем наличие аргумента --username и возвращаем его значение
  const usernameArg = args.find(arg => arg.startsWith('--username='));
  if (usernameArg) {
    return usernameArg.split('=')[1];
  }

  return null;
}

export const user = findUser();