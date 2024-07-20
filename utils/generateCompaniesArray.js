import fs from 'fs';
import { companies } from '../public/js/companies.js';

async function generateCompaniesArray() {
  const jsonFilePath = './data/companies.json';
  const jsFilePath = './public/js/companies.js';

  const jsonFileBuffer = await fs.promises.readFile(jsonFilePath);
  const jsonFileData = JSON.parse(jsonFileBuffer);

  const jsFileBuffer = await fs.promises.readFile(jsFilePath);
  const jsFileData = jsFileBuffer.toString('utf-8');

  const jsToWrite = `export const companies = ${JSON.stringify(jsonFileData)};`;

  await fs.promises.writeFile(jsFilePath, jsToWrite);
}

generateCompaniesArray();
