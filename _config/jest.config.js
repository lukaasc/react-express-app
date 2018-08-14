module.exports = {
  rootDir: process.cwd(),
  verbose: true,
  setupFiles: ['<rootDir>/src/client/config/jest-setup.js'],
  snapshotSerializers: ['<rootDir>/node_modules/enzyme-to-json/serializer'],
  testURL: 'http://localhost/',
  collectCoverageFrom: ['**/client/*/*.{js,jsx}', '!**/client/config/*.{js,jsx}', '!**/node_modules/**', '!**/vendor/**'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  testEnvironment: 'node'
};
