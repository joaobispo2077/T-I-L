const { promisify } = require('util');
const { resolve } = require('path');
const { readFile, writeFile } = require('fs');

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

const parseFilelineToArtefactList = (line, index) => {
  const [url, commitHash] = line.split('#');

  const isAnArtefact = url && commitHash;
  if (!isAnArtefact) {
    return line.trim();
  }
  console.log(`processing an artefact: ${index} - ${url}`);

  const firstTencommitHashCharacters = commitHash ? commitHash.slice(0, 10) : '';
  const artefact = [url, firstTencommitHashCharacters].join('#');

  return artefact.trim();
}

const isValidLine = line => Boolean(line) && line !== '\n'
  && line.length > 0 && line !== '';

const resolveOF = async (baseURL = "") => {
  const rootDirectory = resolve(__dirname);
  const sourceFile = resolve(rootDirectory, '..', '..', 'data', 'of.txt');

  const fileData = await readFileAsync(sourceFile, 'utf8');

  const fileLines = fileData.split('\n');
  console.info(`\n=== processing ${fileLines.length} lines ===\n`);

  const artefactList = fileLines.map(parseFilelineToArtefactList);
  const filteredArtefactList = artefactList.filter(isValidLine);

  console.log(filteredArtefactList);
  console.info(`\n=== filtered ${filteredArtefactList.length} lines ===\n`);

  const newFileData = filteredArtefactList.map(line => `${baseURL}${line}`)
    .join('\n');

  const targetFile = resolve(rootDirectory, '..', '..', 'data', 'of_resolved.txt');
  await writeFileAsync(targetFile, newFileData);

  console.info("\n===output===\n");
  console.info(newFileData);

}

module.exports = {
  resolveOF
}
