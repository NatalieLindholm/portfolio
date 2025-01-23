"use client";
import Image from "next/image";

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full min-h-screen relative">
      {/* banner */}
      <div className="relative w-full h-screen">
        <header className="absolute w-full">
          <nav className="flex justify-end w-full gap-6 mt-10">
            <button
              className="relative bg-white pr-7 pl-7 h-16 rounded-full border-2 text-4xl shadow-[4px_11px_2px_0px_rgba(0,0,0,0.75)] hover:bg-[#D8E7EE]
    before:absolute before:inset-[-12px] before:rounded-full before:border-[4px] before:border-transparent before:transition-all
    hover:before:border-white"
              onClick={() => scrollToSection("about")}
            >
              About
            </button>

            <button
              className="relative bg-white pr-7 pl-7 h-16 rounded-full border-2 text-4xl shadow-[4px_11px_2px_0px_rgba(0,0,0,0.75)] hover:bg-[#D8E7EE]
    before:absolute before:inset-[-12px] before:rounded-full before:border-[4px] before:border-transparent before:transition-all
    hover:before:border-white"
            >
              Projects
            </button>
            <button
              className="mr-10 relative bg-white pr-7 pl-7 h-16 rounded-full border-2 text-4xl shadow-[4px_11px_2px_0px_rgba(0,0,0,0.75)] hover:bg-[#D8E7EE]
    before:absolute before:inset-[-12px] before:rounded-full before:border-[4px] before:border-transparent before:transition-all
    hover:before:border-white"
            >
              Contact
            </button>
          </nav>
        </header>

        {/* Space flow image */}
        <Image
          src="/mainSpaceflow.svg"
          alt="Vector Icon"
          width={100}
          height={900}
          layout="responsive"
        />
      </div>

      {/* Body */}
      <div>
        {/* About */}
        <div>
          <Image
            src="/planet.svg"
            alt="Vector Icon"
            width={120}
            height={120}
            className="absolute right-10 z-10 -bottom-16"
          />
          <div
            id="about"
            className="border-[#55628d] absolute right-9 pt-6 pb-10 pl-9 pr-9  border-[5px] rounded-[80px]"
          >
            <h1 className="text-[#2f3b6f] text-[55px] relative">About</h1>
            <div className="">
              <p className="w-[450px] text-[20px] ">
                Hi my name is Natalie im a web developer that likes to create
                colorful and easy websites. I have studied and learned HTML,
                CSS, JavaScript, and frameworks like React and Next.js but also
                database usage such as SQL.
              </p>
              <p className="w-[450px] text-[20px] mt-5">
                I like is to combine creativity with functionality, making sure
                each project is both visually good looking and efficient. Im
                always eager to learn new skills and to further my knowledge as
                a web developer.
              </p>
              <h3 className="w-[450px] text-[20px] mt-5  ">
                Some of my certifactions:
                <ul>
                  <li>
                    <a
                      className="text-blue-500"
                      href="https://freecodecamp.org/certification/fcc895a2e5e-8522-4b9b-8fd8-11c9229a14ab/responsive-web-design

"
                    >
                      Certification in Respinsiv Web Deisgn
                    </a>
                  </li>
                </ul>
                <p className="mt-5 ml-10"> Hope to be hearing from you :D</p>
              </h3>
            </div>
            <Image
              src="/sparkels.svg"
              alt="Vector Icon"
              width={90}
              height={90}
              className="absolute z-10 -left-7 -bottom-3"
            />
          </div>
        </div>

        {/* Photo */}
        <div className="border-[#55628d] absolute left-28 border-[5px] rounded-[80px] w-[400px] h-[500px] flex justify-center items-center">
          <Image
            src="/stars.svg"
            alt="Vector icon"
            width={200}
            height={200}
            className="absolute -top-20 -left-16"
          />
          <div>
            <Image
              src="/goose.jpg"
              alt="Portfolio photo"
              width={90}
              height={90}
              className="rounded-[50px] w-[350px] h-[450px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
