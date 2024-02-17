import React from "react";
import Logo from "../assets/Sem_título-2.png";
import { MdPermPhoneMsg } from "react-icons/md";

const Header = () => {
  return (
    <header className="flex px-[13%] justify-between border-b items-center h-[15%] w-full">
      <div className="w-full">
        <img src={Logo} className="w-44" />
      </div>
      <div className="hidden md:flex">
        <ul className="flex ml-10 gap-10 items-center lg:text-2xl xl:text-base">
          <li>
            <a href="#" className="hover:text-[#1E90FF] transition duration-75">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#1E90FF] transition duration-75">
              Serviços
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#1E90FF] transition duration-75">
              Portfólio
            </a>
          </li>
          <a
            href="#"
            className="flex justify-center items-center bg-[#1E90FF] text-white w-[150px] h-[40px] rounded-lg 
            hover:bg-transparent hover:border-2 hover:text-[#1E90FF] hover:border-white transition daration-75 
            lg:w-[165px] lg:h-[55px] xl:h-[40px] xl:w-[140px]"
          >
            <button
              href="#"
              className="flex items-center gap-1 text-center bg-transparent font-semibold"
            >
              Contato
              <MdPermPhoneMsg className="bg-transparent" />
            </button>
          </a>
        </ul>
      </div>
      <button className="space-y-1 group md:hidden">
        <div className="w-6 h-1 bg-white"></div>
        <div className="w-6 h-1 bg-white"></div>
        <div className="w-6 h-1 bg-white"></div>

        <ul
          className="w-full pb-10 absolute -top-full group-focus:top-0 right-0 duration-150 flex flex-col 
        space-y-3 justify-end bg-[#181818]"
        >
          <button className="flex justify-center px-5 py-5 relative ml-auto mr-3 mt-3">
            <div className="w-6 h-1 rotate-45 absolute bg-white"></div>
            <div className="w-6 h-1 -rotate-45 absolute bg-white"></div>
          </button>
          <li className="flex justify-center w-full py-4 bg-[#181818] hover:bg-[#202020]">
            <a
              href="#"
              className="bg-[#181818] bg-transparent hover:text-[#1E90FF] transition duration-75"
            >
              Home
            </a>
          </li>
          <li className="flex justify-center w-full py-4 bg-[#181818] hover:bg-[#202020]">
            <a
              href="#"
              className="bg-[#181818] bg-transparent hover:text-[#1E90FF] transition duration-75"
            >
              Serviços
            </a>
          </li>
          <li className="flex justify-center w-full py-4 bg-[#181818] hover:bg-[#202020]">
            <a
              href="#"
              className="bg-[#181818] bg-transparent hover:text-[#1E90FF] transition duration-75"
            >
              Portfólio
            </a>
          </li>
          <a
            href="#"
            className="bg-[#181818] bg-transparent hover:bg-red-200 transition duration-75"
          >
            <li className="flex justify-center w-full py-4 bg-[#181818] hover:bg-[#202020]">
              Contato
            </li>
          </a>
        </ul>
      </button>
    </header>
  );
};

export default Header;
