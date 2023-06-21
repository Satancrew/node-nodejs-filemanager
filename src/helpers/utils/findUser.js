import { argv } from 'process';

const findUser = () => {
  const args = argv.slice(2); 

  const user = args.find(arg => arg.startsWith('--username='));

  if (user) {
    return user.split('=')[1];
  } else {
    return
  }

}

export const user = findUser();