import React from "react";
import Logo from "../assets/GP.png";
import { MdPermPhoneMsg } from "react-icons/md";

const Header = () => {
  return (
    <header className="flex px-[13%] justify-between border-b items-center h-[15%]">
      <div>
        <img src={Logo} className="h-7" />
      </div>
      <div>
        <ul className="flex ml-10 gap-10">
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
          <li>
            <a href="#" className="hover:text-[#1E90FF] transition duration-75">
              Contato
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a
          href="#"
          className="flex justify-center items-center bg-[#1E90FF] text-white w-[150px] h-[40px] rounded-lg hover:bg-transparent hover:border-2 hover:text-[#1E90FF] hover:border-white transition daration-75"
        >
          <button
            href="#"
            className="flex items-center gap-1 text-center bg-transparent font-semibold"
          >
            Contato
            <MdPermPhoneMsg className="bg-transparent" />
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
