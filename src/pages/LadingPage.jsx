import banner from "../assets/imgs/banner_pic.png";
const LadingPage = () => {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <img
        src={banner}
        alt="banner pic"
        className="w-full object-cover bg-center max-h-135"
      />
      <section className="max-w-352.5 w-full flex flex-col gap-18.75 py-24">
        <div className="max-w-123.75 w-full">
          <div className="max-w-[384px] w-full">
            <h1 className="text-[64px] leading-24 font-light text-[#000000DE]">
              五大性格特質
            </h1>
          </div>

          <div className="w-full flex gap-6">
            <h2 className="text-[64px] leading-24 font-light text-[#000000DE]">
              心理測驗
            </h2>
            <p className="max-w-53.75 w-full text-2xl font-light text-[#000000DE] leading-9 text-wrap">
              Big Five personality traits test
            </p>
          </div>
        </div>
        <div className="max-w-202.5 w-full flex gap-7.5 self-end">
          <p className="flex-1 max-w-112.5 text-[16px] leading-6 text-[#00000098] font-light tracking-normal">
            五大性格特質(Big Five personality
            traits)在心理學中常被作為人格的評估，有時也會用來預測學業成就、以及作為適合職業的參考。此理論認為人的主要性格由五項人格特質組成：經驗開放性、盡責性、外向性、親和性、情緒不穩定性。
          </p>
          <button
            type="button"
            className="shrink-0 bg-[#4F61FF] py-6 px-18.25 text-[#FFFFFF] cursor-pointer flex  items-center tracking-normal gap-2"
          >
            <span className="text-[32px] leading-12">開始測驗</span>
            <span className="material-icons text-[48px]! leading-none">
              arrow_forward
            </span>
          </button>
        </div>
      </section>
    </main>
  );
};
export default LadingPage;
