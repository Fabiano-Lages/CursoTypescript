const { resolve } = require("path")
const root = resolve(__dirname, '..');
const rootConfig = require('../jest.config.js');

module.exports = { ...rootConfig, ... {
    rootDir: root,
    displayName: 'end2end-tests',
    setupFilesAfterEnv: ["<rootDir>/test/jest-setup.ts"],
    testMatch: ["<rootDir>/src/**/*.test.ts"],
}};