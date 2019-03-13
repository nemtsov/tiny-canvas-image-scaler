function scaleWidth(aspectRatio, max, imageWidth) {
  const width = max < imageWidth ? max : imageWidth;
  const height = aspectRatio * width;
  return [width, height];
}

function scaleHeight(aspectRatio, max, imageHeight) {
  const height = max < imageHeight ? max : imageHeight;
  const width = height / aspectRatio;
  return [width, height];
}

export default function getScaledDimensions(image, maxWidth, maxHeight) {
  let scaledWidth = image.width;
  let scaledHeight = image.height;
  const aspectRatio = scaledHeight / scaledWidth;
  if (maxWidth) {
    [scaledWidth, scaledHeight] = scaleWidth(aspectRatio, maxWidth, image.width);
  }
  if (maxHeight) {
    [scaledWidth, scaledHeight] = scaleHeight(aspectRatio, maxHeight, scaledHeight);
  }
  return [scaledWidth, scaledHeight];
}
