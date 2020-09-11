const {Storage} = require('@google-cloud/storage')

module.exports = function (reporter, definition) {
  if (reporter.options.blobStorage.provider !== 'gcp-storage') {
    definition.options.enabled = false
    return
  }

  const options = Object.assign({}, definition.options)
  // avoid exposing connection string through /api/extensions
  definition.options = {}

  if (!options.bucket) {
    throw new Error('bucket must be provided to jsreport-gcp-storage')
  }

  const gcs = new Storage();
	const bucket = gcs.bucket(options.bucket);

  async function readFile(filename) {
    return bucket.file(filename).createReadStream();
  }

  async function writeFile(filename, buffer) {
    const file = bucket.file(filename);
    await file.save(buffer);
    return filename;
  }

  async function deleteFile(filename) {
    return bucket.file(filename).delete();
  }

  reporter.blobStorage.registerProvider({
    init: () => {},
    read: readFile,
    write: writeFile,
    remove: deleteFile
  })
}
