module.exports = async () => {
  return {
    verbose: false,
    testTimeout: 30000,
    maxWorkers: 1,
    testEnvironment: "node",
    coveragePathIgnorePatterns: [
      "/node_modules/"
    ]
  };
};