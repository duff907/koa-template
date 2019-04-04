module.exports = {
  verbose: false,
  globals: {
    NODE_ENV: 'test'
  },
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  modulePathIgnorePatterns: ['<rootDir>/.*/__mocks__'],
  roots: [
    '../../src'    
  ],
  transform: {
    "^.+\\.css$": "./css-transform.js",
    "^.+\\.jpeg$": "./file-transform.js",
    "^.+\\.js?$": "babel-jest"
  },
  testRegex: '.*\\.test\\.js$',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/test/'
  ],
  coverageDirectory: '../../coverage'
};