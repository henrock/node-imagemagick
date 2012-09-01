var imagemagick = require('../index'),
	path = require('path'),
	image = path.normalize(__dirname + '/IMG_6379.jpg');

imagemagick.identify(image, function(err, res){
	console.log(err);
	console.log(res);
});
