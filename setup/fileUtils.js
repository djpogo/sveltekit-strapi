const fs = require('fs');
const { COPYFILE_EXCL, R_OK, F_OK, W_OK } = fs.constants;
const crypto = require('crypto');

function fileExists(filePath) {
  try {
    return fs.lstatSync(filePath).isFile();
  } catch (Exception) {
    return false;
  }
}

function fileWriteable(filePath) {
  fs.access(filePath, F_OK | W_OK | R_OK, (error) => {
    if (error) throw error;
  });
}

function copyEnv(path) {
  const error = fs.copyFileSync(`${path}/.env.example`, `${path}/.env`, COPYFILE_EXCL);
  if (!error) {
    return;
  }
  if (error && error.code === 'EEXIST') {
    console.info(`${path}/.env already exists`);
    return;
  }
  if (error) throw error;
  console.log(`Could not copy ${path}/.env.example to ${path}.env`);
}

function parseEnvFile(path) {
  const fileContent = fs.readFileSync(`${path}/.env`, 'utf-8');
  return fileContent.split('\n');
}

function updateJwt(data, secretLength) {
  return data.map((string) => {
    if (string.indexOf('ADMIN_JWT_SECRET') === 0) {
      return `ADMIN_JWT_SECRET=${crypto.randomBytes(secretLength).toString('base64')}`;
    }
    if (string.indexOf('JWT_SECRET') === 0) {
      return `JWT_SECRET=${crypto.randomBytes(secretLength).toString('base64')}`;
    }
    return string;
  });
}

module.exports = {
  fileExists,
  fileWriteable,
  copyEnv,
  parseEnvFile,
  updateJwt
};
