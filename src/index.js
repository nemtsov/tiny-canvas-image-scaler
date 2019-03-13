import getLoadedImage from './getLoadedImage';
import getScaledDimensions from './getScaledDimensions';

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
    if (!maxWidth && !maxHeight) {
      throw new Error('either options.maxWidth or options.maxHeight are required');
    }

    [maxWidth, maxHeight] = getScaledDimensions(image, maxWidth, maxHeight);

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
