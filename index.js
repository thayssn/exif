const ExifImage = require('exif').ExifImage;

const imagePaths = ['stock-photo.jpg', 'test.jpg']

for(let path of imagePaths){

    try {
        new ExifImage({ image : path }, function (error, exifData) {
            if (error)
                console.log('Error: '+error.message);
            else
                console.log(exifData); // Do something with your data!
        });
    } catch (error) {
        console.log('Error: ' + error.message);
    }
}