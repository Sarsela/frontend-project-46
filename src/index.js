import fs from 'fs';
import path from 'path';

const genDiff = (file1, file2) => {
  const data1 = JSON.parse(fs.readFileSync(path.resolve(file1), 'utf-8'));
  const data2 = JSON.parse(fs.readFileSync(path.resolve(file2), 'utf-8'));
  
  return `Both files read successfully. Format not implemented yet.`;
};

export default genDiff;
