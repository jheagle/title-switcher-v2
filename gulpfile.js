const {
  build,
  defaultCmd,
  gulpConfig,
  compileReadme,
  testFull,
  typescript,
  watchFull,
  watchTest
} = require('js-build-tools/gulpfile.base')

module.exports = {
  build,
  defaultCmd,
  gulpConfig,
  readme: compileReadme,
  testFull,
  typescript,
  watchFull,
  watchTest
}