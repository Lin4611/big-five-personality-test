import banner from "../assets/imgs/banner_pic.png";
import { useBigFiveData } from "../hooks/useBigFiveData";
import { Link } from "react-router-dom";
const LadingPage = () => {
  const { data, loading, error } = useBigFiveData();
  if (loading) {
    return (
      <main className="w-full flex justify-center items-center">
        <p className="text-4xl text-[#00000098]">Loading...</p>
      </main>
    );
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <main className="w-full flex flex-col justify-center items-center">
      <img
        src={banner}
        alt="banner pic"
        className="w-full object-cover bg-center max-h-135"
      />
      {data ? (
        <section className="max-w-352.5 w-full flex flex-col  py-24 px-12 items-center gap-5 lg:gap-18.75 lg:items-start 2xl:px-0">
          <div className="max-w-123.75 w-full flex flex-col">
            <h1 className="max-w-[384px] text-4xl leading-16 font-light text-[#000000DE] lg:text-[64px] lg:leading-24">
              {data.name["zh"].split("(")[0]}
            </h1>
            <p className="max-w-53.75 w-full text-xl font-light text-[#000000DE] leading-9 m-0 lg:-mt-20.75 lg:self-end lg:text-2xl">
              {data.name["en"].split("(")[0]}
            </p>
          </div>
          <div className="max-w-202.5 w-full flex gap-7.5  flex-col items-center lg:self-end lg:flex-row">
            <p className="flex-1 w-full max-w-112.5 text-[16px] leading-6 text-[#00000098] font-light text-left tracking-normal">
              {data.description}
            </p>
            <Link
              className="max-w-82.5 shrink-0 bg-[#4F61FF] py-6 px-18.25 text-[#FFFFFF] cursor-pointer flex  items-center tracking-normal gap-2"
              to="/quiz"
            >
              <span className="text-[20px] lg:text-[32px] leading-12">
                開始測驗
              </span>
              <span className="material-icons text-4xl lg:text-[48px]! leading-none">
                arrow_forward
              </span>
            </Link>
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
