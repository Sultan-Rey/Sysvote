/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 var bucketName = "sysvotebucket";
 var bucketRegion = "us-east-1";
 var IdentityPoolId = "us-east-1:b953e4ab-5413-42f7-bd66-7123dbec2172";

 AWS.config.update({
                region: bucketRegion,
                credentials: new AWS.CognitoIdentityCredentials({
                IdentityPoolId: IdentityPoolId
                })
            });

            var s3 = new AWS.S3({
                apiVersion: '2006-03-01',
                params: {Bucket: bucketName}
        });

   function s3upload() {  
                var files = document.getElementById('file').files;
                if (files) 
                {
                    var file = files[0];
                    var fileName = file.name;
                    var filePath = 'my-first-bucket-path/' + fileName;
                    var fileUrl = 'https://' + 'us-east-2' + '.amazonaws.com/my-first-bucket/' +  filePath;
            
                    s3.upload({
                                    Key: filePath,
                                    Body: file,
                                    ACL: 'public-read'
                                }, function(err, data) {
                                    if(err) {
                                        reject('error');
                                    }
                                    
                                    alert('Successfully Uploaded!');
                                }).on('httpUploadProgress', function (progress) {
                                    var uploaded = parseInt((progress.loaded * 100) / progress.total);
                                    $("progress").attr('value', uploaded);
                                });
                }
      };