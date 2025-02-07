import fs from 'fs';
import path from 'path';

const parseFile = (file) => {
  const filePath = path.resolve(process.cwd(), file);
  const res = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(res);
};

export default parseFile;
