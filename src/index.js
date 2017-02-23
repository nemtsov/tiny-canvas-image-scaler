import getLoadedImage from './getLoadedImage';

function getScaledCanvas(imageUrl, options) {
  let {
    maxWidth,
    maxHeight,
    canvas,
    imageSmoothingEnabled,
    imageSmoothingQuality,
  } = Object.assign({}, {
    canvas: document.createElement('canvas'),
    imageSmoothingEnabled: true,
    imageSmoothingQuality: 'medium',
  }, options);

  return getLoadedImage(imageUrl)
  .then((image) => {
    if (maxWidth) {
      maxWidth = (maxWidth < image.width) ? maxWidth : image.width;
      maxHeight = Math.round(image.height / image.width * maxWidth);
    }
    else if (maxHeight) {
      maxHeight = (maxHeight < image.height) ? maxHeight : image.height;
      maxWidth = Math.round(image.width / image.height * maxHeight);
    }
    else {
      throw new Error('either options.maxWidth or options.maxHeight are required');
    }

    canvas.width = maxWidth;
    canvas.height = maxHeight;

    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = imageSmoothingEnabled;
    ctx.imageSmoothingQuality = imageSmoothingQuality;

    ctx.drawImage(image, 0, 0, maxWidth, maxHeight);

    return canvas;
  });
}

function getScaledUrl(imageUrl, options = {}) {
  return getScaledCanvas(imageUrl, options)
  .then(canvas => canvas.toDataURL(options.imageFormat, options.imageQuality));
}

export default {
  getScaledCanvas,
  getScaledUrl,
};
