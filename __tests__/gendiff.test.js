import { describe, expect, test } from '@jest/globals';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFixture = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const normalize = (str) => {
  return str
    .trim()
    .replace(/\r\n/g, '\n')  
    .replace(/\s+$/gm, '');  
};

describe('gendiff', () => {
  test('compares flat JSON files', () => {
    const file1 = getFixturePath('file1.json');
    const file2 = getFixturePath('file2.json');
    const expected = readFixture('expected.txt');
    
    const result = genDiff(file1, file2);
    expect(normalize(result)).toBe(normalize(expected));
  });

  test('compares flat YAML files', () => {
    const file1 = getFixturePath('file1.yaml');
    const file2 = getFixturePath('file2.yaml');
    const expected = readFixture('expected.txt');
    
    const result = genDiff(file1, file2);
    expect(normalize(result)).toBe(normalize(expected));
  });

  test('compares mixed JSON and YAML files', () => {
    const file1 = getFixturePath('file1.json');
    const file2 = getFixturePath('file2.yaml');
    const expected = readFixture('expected.txt');
    
    const result = genDiff(file1, file2);
    expect(normalize(result)).toBe(normalize(expected));
  });

  test('throws error for non-existent file', () => {
    const file1 = getFixturePath('file1.json');
    const file2 = 'non-existent.json';
    
    expect(() => genDiff(file1, file2)).toThrow();
  });

  test('throws error for unsupported format', () => {
    const file1 = getFixturePath('file1.json');
    const file2 = getFixturePath('unsupported.txt');
    
    expect(() => genDiff(file1, file2)).toThrow('Unsupported file format');
  });
});