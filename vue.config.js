const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'bin',
  pages: {
    index: {
      entry: 'src/index.ts',
      template: 'src/index.html',
      title: 'TS Vue Template',
    },
  },
});
