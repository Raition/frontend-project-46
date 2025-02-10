import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const getFileJSON = (file) => {
  const filePath = path.resolve(process.cwd(), file);
  const result = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(result);
};

const getFileYaml = (file) => {
  const filePath = path.resolve(process.cwd(), file);
  const result = yaml.load(fs.readFileSync(filePath, 'utf8'));
  return result;
};

export { getFileJSON, getFileYaml };
