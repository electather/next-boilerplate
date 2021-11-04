module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/test-setup/setupTests.js'],
  testMatch: ['**/__tests__/*.ts?(x)'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      'babel-jest',
      { configFile: './test-setup/babel.config.js' },
    ],
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/styles/__mocks__/styleMock.js',
    '^@pages/(.*)$': '<rootDir>/pages/$1',
    '^@pages': '<rootDir>/pages',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jsdom',
};
