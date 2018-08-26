var fs = require("fs")
var AWS = require("aws-sdk")

var config = {
    s3ForcePathStyle: true,
    accessKeyId: "ACCESS_KEY_ID",
    secretAccessKey: "SECRET_ACCESS_KEY",
    endpoint: new AWS.Endpoint("http://localhost:4569")
}

var client = new AWS.S3(config)

// create default bucket
var params = {
    Bucket: "test-bucket",
    CreateBucketConfiguration: {}
};
client.createBucket(params, function(err, data) {
   if (err) {
       console.log(err, err.stack);
   }
   else {
       console.log(data)
   }
});

var params = {
    Key: "Key",
    Bucket: "test-bucket",
    Body: fs.createReadStream("./image.png")
}

client.upload(params, function uploadCallback (err, data) {
    console.log(err, data)
})