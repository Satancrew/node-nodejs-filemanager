import process from 'process';
import path from 'path';

export const checkPath = async filePath => {
  if (path.isAbsolute(filePath)) {
    return filePath;
  } else {
    return path.join(process.cwd(), filePath);
  }
};
