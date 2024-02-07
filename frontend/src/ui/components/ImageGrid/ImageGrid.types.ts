export default interface ImageGridProps {
  images: Image[][];
}

interface Image {
  alt: string;
  fileName: string;
  to: string;
}
