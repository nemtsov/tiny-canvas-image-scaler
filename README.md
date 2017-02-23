# Tiny Canvas Image Scaler [![Build Status](https://img.shields.io/travis/behance/tiny-canvas-image-scaler.svg)](http://travis-ci.org/behance/tiny-canvas-image-scaler) [![NPM version](https://img.shields.io/npm/v/tiny-canvas-image-scaler.svg)](https://www.npmjs.com/package/tiny-canvas-image-scaler) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

The purpose of this library is to be the smallest canvas-based image-scaling utility.

## Usage

```js
var imageScaler = require('tiny-canvas-image-scaler')
var options = {
  width: 300px
};

imageScaler.getScaledUrl(imageUrl, options).then((scaledUrl) => {
  const image = document.getElementById('my_image');
  image.src = scaledUrl;
});
```

```js
var imageScaler = require('tiny-canvas-image-scaler')
var options = {
  width: 200px
};

imageScaler.getScaledCanvas(imageUrl, options).then((canvas) => {
  const container = document.getElementById('container');
  container.appendChild(canvas);
});
```

** Options: **

  - `width` - to scale to (height will adjust proportionally)
  - `canvas` - canvas DOM node that will be used to perform the scaling (one will be created, if not provided)
  - `imageSmoothingEnabled` - property of the canvas context
  - `imageSmoothingQuality` - property of the canvas context
  - `imageFormat` - String, `.toDataURL(imageFormat)`, defaults to `image/png`
  - `imageQuality` - Number, `.toDataURL(imageFormat, imageQuality)`, defaults to `0.92`


## Browser Support

All evergreen browsers plus IE11.


## License

[Apache-2.0](/LICENSE)
