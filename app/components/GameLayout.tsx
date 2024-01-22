const GameLayout = () => {
  return (
    <div className="game-layout flex justify-between items-center w-full h-full">
      <div className="game-layout__left">
        <div className="w-3 h-14 bg-slate-500"></div>
      </div>
      <div className="game-layout__center w-0 h-full border-l-4 border-dotted border-l-slate-700"></div>
      <div className="game-layout__right">
        <div className="w-3 h-14 bg-slate-500"></div>
      </div>
    </div>
  );
};
export default GameLayout;
