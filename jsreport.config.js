module.exports = {
  name: 'gcp-storage',
  main: 'lib/main.js',
  dependencies: [],
  optionsSchema: {
    blobStorage: {
      type: 'object',
      properties: {
        provider: { type: 'string', enum: ['gcp-storage'] }
      }
    }
  },
  extensions: {
    'gcp-storage': {
      type: 'object',
      properties: {
        bucket: { type: 'string' }
      }
    }
  }
}
