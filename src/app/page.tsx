import Image from "next/image";

export default function Home() {
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
        <div className="border-[#55628d] absolute right-10 pt-6 pb-10 pl-12 pr-12  border-[5px] rounded-[100px]">
          <h1 className="text-[#2f3b6f] text-[65px] relative">About</h1>
          <div className="">
            <p className="w-[450px] text-[25px] ">
              Hi my name is Natalie im a passionate web developer with expertise
              in creating colorful and easy websites. Proficient in modern
              technologies like HTML, CSS, JavaScript, and frameworks such as
              React and Next.js, I focus on delivering seamless experiences
              through clean, responsive designs. My goal is to combine
              creativity with functionality, ensuring each project is not only
              visually appealing but also intuitive and efficient. I'm always
              eager to learn new skills and tackle exciting challenges to bring
              innovative ideas to life on the web.
            </p>
            <p className="w-[450px] text-[25px] mt-5  ">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
