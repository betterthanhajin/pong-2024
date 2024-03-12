"use client";
import Image from "next/image";
import Arrow from "../../public/Arrow.svg";

const GameDesc = () => {
  return (
    <div className="absolute bottom-0 w-full h-40 flex justify-between items-center p-3">
      <div>
        <div className="text-white text-2xl flex items-center gap-3 mb-4">
          <div className="border-solid border-l-2 border-r-2 border-t-2 border-b-2 rounded-md p-2 border-white">
            <Image src={Arrow} width={20} height={20} alt="" />
          </div>
          <span>W</span>
        </div>
        <div className="text-white text-2xl flex items-center gap-3">
          <div className="border-solid border-l-2 border-r-2 border-t-2 border-b-2 rounded-md p-2 border-white">
            <Image
              className="rotate-180"
              src={Arrow}
              width={20}
              height={20}
              alt=""
            />
          </div>
          <span>S</span>
        </div>
      </div>
      <div>
        <div className="text-white text-2xl flex items-center gap-3 mb-4">
          <div className="border-solid border-l-2 border-r-2 border-t-2 border-b-2 rounded-md p-2 border-white">
            <Image src={Arrow} width={20} height={20} alt="" />
          </div>
          <span>O</span>
        </div>
        <div className="text-white text-2xl flex items-center gap-3">
          <div className="border-solid border-l-2 border-r-2 border-t-2 border-b-2 rounded-md p-2 border-white">
            <Image
              className="rotate-180"
              src={Arrow}
              width={20}
              height={20}
              alt=""
            />
          </div>
          <span>L</span>
        </div>
      </div>
    </div>
  );
};
export default GameDesc;
