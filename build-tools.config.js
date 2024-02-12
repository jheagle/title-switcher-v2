module.exports = {
  browser: {
    name: 'titleSwitcher',
  },
  readme: {
    from: 'dist/**/!(*.min).js',
  },
  typescript: {
    config: 'tsconfig.json',
    enabled: true,
  },
}
