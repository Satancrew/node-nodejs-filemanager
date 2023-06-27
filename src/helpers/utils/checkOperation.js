export const checkOperation = async operation => {
  const command = operation.split(' ')
  return command[0];
};
