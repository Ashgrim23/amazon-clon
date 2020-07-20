const aws=require('aws-sdk')


aws.config.update({
    secretAccessKey: process.env.AWSSecretKey,
    accessKeyId: process.env.AWSAccessKeyId
})

const s3 = new aws.S3()


const deletePhoto=function(req, res, next){
    
    if (req.body.deletePhoto) {
        const len=req.body.deletePhoto.length
        const key=req.body.deletePhoto.substring(len-13)    
        
        var params = {  Bucket: 'amazonclon', Key: key };
    
        s3.deleteObject(params, function(err, data) {
            if (err) 
                console.log(err, err.stack);          
          });
    }    
    next()
}

module.exports=deletePhoto
