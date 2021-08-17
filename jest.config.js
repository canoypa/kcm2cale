const { resolve } = require("path");
const { pathsToModuleNameMapper } = require("ts-jest/utils");

const { compilerOptions } = require(resolve("tsconfig.json"));

module.exports = {
  transform: {
    "\\.[jt]sx?$": "./scripts/test/babel",
  },
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/" }),
  },
};
