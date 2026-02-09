import fs from 'fs';
import path from 'path';
import yaml from 'yaml';


const parseContent = (content, extension) => {
  switch (extension) {
    case '.json':
      return JSON.parse(content);
    case '.yaml':
    case '.yml':
      return yaml.parse(content);
    default:
      throw new Error(`Unsupported file format: ${extension}`);
  }
};

const genDiff = (file1, file2) => {

  const ext1 = path.extname(file1).toLowerCase();
  const ext2 = path.extname(file2).toLowerCase();
  
  const supportedFormats = ['.json', '.yaml', '.yml'];
  if (!supportedFormats.includes(ext1) || !supportedFormats.includes(ext2)) {
    const wrongExt = !supportedFormats.includes(ext1) ? ext1 : ext2;
    throw new Error(`Unsupported file format: ${wrongExt}`);
  }
  

  const content1 = fs.readFileSync(path.resolve(file1), 'utf-8');
  const content2 = fs.readFileSync(path.resolve(file2), 'utf-8');
  

  const data1 = parseContent(content1, ext1);
  const data2 = parseContent(content2, ext2);
  
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
      
      resultLines.push(`  + ${key}: ${value2}`);  
    } else if (!inSecond) {
      
      resultLines.push(`  - ${key}: ${value1}`);  
    } else if (value1 === value2) {
      
      resultLines.push(`    ${key}: ${value1}`);  
    } else {
      
      resultLines.push(`  - ${key}: ${value1}`);  
      resultLines.push(`  + ${key}: ${value2}`);  
    }
  });
  
  return `{\n${resultLines.join('\n')}\n}`;
};

export default genDiff;
