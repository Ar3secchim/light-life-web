const nextJest = require('next/jest');
const dotenv = require('dotenv');

const createJestConfig = nextJest();

dotenv.config({
  path: '.env.test',
});

const jestConfig = createJestConfig({
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', '<rootDir>'],
});

module.exports = jestConfig;
