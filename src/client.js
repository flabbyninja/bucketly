var fs = require("fs")
var AWS = require("aws-sdk")

var config = {
    s3ForcePathStyle: true,
    accessKeyId: "ACCESS_KEY_ID",
    secretAccessKey: "SECRET_ACCESS_KEY",
    endpoint: new AWS.Endpoint("http://localhost:4569")
}

var client = new AWS.S3(config)

const checkBucketExists = async (params) => {
    const options = {
        Bucket: params.bucket
    };
    try {
        await params.client.headBucket(options).promise();
        return true;
    } catch (error) {
        if (error.statusCode === 404) {
            return false;
        }
        throw error;
    }
};

var params = {
    bucket: "test-bucket",
    client: client
};

checkBucketExists(params).then( (result) => console.log(result));

// create default bucket
var params = {
    Bucket: "test-bucket",
    CreateBucketConfiguration: {}
};

// client.createBucket(params, function (err, data) {
//     console.log(err, data)
// });
//
// var params = {
//     Key: "test-image",
//     Bucket: "test-bucket",
//     Body: fs.createReadStream("./image.png")
// }
//
// client.upload(params, function uploadCallback(err, data) {
//     console.log(err, data)
// })