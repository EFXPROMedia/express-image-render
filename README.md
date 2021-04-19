This is an express middleware image render and processor, designed with image performance in mind, this module has proven powerful to deal with loads of images at high resolution to thumbnails in matter of milliseconds.

## Installation

`npm i -S express-image-render`

On your express main file:

```javascript
const imageRender = require("express-image-render");
//====================================================================
// ### ADD YOUR IMAGE RENDERING DIRECTORIES
//====================================================================
const imageOpts = {
  quality: 100, // 60 (default), added in v1.0.2 this allows image render quality output control min 1 max 100
};
app.use("/path/to/site/images", imageRender(imageOpts));
app.use("/path/to/another/folder/of/images", imageRender);
```

## Usage

On your Front-end you can call your images adding the following image params:

```json
    width: image output width in px
    height: image output in px
    format: will process the image to a specified format. "jpeg" (default), png, webp, git, tiff, avif, heif, raw, tile
    crop: "cover" (default), contain, fill, inside, outside. Note: `cover and contain will center image`
```

**Note**: All GET requests to images and all operations will either read the default values or process the params if any present in the request.

Example:

```html
<img
  src="/path/to/my/image/image.jpg?width=1000&height=800&format=webp&crop=cover"
/>
```
