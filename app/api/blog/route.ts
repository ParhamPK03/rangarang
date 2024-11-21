import { NextResponse } from "next/server";
import { BlogType } from "../../../types/types";

import Photo2 from "../../../public/images/p32.jpg";
import Photo3 from "../../../public/images/p33.jpg";
import Photo4 from "../../../public/images/p34.jpg";
import Photo5 from "../../../public/images/p35.jpg";
import Photo6 from "../../../public/images/p36.jpg";

export async function GET() {
  const blogPosts: BlogType[] = [
    {
      id: 1,
      img: Photo3,
      title: "ترندها و پیش بینی های آینده در صنعت چاپ و چاپخانه",
      excerpt:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.",
      date: "23",
    },
    {
      id: 2,
      img: Photo4,
      title: "چگونه فاکتور تجاری مناسب و حرفه ای  چاپ کنیم",
      excerpt:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.",
      date: "05",
    },
    {
      id: 3,
      img: Photo5,
      title: "معرفی انوان کاغذ و جوهر های چاپ لیبل",
      excerpt:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.",
      date: "18",
    },
    {
      id: 4,
      img: Photo2,
      title: "رازهای موفقیت در چاپ انواع کار ویزیت",
      excerpt:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.",
      date: "01",
    },
    {
      id: 5,
      img: Photo6,
      title: "چگونه بهترین پوستر را انتخاب کنیم",
      excerpt:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.",
      date: "28",
    },
  ];

  return NextResponse.json(blogPosts);
}
