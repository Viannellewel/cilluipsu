function saturationFilter(imageData, amount) {
  for (let i = 0; i < imageData.data.length; i += 4) {
    let r = imageData.data[i];
    let g = imageData.data[i + 1];
    let b = imageData.data[i + 2];

    let grayscale = 0.299 * r + 0.587 * g + 0.114 * b;
    imageData.data[i] = grayscale + amount * (r - grayscale);
    imageData.data[i + 1] = grayscale + amount * (g - grayscale);
    imageData.data[i + 2] = grayscale + amount * (b - grayscale);
  }
  return imageData;
}
