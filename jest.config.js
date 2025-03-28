/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: 'jsdom',
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts"
 ],
};