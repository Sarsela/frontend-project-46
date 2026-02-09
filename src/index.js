import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import buildTree from './buildTree.js';
import format from './formatters/index.js';

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

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const ext1 = path.extname(filepath1).toLowerCase();
  const ext2 = path.extname(filepath2).toLowerCase();
  
  const supportedFormats = ['.json', '.yaml', '.yml'];
  if (!supportedFormats.includes(ext1) || !supportedFormats.includes(ext2)) {
    const wrongExt = !supportedFormats.includes(ext1) ? ext1 : ext2;
    throw new Error(`Unsupported file format: ${wrongExt}`);
  }
  
  const content1 = fs.readFileSync(path.resolve(filepath1), 'utf-8');
  const content2 = fs.readFileSync(path.resolve(filepath2), 'utf-8');
  
  const data1 = parseContent(content1, ext1);
  const data2 = parseContent(content2, ext2);
  
  const tree = buildTree(data1, data2);
  return format(tree, formatName);
};

export default genDiff;