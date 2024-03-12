"use client";
import Image from "next/image";
import Arrow from "../../public/Arrow.svg";

const GameDesc = () => {
  return (
    <div className="absolute bottom-0 w-full bg-orange-300 h-40 flex justify-between p-3">
      <div>
        <div className="text-white text-2xl">
          <Image src={Arrow} width={100} height={100} alt="" />
          <span>W</span>
        </div>
        <div className="text-white text-2xl">S</div>
      </div>
      <div>
        <div className="text-white text-2xl">O</div>
        <div className="text-white text-2xl">L</div>
      </div>
    </div>
  );
};
export default GameDesc;
