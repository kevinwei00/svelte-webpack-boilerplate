const path = require('path');
const fs = require('fs');

const rootDir = () => {
  return fs.realpathSync(process.cwd());
};

const resolve = (absPath, relPath) => {
  return path.resolve(absPath, relPath);
}

module.exports = {
  rootDir,
  resolve
}