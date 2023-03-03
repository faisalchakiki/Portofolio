import Head from "next/head";
import Image from "next/image";
import Project from "@/components/project";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <>
      <div className="max-w-[800px] mx-auto">
        <Head>
          <title>Faisal Chakiki | Fullstack Developer</title>
        </Head>
        <nav className="navbar px-[5%] md:px-[10%]">
          <div className="ml-auto">
            <main className="flex">
              <div>
                <a
                  href="#project"
                  className="font-['Open_Sans'] text-[20px] font-semibold mr-[50px] hover:text-primary"
                >
                  Project
                </a>
              </div>
              <div>
                <a
                  href="mailto:faisalchakiki99@gmail.com?subject=Contact%20Portofolio"
                  className="font-['Open_Sans'] text-[20px] font-semibold hover:text-primary"
                >
                  Contact
                </a>
              </div>
            </main>
          </div>
        </nav>
        <div
          id="user"
          className="px-[5%] md:px-[10%] py-[100px] flex flex-col-reverse md:flex-row items-center"
        >
          <div className="w-[80%] text-center md:text-left md:w-[60%] mt-[20px] md:mt-[0] md:mr-[10px]">
            <h1 className="font-bold text-[30px] mb-[15px]">
              Hi, I am Faisal Chakiki
              <br /> Fullstack Developer
            </h1>
            <p className="text-[15px] mb-[30px]">
              Fresh graduate and Bootcamp Web Developer, now I&apos;m focused on
              learning how to make good websites that function properly.
            </p>
            <button className="btn btn-sm btn-ghost bg-primary w-[150px]">
              <p>Download CV</p>
            </button>
          </div>
          <div className="md:w-[40%] flex justify-center items-center">
            <div className="rounded-full border border-[10px] border-primary w-[300px] h-[290px] md:h-[250px] overflow-hidden ">
              <Image
                className="w-full"
                src={require("../public/assets/img/personal.jpg")}
                alt=""
              />
            </div>
          </div>
        </div>
        <Skills />
        <Project />
      </div>
    </>
  );
}
