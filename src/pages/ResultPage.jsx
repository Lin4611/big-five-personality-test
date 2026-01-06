const bg_neuroticism = "bg-[url('../assets/imgs/neuroticism_pic.png')]";
const bg_extroversion = "bg-[url('../assets/imgs/extroversion_pic.png')]";
const bg_openness = "bg-[url('../assets/imgs/openness_pic.png')]";
const bg_agreeableness = "bg-[url('../assets/imgs/agreeableness_pic.png')]";
const bg_conscientiousness =
  "bg-[url('../assets/imgs/conscientiousness_pic.png')]";
const ResultPage = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <div
        className={`${bg_neuroticism} w-full flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat pt-6 gap-80 pb-12`}
      >
        <div className="max-w-352.5 w-full flex justify-between items-center">
          <div className="flex flex-col max-w-40 text-white">
            <p className="text-[16px] font-bold leading-6">
              五大性格特質心理測驗
            </p>
            <span className="text-[12px] leading-4.5 font-light">
              Big Five personality traits test
            </span>
          </div>
          <nav className="max-w-lg w-full flex gap-12 items-center text-[16px] leading-6">
            <button
              type="button"
              className="text-white font-bold cursor-pointer underline underline-offset-8 decoration-[4px] decoration-[#4F61FF]"
            >
              情緒不穩定性
            </button>
            <button
              type="button"
              className="text-white/80 font-light cursor-pointer"
            >
              外向性
            </button>
            <button
              type="button"
              className="text-white/80 font-light cursor-pointer"
            >
              經驗開放性
            </button>
            <button
              type="button"
              className="text-white/80 font-light cursor-pointer"
            >
              親和性
            </button>
            <button
              type="button"
              className="text-white/80 font-light cursor-pointer"
            >
              盡責性
            </button>
          </nav>
        </div>
        <div className="max-w-352.5 w-full">
          <div className="max-w-202.5 w-full flex gap-18 text-white items-end">
            <div className="flex flex-col">
              <p className="text-5xl leading-18">情緒不穩定性</p>
              <span className="text-2xl leading-12 font-light">
                Neuroticism
              </span>
            </div>
            <span className="text-[16px] font-light leading-6 max-w-112.5 tracking-normal">
              情緒不穩定性是指在調整情緒時，冒出極端消極情緒的情況與不穩定性。不穩定性高的人在面臨高壓環境時，容易有憤怒、焦慮等消極情緒湧上；不穩定性低的人則較能心平氣和面對、不太會情緒化反應。
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-352.5 w-full flex flex-col gap-40 py-12">
        <div className="max-w-202.5 w-full flex flex-col gap-4 font-light">
          <p className="text-[64px] leading-24 text-[#000000DE]">高</p>
          <span className="text-2xl text-[#00000098] leading-9">
            情緒不穩定性較高的你，是不是在面對不預期、碰到對自己不友善的情境時，會覺得自己有喉嚨有股氣憋著、呼吸急促、情緒高漲等狀況，久久不能平復呢？先深呼吸、喝杯水，給自己一些喘息的空間再去對付這些狀況吧。
          </span>
        </div>
        <button
          type="button"
          className="max-w-70 w-full h-12 text-[32px] text-[#000000DE] flex items-center gap-2 cursor-pointer self-end"
        >
          <span className="font-light">
            下一個：<span className="font-bold">外向性</span>
          </span>

          <span className="material-icons text-4xl lg:text-[48px]! leading-none text-[#4F61FF]">
            arrow_forward
          </span>
        </button>
      </div>
    </main>
  );
};
export default ResultPage;
