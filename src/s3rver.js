const S3rver = require('s3rver');

instance = new S3rver({
    port: 4569,
    hostname: 'localhost',
    silent: false,
    directory: 'C:\\tmp\\s3-local'
}).run((err, host, port) => {
    if (err) {
        console.log("Error: " + err)
    }
});
