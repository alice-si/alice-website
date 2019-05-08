// This script preloads images
// It could be used later to implement overlay spinner

preLoadImages([
  'images/bg-hd.jpg'
]);

async function preLoadImages(images) {
  for (let image of images) {
    await preLoadImage(image);
  }
}

async function preLoadImage(image) {
  return new Promise(function(resolve) {
    const img = new Image();
    img.src = image;
    img.onload = resolve;
  });
}