const express = require("express");
const router = express.Router();
const fs = require("fs");
const Sharp = require("sharp");

/**
 * @description This middleware is designed to filter all GET requests to images and all operations will 
 * either read the default values or process the params if any present in the request 
 */
router.get("/:imageName", (req, res, next) => {
  const imagePath = "./" + req._parsedOriginalUrl.pathname; //req.originalUrl or req._parsedOriginalUrl.pathname

  if (req.query.format != null || req.query.width != null) {
    if (fs.existsSync(imagePath)) {
      const format = req.query.format ? req.query.format : "jpeg";
      const width = req.query.width ? parseInt(req.query.width) : null;
      const height = req.query.height ? parseInt(req.query.height) : null;
      const crop = req.query.crop ? req.query.crop : "cover";

      const stream = fs.createReadStream(imagePath);

      const transform = Sharp()
        .resize(width, height, {
          fit: crop,
        })
        .toFormat(format, {
          quality: 60,
        });

      res.set("Content-Type", `image/${format}`);
      stream.pipe(transform).pipe(res);

      return stream;
    } 
  }

  next();
});

module.exports = router;
