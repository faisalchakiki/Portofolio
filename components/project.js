import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Project() {
  const dataProject = [
    {
      nameProject: "Cinephile Web",
      srcDeploy: "https://cinephile-tickets.vercel.app/",
      srcImage: [
        "/assets/img/cinephile-web-1.png",
        "/assets/img/cinephile-mobile.png",
      ],
      srcGitRepo: "https://github.com/faisalchakiki/fw12-frontend",
      year: "2022",
      details:
        "An application for ordering tickets for the latest movies easily via a browser",
      technology: "ReactJs",
    },
    {
      nameProject: "Cinephile App",
      srcDeploy: "https://github.com/faisalchakiki/rn-cinephile/releases",
      srcImage: ["/assets/img/cinephile-mobile.png"],
      srcGitRepo: "https://github.com/faisalchakiki/rn-cinephile",
      year: "2023",
      details:
        "An application for ordering tickets for the latest movies easily via a handphone or mobile.",
      technology: "React Native",
    },
  ];
  return (
    <div className="px-[5%] md:px-[10%] h-[80vh]">
      <h1 className="font-['gloock'] tracking-[2px] text-[17px] mb-[30px] font-bold">
        Project
      </h1>
      {dataProject?.map((data) => {
        return (
          <div key={data.nameProject} className="flex mb-[30px]">
            <div className="min-w-[40%] h-[150px] border-2 border border-gray rounded-[10px] overflow-hidden mr-[10px] relative group">
              <div className="absolute font-['gloock'] w-full h-[100%] hidden items-end justify-end font-semibold bg-[#23404457] group-hover:flex">
                <a
                  className="font-['Open_Sans'] text-white mr-2 underline tracking-[1px] text-[20px]"
                  target="blank"
                  href={data.srcDeploy}
                >
                  visit project
                </a>
              </div>
              <Swiper
                autoplay={{
                  delay: 1500,
                }}
                className="flex items-center"
                // modules={[Autoplay]}
              >
                {/* <SwiperSlide>
                  {data?.srcImage?.map((item, index) => {
                    console.log(item)
                    return (
                      <Image
                        key={index}
                        src={item[index]}
                        alt=""
                        width={300}
                        height={300}
                        object-fit="contain"
                      />
                    );
                  })}
                </SwiperSlide> */}
              </Swiper>
            </div>
            <div className="min-w-[60%] flex flex-col justify-evenly">
              <div className="flex justify-between items-center">
                <p className="font-['Open_Sans'] text-[20px] font-semibold">
                  Cinephile Mobile
                </p>
                <a target="blank" href={data.srcGitRepo}>
                  <Image
                    src={"/assets/img/github.svg"}
                    alt=""
                    width={25}
                    height={25}
                  />
                </a>
              </div>
              <div className="flex items-center">
                <div className="bg-primary rounded-full w-fit px-3">
                  <p className="text-white">{data.year}</p>
                </div>
                <p className="ml-2 font-['gloock']">{data.technology}</p>
              </div>
              <span>{data.details}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
