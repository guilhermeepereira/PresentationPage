import { MdImportContacts } from "react-icons/md";
import { MdEmojiPeople } from "react-icons/md";

const Button = () => {
  return (
    <div className="flex gap-3 mt-3 w-[100%] h-[50px]">
      <a
        href="#"
        className="flex justify-center items-center bg-[#1E90FF] w-[50%] rounded-full hover:bg-transparent hover:border-2 hover:text-[#1E90FF] transition daration-75"
      >
        <button
          href="#"
          className="flex items-center gap-1 text-center bg-transparent font-semibold"
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
          className="flex items-center gap-1 text-center bg-transparent font-semibold"
        >
          Sobre mim
          <MdEmojiPeople className="bg-transparent hover:text-[#1E90FF]" />
        </button>
      </a>
    </div>
  );
};

export default Button;
