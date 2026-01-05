import banner from "../assets/imgs/banner_pic.png";
import { getBigFiveTestData } from "../api/bigFive";
import { useEffect, useState } from "react";
const LadingPage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getBigFiveTestData();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <img
        src={banner}
        alt="banner pic"
        className="w-full object-cover bg-center max-h-135"
      />
      {data ? (
        <section className="max-w-352.5 w-full flex flex-col gap-18.75 py-24">
          <div className="max-w-123.75 w-full flex flex-col">
            <h1 className="max-w-[384px] text-[64px] leading-24 font-light text-[#000000DE]">
              {data.name["zh"].split('(')[0]}
            </h1>
            <p className="max-w-53.75 w-full text-2xl font-light text-[#000000DE] leading-9 self-end -mt-20.75">
              {data.name["en"].split('(')[0]}
            </p>
          </div>
          <div className="max-w-202.5 w-full flex gap-7.5 self-end">
            <p className="flex-1 w-full max-w-112.5 text-[16px] leading-6 text-[#00000098] font-light text-left tracking-normal">
              {data.description}
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
      ) : (
        <section className="max-w-352.5 w-full mx-auto">
          <p className="text-4xl text-[#00000098]">Loading...</p>
        </section>
      )}
    </main>
  );
};
export default LadingPage;
