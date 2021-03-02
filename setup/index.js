const fs = require('fs');
const {
  fileExists,
  fileWriteable,
  copyEnv,
  parseEnvFile,
  updateJwt
} = require('./fileUtils');

const SECRET_LENGTH = 128;

// sapper env setup
if (!fileExists('./sapper/.env')) {
  copyEnv('./sapper');
}

// strapi .evn handling
if (!fileExists('./strapi/.env')) {
  copyEnv('./strapi');
}

try {
  fileWriteable('./strapi/.env');
} catch (Exception) {
  console.log('File nor read/writeable', Exception.code);
  process.exit(1);
}

const envFileContent = parseEnvFile('./strapi');
const updatedJwt = updateJwt(envFileContent, SECRET_LENGTH);
const error = fs.writeFileSync('./strapi/.env', updatedJwt.join('\n'));
if (error) {
  console.error('ERROR on writing .env file', error);
  throw error;
} else {
  console.log('Done! JWT_SECRETs all set up.');
}

