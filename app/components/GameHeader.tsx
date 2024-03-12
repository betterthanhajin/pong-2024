"use client";

const GameHeader = () => {
  return (
    <div className="bg-orange-500 h-20 absolute top-0 left-0 w-full">
      <div className="flex w-full h-full justify-center items-center gap-8">
        <div className="w-16 h-16 flex justify-center items-center border-solid border-l-2 border-r-2 border-t-2 border-b-2 rounded-md">
          <div className="font-semibold text-white text-5xl">0</div>
        </div>
        <div className="w-16 h-16 flex justify-center items-center border-solid border-l-2 border-r-2 border-t-2 border-b-2 rounded-md">
          <div className="font-semibold text-white text-5xl">0</div>
        </div>
      </div>
    </div>
  );
};
export default GameHeader;
