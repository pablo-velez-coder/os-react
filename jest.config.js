module.exports = {
  moduleDirectories: [".", "node_modules"],
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "jsdom-worker",
    "jest-next-dynamic",
    "<rootDir>/jest.setup.js"
  ],
  testEnvironment: "jsdom",
};
