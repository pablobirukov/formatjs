module.exports = {
  testEnvironment: 'jsdom',
  coverageReporters: ['lcov', 'text', 'text-summary', 'html'],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 100,
      lines: 95,
      statements: 95,
    },
  },
}
