import React from "react";
import Button from "../components/button";

const Texts = () => {
  return (
    <div className="w-max justify-center items-center justify-items-center">
      <div className="flex flex-col w-full gap-2">
        <div>
          <p className="text-lg items-end font-thin md:text-3xl lg:text-4xl xl:text-xl">
            Olá{" "}
            <div className="mr-1 cursor-default text-2xl relative hand md:text-4xl lg:text-5xl xl:text-3xl">
              👋
            </div>
            , eu sou
          </p>
        </div>
        <h1 className="text-5xl font-bold md:text-8xl lg:text-9xl xl:text-7xl">
          Guilherme <br /> Pereira
        </h1>
        <span className="flex gap-2 text-lg font-bold text-[#1E90FF] md:text-3xl lg:text-4xl xl:text-xl">
          <div className="font-medium">DESENVOLVEDOR</div> FULL-STACK🧑‍💻
        </span>
      </div>
      <Button />
    </div>
  );
};

export default Texts;
