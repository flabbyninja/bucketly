const fs = require('fs');
const AWS = require('aws-sdk');
let client;

async function checkBucketExists(params) {
    try {
        await client.headBucket(params).promise();
        return true;
    } catch (error) {
        if (error.statusCode === 404) {
            return false;
        }
        throw error;
    }
};

function createBucketIfNotExists(params) {
    checkBucketExists(params).then((result) => {
        if (!result) {
            console.log('Bucket does not exist: creating %s', params.Bucket);
            // create default bucket
            let createBucketParams = {
                Bucket: params.Bucket,
                CreateBucketConfiguration: {}
            };

            client.createBucket(createBucketParams, function (err, data) {
                if (err) {
                    console.log(err, data);
                } else {
                    console.log(data);
                }
            });
        }
    });
}

function uploadFile(uploadParams) {
    client.upload(uploadParams, (err, data) => {
        if (err) {
            console.log(err, data);
        } else {
            console.log(data);
        }
    });
}

function main() {
    client = new AWS.S3({
        s3ForcePathStyle: true,
        accessKeyId: 'ACCESS_KEY_ID',
        secretAccessKey: 'SECRET_ACCESS_KEY',
        endpoint: new AWS.Endpoint('http://localhost:4569')
    });

    createBucketIfNotExists({
        Bucket: 'test-bucket'
    });

    uploadFile({
        Key: 'test-image',
        Bucket: 'test-bucket',
        Body: fs.createReadStream('./image.png')
    });
}

main();
