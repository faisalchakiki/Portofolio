import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
export default function Skills() {
  const dataSkill = [
    {
      name: "HTML",
      src: "/assets/img/html.png",
    },
    {
      name: "CSS",
      src: "/assets/img/css.png",
    },
    {
      name: "Javascript",
      src: "/assets/img/javascript.png",
    },
    {
      name: "React",
      src: "/assets/img/react.png",
    },
    {
      name: "Boostrap",
      src: "/assets/img/boostrap.png",
    },
    {
      name: "Tailwind",
      src: "/assets/img/tailwind.png",
    },
  ];
  return (
    <div className="bg-gray text-center py-2 mb-[50px]">
      <h1 className="font-['gloock'] tracking-[2px] text-[17px] mb-[20px] font-bold">
        Skills
      </h1>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        autoplay={{
          delay: 2000,
        }}
        className="flex items-center"
        modules={[Autoplay]}
      >
        {dataSkill?.map((data) => {
          // console.log(data);
          return (
            <SwiperSlide key={data.name}>
              <Image src={data.src} alt="" width={400} height={400} priority />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
