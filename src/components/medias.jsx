import React from "react";
import Github from "../assets/github.png";
import Linkedin from "../assets/linkedin.png";
import Email from "../assets/email.png";

const Medias = () => {
  return (
    <div className="flex gap-6">
      <a
        className="hover:scale-110 transition"
        href="https://github.com/guilhermeepereira"
      >
        <img className="h-20" src={Github} />
      </a>
      <a
        className="hover:scale-110 transition"
        href="https://www.linkedin.com/in/guilhermeepereira/"
      >
        <img className="h-20" src={Linkedin} />
      </a>
      <a
        className="hover:scale-110 transition"
        href="mailto:wvgui.santos@gmail.com"
      >
        <img className="h-20" src={Email} />
      </a>
    </div>
  );
};

export default Medias;
