const S3rver = require('s3rver');

new S3rver({
    port: 4569,
    hostname: 'localhost',
    silent: false,
    directory: 'C:\\tmp\\s3-local'
}).run((err, host, port) => {
    if (err) {
        console.log('Error %s on %s:%s', err, host, port);
    }
});
