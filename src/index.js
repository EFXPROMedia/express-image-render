const express = require("express");
const router = express.Router();
const fs = require("fs");
const Sharp = require('sharp');

router.get('/:imageName', (req, res, next) => {

 const imagePath = "./" + req._parsedOriginalUrl.pathname; //req.originalUrl or req._parsedOriginalUrl.pathname

 if (req.query.format != null || req.query.width != null) {

  if (fs.existsSync(imagePath)) {

   const format = req.query.format ? req.query.format : "jpeg";
   const width = req.query.width ? parseInt(req.query.width) : null;
   const height = req.query.height ? parseInt(req.query.height) : null;
   const crop = req.query.crop ? req.query.crop : "cover";

   const stream = fs.createReadStream(imagePath);

   const transform = Sharp().resize(width, height, {
    fit: crop
   }).toFormat(format, {
    quality: 60
   });

   res.set('Content-Type', `image/${format}`);
   stream.pipe(transform).pipe(res);


   return stream;

   // const write = fs.createWriteStream("resized-" + req.params.imageName);//DONT DELETE
   // stream.pipe(transform).pipe(write);// DONT DELETE it saves to disk with configuration

  } //ensuring the file path is correct
 }

 next();

});

module.exports = router;