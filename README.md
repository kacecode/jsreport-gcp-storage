# jsreport-gcp-storage

 jsreport extension adding support for storing blobs in Google Cloud Storage

Similar to https://github.com/jsreport/jsreport-aws-s3-storage, a blob storage supporting Google Cloud Storage for saving binary output from jsreport.

See the blob storages general documentation https://jsreport.net/learn/blob-storages

See how to persist jsreport output reports https://jsreport.net/learn/reports

## Installation

> npm install jsreport-gcp-storage

## Configuration

Required options:
- `bucket`

_Note: Authentication and authorization are pulled from your configured state via gcloud sdk per GCP norms._

Sample `jsreport.config.json`
```js
{
  "blobStorage": {
    "provider": "gcp-storage"
  },
  "extensions": {
    "gcp-storage": {
      "bucket": "weave-analytics-huddle"
    }
  }
}
```

## jsreport-core
```js
var jsreport = require('jsreport-core')({ blobStorage: { provider: 'gcp-storage' } })
jsreport.use(require('jsreport-gcp-storage')({...}))
```
