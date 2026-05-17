const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? "";
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY ?? "";
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET ?? "";

export interface CloudinaryImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpg' | 'png' | 'auto';
  crop?: 'scale' | 'fill' | 'fit' | 'limit' | 'mfit' | 'pad' | 'lpad';
}

export function getCloudinaryUrl(
  publicId: string,
  options: CloudinaryImageOptions = {}
): string {
  if (!CLOUDINARY_CLOUD_NAME) {
    console.warn('[Cloudinary] Cloud name not configured');
    return '';
  }

  const {
    width,
    height,
    quality = 80,
    format = 'auto',
    crop = 'fill',
  } = options;

  const transformations: string[] = [];

  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  transformations.push(`q_${quality}`);
  transformations.push(`f_${format}`);
  transformations.push(`c_${crop}`);

  const transformationString = transformations.join(',');

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformationString}/${publicId}`;
}

export function getCloudinaryImageUrl(imageId: string | null | undefined, options?: CloudinaryImageOptions): string {
  if (!imageId) {
    return '';
  }

  return getCloudinaryUrl(imageId, options);
}

export const cloudinaryConfig = {
  cloudName: CLOUDINARY_CLOUD_NAME,
  apiKey: CLOUDINARY_API_KEY,
  apiSecret: CLOUDINARY_API_SECRET,
};
