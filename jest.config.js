module.exports = {
    name: "memo-algorithms-web",
    verbose: false,
    testMatch: ["**/*.test.js"],
    testEnvironment: "node",
    collectCoverageFrom: ["src/**/*.js", "!**/node_modules/**"],
    coverageThreshold: {
      global: {
        statements: 50,
        branches: 50,
        lines: 50,
        functions: 50,
      },
    },
  };