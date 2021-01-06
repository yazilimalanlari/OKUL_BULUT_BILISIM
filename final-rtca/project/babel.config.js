const { join } = require('path');

const src = uri => join(__dirname, 'src', uri);

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@app": src('app'),
          "@assets": src('assets'),
          "@components": src('components'),
          "@screens": src('screens'),
          "@redux": src('redux'),
          "@styles": src('styles')
        }
      }
    ]
  ]
};
