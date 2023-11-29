import React from "react";

const Texts = () => {
  return (
    <div className="flex-col">
      <div>
        <p className="flex text-4xl items-end font-medium">
          Hi <div className="cursor-default text-5xl relative hand">👋🏾</div>,
          I'm
        </p>
      </div>
      <h1 className="text-8xl font-bold">
        Guilherme <br /> Pereira
      </h1>
      <span className="flex gap-2 text-4xl font-thin">
        <div className="font-normal">Full-Stack</div> Developer👨🏾‍💻
      </span>
    </div>
  );
};

export default Texts;
