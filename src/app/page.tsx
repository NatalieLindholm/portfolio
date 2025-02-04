"use client";

import Image from "next/image";
import Link from "next/link";
import { VscGithub } from "react-icons/vsc";

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)!.scrollIntoView({
      behavior: "smooth",
    });
  };

  const projects = [
    {
      title: "Card Game",
      description:
        "A simple card game where you are against a bot and who ever draws the highest cards wins. The scores are being saved to a database when clicking on the end game button",
      image: "/cardGameimg.png",
      link: "https://github.com/NatalieLindholm/cardgame",
    },
    {
      title: "Pokemon Search",
      description:
        "A pokémon search that uses a Pokémon API (https://pokeapi.co)",
      image: "/pokeSearchimg.png",
      link: "https://github.com/NatalieLindholm/Pokemon-Search",
    },
    {
      title: "3D Interactive",
      description: "A simple 3D interactiv object",
      image: "/3dInteractiveimg.png",
      link: "https://github.com/NatalieLindholm/3d_interactive",
    },
  ];
  return (
    <div className="w-full min-h-screen ">
      {/* banner */}
      <header className="w-full">
        <nav className="flex justify-end absolute w-full gap-8 mt-10">
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
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>
          <button
            className="mr-10 relative bg-white pr-7 pl-7 h-16 rounded-full border-2 text-4xl shadow-[4px_11px_2px_0px_rgba(0,0,0,0.75)] hover:bg-[#D8E7EE]
    before:absolute before:inset-[-12px] before:rounded-full before:border-[4px] before:border-transparent before:transition-all
    hover:before:border-white"
            onClick={() => scrollToSection("contact")}
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

      {/* Body */}
      <div className="min-h-screen w-full flex flex-col items-center">
        {/* first block */}
        <div className="flex justify-around w-full mt-[3%]">
          {/* About */}
          <div className=" w-2/5">
            <div className="relative w-full">
              <Image
                src="/planet.svg"
                alt="Vector Icon"
                width={120}
                height={120}
                className="absolute -left-4 -translate-y-16"
              />

              <div
                id="about"
                className="border-[#55628d] border-[5px] rounded-[70px]"
              >
                <div className=" text-[2vw] pt-6 pb-6 pl-10 pr-10">
                  <h1 className="text-[#2f3b6f] text-[5vw]">About</h1>
                  <p>
                    Hi my name is Natalie im a web developer that likes to
                    create colorful and easy websites. I have studied and
                    learned HTML, CSS, JavaScript, and frameworks like React and
                    Next.js but also database usage such as SQL.
                  </p>
                  <p className=" mt-5">
                    I like to combine creativity with functionality, making sure
                    each project is both visually good looking and efficient. Im
                    always eager to learn new skills and to further my knowledge
                    as a web developer.
                  </p>
                  <h3 className=" mt-5">
                    Some of my certifications:
                    <p>
                      <a
                        className="text-blue-500"
                        href="https://freecodecamp.org/certification/fcc895a2e5e-8522-4b9b-8fd8-11c9229a14ab/responsive-web-design"
                      >
                        Certification in Responsive Web Design
                      </a>
                    </p>
                  </h3>
                </div>
              </div>
              <Image
                src="/sparkels.svg"
                alt="Vector Icon"
                width={90}
                height={90}
                className="absolute -right-7 -bottom-1"
              />
            </div>
          </div>

          {/* Photo + Language Container */}
          <div className="w-2/5 flex flex-col items-center -mt-28">
            {/* Photo */}
            <div className="border-[#55628d] border-[5px] rounded-[70px] flex justify-center items-center relative">
              <Image
                src="/stars.svg"
                alt="Vector icon"
                width={230}
                height={230}
                className="absolute -top-24 -left-16"
              />
              <Image
                src="/goose.jpg"
                alt="Portfolio photo"
                width={90}
                height={90}
                className="rounded-[70px] w-[100%] h-[600px] pt-4 pb-4 pl-5 pr-5"
              />
            </div>

            {/* Language */}
            <div className="mt-[13%]">
              <h1 className="text-[#2f3b6f] text-[4vw]">Language</h1>
              <div className="flex justify-around">
                <h1 className="text-[3vw]">Swedish</h1>
                <div className="w-1/2 flex justify-start items-center">
                  <Image
                    src="/fiveStar.svg"
                    alt="Vector Icon"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
              <div className="flex justify-around">
                <h1 className="text-[3vw]">English</h1>
                <div className="w-1/2 flex justify-start items-center">
                  <Image
                    src="/fourStar.svg"
                    alt="Vector Icon"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div className="flex justify-around">
                <h1 className="text-[3vw]">Finnish</h1>
                <div className="w-1/2 flex justify-start items-center">
                  <Image
                    src="/oneStar.svg"
                    alt="Vector Icon"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of first block */}

        {/* Contact */}
        <div
          id="contact"
          className="relative border-[#55628d] border-[5px] rounded-[70px] w-[90%] mt-[5%]"
        >
          <Image
            src="/meteor.svg"
            alt="Vector Icon"
            width={100}
            height={100}
            className="absolute -right-3 -translate-y-10"
          />
          <div className="flex flex-col items-center justify-center pb-7">
            <h1 className="text-[5vw] text-[#2f3b6f] pt-3">Contact Me</h1>
            <p className=" text-[3vw]">nataliemlindholm@gmail.com</p>
            <p className="text-[3vw]">+358 40 9365379</p>
            <a href="https://github.com/NatalieLindholm">
              <VscGithub className="text-[5rem] mt-2" />
            </a>
          </div>
          <Image
            src="/mau.svg"
            alt="Vector Icon"
            width={170}
            height={170}
            className="absolute bottom-0 left-0 -translate-x-10 translate-y-10"
          />
        </div>

        <Image
          src="/secondSpaceflow.svg"
          alt="Vector Icon"
          width={100}
          height={100}
          layout="responsive"
          className="-mt-[15%]"
        />

        {/* Projects */}
        <div
          id="projects"
          className="relative -mt-56 flex justify-center flex-col items-center"
        >
          {/* Title & Border Box */}
          <div className="border-[#55628d] border-[5px] rounded-[70px] mb-16 relative">
            <Image
              src="/sparkels.svg"
              alt="Vector Icon"
              width={90}
              height={90}
              className="absolute -translate-x-7 -translate-y-7"
            />
            <h1 className="text-[#2f3b6f] text-[4vw] pr-9 pl-9 p-2">
              Projects
            </h1>
          </div>

          {/* Flex container for projects & vertical line */}
          <div className="relative flex w-full max-w-[1200px]">
            {/* SVG Line - Positioned in the center */}
            <div className="absolute left-1/2 -translate-x-1/2 w-[5px] bg-[#55628d] h-full z-[-1]"></div>

            {/* Projects */}
            <div className="flex flex-col items-center w-full pr-6 pl-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`flex w-full max-w-[1200px] ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div className="w-[45%] flex flex-col relative">
                    {/* Image */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={0}
                      height={0}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
                      className="w-full h-auto rounded-[30px] object-cover"
                    />

                    {/* Title & Description */}
                    <div>
                      <Link href={project.link}>
                        <h1 className="text-[3vw] mt-3 text-[#2f3b6f] hover:underline cursor-pointer">
                          {project.title}
                        </h1>
                      </Link>
                      <p className="text-[2vw]">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ======= */}
      </div>
    </div>
  );
}
