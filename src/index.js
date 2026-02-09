import fs from 'fs';
import path from 'path';

const genDiff = (file1, file2) => {
  const data1 = JSON.parse(fs.readFileSync(path.resolve(file1), 'utf-8'));
  const data2 = JSON.parse(fs.readFileSync(path.resolve(file2), 'utf-8'));
  
  const allKeys = [];
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);

  keys1.forEach(key => {
  if (!allKeys.includes(key)) {
    allKeys.push(key);
  }
});

  keys2.forEach(key => {
  if (!allKeys.includes(key)) {
    allKeys.push(key);
  }
});

  allKeys.sort();

  const resultLines = [];

   allKeys.forEach(key => {
    const inFirst = key in data1;     
    const inSecond = key in data2;    
    const value1 = data1[key];        
    const value2 = data2[key];

     if (!inFirst) { 
      resultLines.push(`+ ${key}: ${value2}`);
    } else if (!inSecond) {
      resultLines.push(`- ${key}: ${value1}`);
    } else if (value1 === value2) {
      resultLines.push(`  ${key}: ${value1}`);
    } else {
      resultLines.push(`- ${key}: ${value1}`);
      resultLines.push(`+ ${key}: ${value2}`);
    }
  });
  return `{\n${resultLines.join('\n')}\n}`;
};

export default genDiff;
