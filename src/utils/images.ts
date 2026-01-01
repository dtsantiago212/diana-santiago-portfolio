// Import all images from assets
const images = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/**/*.{jpg,jpeg,png,gif}',
  { eager: true }
);

export function getImage(path: string): ImageMetadata | undefined {
  // Convert path like "paintings/01.jpg" to the full asset path
  const fullPath = `/src/assets/images/${path}`;
  return images[fullPath]?.default;
}

export function getAllImages() {
  return images;
}
