export interface CarouselProps {
  slides: CarouselSlideProps[];
  timeout?: boolean;
}

export interface CarouselSlideProps {
  alt: string;
  src: string;
}
