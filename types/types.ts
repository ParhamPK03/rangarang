import { StaticImageData } from "next/image";

export interface SliderImageType {
  id: number;
  img: StaticImageData;
  title: string;
}

export type BlogType = {
  id: number;
  img: StaticImageData;
  title: string;
  excerpt: string;
  date: string;
};

 