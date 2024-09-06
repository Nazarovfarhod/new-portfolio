import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { DiJsBadge } from "react-icons/di";
import { FaReact } from "react-icons/fa6";
import { TbBrandRedux } from "react-icons/tb";
import { RiNextjsLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { RiNodejsLine } from "react-icons/ri";
import { SiWebpack } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { FaBootstrap } from "react-icons/fa6";

function Skills() {
  return (
    <div className="mb-20 flex flex-col items-center">
      <h2 className="text-3xl tracking-[3px] font-bold mb-20 sm:text-5xl sm:mb-10 md:text-5xl md:mb-10 lg:text-5xl lg:mb-10">
        What do I know?
      </h2>
      <ul id="skil" className="flex gap-10 flex-wrap justify-center max-w-[1100px]">
        <li className="flex items-center gap-3 w-44 text-lg px-10 shadow-white py-5 rounded-3xl bg-[#222] ">
          <IoLogoHtml5 className="w-9 h-9 text-[#ff5733]" /> HTML5
        </li>
        <li className="flex items-center gap-3 font-semibold w-44 text-xl px-10 shadow-white py-5 rounded-3xl bg-[#222] ">
          <IoLogoCss3 className="w-9 h-9 text-blue-500" /> CSS
        </li>
        <li className="flex items-center gap-3 font-semibold w-44 text-xl px-10 shadow-white py-5 rounded-3xl bg-[#222] ">
          <DiJsBadge className="w-9 h-9 text-yellow-300" /> JS
        </li>
        <li className="flex items-center gap-3 font-semibold w-44 text-lg px-7 shadow-white py-5 rounded-3xl bg-[#222] ">
          <FaReact className="w-9 h-9" /> React.js
        </li>

        <li className="flex items-center gap-3 font-semibold w-44 text-xl px-8 shadow-white py-5 rounded-3xl bg-[#222] ">
          <TbBrandRedux className="w-9 h-9" /> Redux
        </li>
        <li className="flex items-center gap-3 font-semibold w-44 text-lg px-7 shadow-white py-5 rounded-3xl bg-[#222] ">
          <RiNextjsLine className="w-9 h-9" />
          Next.js
        </li>
        <li className="flex items-center gap-3 font-semibold w-44 text-xl px-10 shadow-white py-5 rounded-3xl bg-[#222] ">
          <SiTypescript className="w-9 h-9 text-[#2F74C0]" /> TS
        </li>
        <li className="flex items-center gap-3 font-semibold w-44 text-xl px-10 shadow-white py-5 rounded-3xl bg-[#222] ">
          <FaGithub className="w-9 h-9" /> Git
        </li>
        <li className="flex items-center gap-3 font-semibold w-44 text-lg px-7 shadow-white py-5 rounded-3xl bg-[#222] ">
          <RiNodejsLine className="w-9 h-9 text-green-500" /> Node.js
        </li>
        <li className="flex items-center gap-3 font-semibold w-44 text-md px-5 shadow-white py-5 rounded-3xl bg-[#222] ">
          <SiWebpack className="w-9 h-9 text-blue-300" /> Webpack
        </li>
        <li className="flex items-center gap-3 font-semibold w-44 text-lg px-7 shadow-white py-5 rounded-3xl bg-[#222] ">
          <VscJson className="w-9 h-9" /> JsonApi
        </li>
        <li className="flex items-center gap-3 font-semibold w-44 text-md px-5 shadow-white py-5 rounded-3xl bg-[#222] ">
          <FaBootstrap className="w-9 h-9 text-blue-500" /> Bootstrap
        </li>
        <li className="text-center font-semibold w-44 text-xl px-10 shadow-white py-5 rounded-3xl bg-[#222] ">
          Context
        </li>
        <li className="flex items-center gap-3 font-semibold w-44 text-xl px-10 shadow-white py-5 rounded-3xl bg-[#222] ">
          English
        </li>
        <li className="flex items-center gap-3 font-semibold w-44 text-xl px-10 shadow-white py-5 rounded-3xl bg-[#222] ">
          Russian
        </li>
      </ul>
    </div>
  );
}

export default Skills;
