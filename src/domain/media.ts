export type ImageSource = {
  src: string;
  width: number;
  height: number;
  blurDataURL?: string;
};

export type Picture = {
  image: ImageSource;
  alt: string;
};

export type Note = {
  title: string;
  text?: string;
};
