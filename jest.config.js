module.exports = {
  globals: {
    'ts-jest': {
      enableTsDiagnostics: true,
    },
  },
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/test/**/*.test.(ts|js)'],
  testEnvironment: 'node',
  verbose: true,
};
