# express-image-render
This is an express image render, small, yet packed with powerful capabilities.

Designed with image performance in mind, this module has proven powerful to deal with loads of images at high resolution to thumbnails in matter of milliseconds.

## Installation

`npm i -S express-image-render`

On your express main file:

```javascript
const imageRender = require('express-image-render');
//====================================================================
// ### ADD YOPUR IMAGE RENDERING DIRECTORIES
//====================================================================
app.use('/path/to/site/images', imageRender);
app.use('/path/to/another/folder/of/images', imageRender);
```


## Usage

On your Front-end you can call your images adding the following image params:

```json
    width: image output width in px
    height: image output in px
    format: will process the image to a specified format. "jpeg" (default), png, webp, git, tiff, avif, heif, raw, tile
    crop: "cover" (default), contain, fill, inside, outside. Note: `cover and contain will center image`
```


Example:
```html
<img src="/path/to/my/image/image.jpg?width=1000&height=800&format=webp&crop=cover">
```

