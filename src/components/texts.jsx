import React from "react";
import Button from "../components/button";

const Texts = () => {
  return (
    <div className="flex-col">
      <div className="flex-col">
        <div>
          <p className="flex text-xl items-end font-thin">
            Olá{" "}
            <div className="mx-1 cursor-default text-3xl relative hand">👋</div>
            , eu sou
          </p>
        </div>
        <h1 className="text-7xl font-bold">
          Guilherme <br /> Pereira
        </h1>
        <span className="flex gap-2 text-xl font-bold text-[#1E90FF]">
          <div className="font-medium">DESENVOLVEDOR</div> FULL-STACK🧑‍💻
        </span>
      </div>
      <Button />
    </div>
  );
};

export default Texts;
