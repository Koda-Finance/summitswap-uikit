module.exports = {
  preset: "ts-jest",
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/.storybook/"],
  transformIgnorePatterns: [
    "node_modules/(?!(lightweight-charts|fancy-canvas)/)"
  ],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};
