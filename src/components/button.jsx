import { MdImportContacts } from "react-icons/md";
import { MdEmojiPeople } from "react-icons/md";

const Button = () => {
  return (
    <div className="flex gap-3 mt-5 w-[95%] h-[50px] md:h-[70px] lg:h-[90px] xl:h-[45px]">
      <a
        href="#"
        className="flex justify-center items-center bg-[#1E90FF] w-[50%] rounded-full hover:bg-transparent hover:border-2 hover:text-[#1E90FF] transition daration-75"
      >
        <button
          href="#"
          className="flex items-center gap-1 text-center bg-transparent font-semibold text-lg md:text-2xl lg:text-3xl xl:text-lg"
        >
          Portfólio
          <MdImportContacts className="bg-transparent hover:text-[#1E90FF]" />
        </button>
      </a>
      <a
        href="#"
        className="flex justify-center items-center bg-[#1E90FF] w-[50%] rounded-full hover:bg-transparent hover:border-2 hover:text-[#1E90FF] transition daration-75"
      >
        <button
          href="#"
          className="flex items-center gap-1 text-center bg-transparent font-semibold text-lg md:text-2xl lg:text-3xl xl:text-lg"
        >
          Sobre mim
          <MdEmojiPeople className="bg-transparent hover:text-[#1E90FF]" />
        </button>
      </a>
    </div>
  );
};

export default Button;
