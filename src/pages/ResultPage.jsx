import { useEffect, useMemo, useState } from "react";
import { getBigFiveTestData } from "../api/bigFive";

const bgMap = {
  情緒不穩定性: "bg-[url('../assets/imgs/neuroticism_pic.png')]",
  外向性: "bg-[url('../assets/imgs/extroversion_pic.png')]",
  經驗開放性: "bg-[url('../assets/imgs/openness_pic.png')]",
  親和性: "bg-[url('../assets/imgs/agreeableness_pic.png')]",
  盡責性: "bg-[url('../assets/imgs/conscientiousness_pic.png')]",
};

const ResultPage = () => {
  const [fullData, setFullData] = useState(null);
  const [category, setCategory] = useState("情緒不穩定性");
  const mockDegree = "middle";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getBigFiveTestData();
        setFullData(result);
        if (result && result.traits && result.traits.zh.length > 0) {
          setCategory(result.traits.zh[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const currentData = useMemo(() => {
    if (!fullData) return null;

    const list = fullData.traits.zh;
    const index = list.indexOf(category);
    const isLast = index === list.length - 1;

    const enKey = fullData.traits.en[index];
    const traitData = fullData.problemList[enKey];
    const nextIndex = (index + 1) % list.length;
    const nextCategoryName = list[nextIndex];

    return {
      enKey,
      data: traitData,
      nextCategory: nextCategoryName,
      isLast,
    };
  }, [fullData, category]);

  const handleNextAction = () => {
    if (currentData.isLast) {
      console.log("/");
    } else {
      setCategory(currentData.nextCategory);
    }
  };
  if (!fullData || !currentData) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        Loading Results...
      </div>
    );
  }

  return (
    <main className="w-full flex flex-col items-center justify-center">
      <div
        className={`${bgMap[category]} w-full flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat pt-6 gap-80 pb-12`}
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
            {fullData.traits.zh.map((tag) => (
              <button
                type="button"
                key={tag}
                className={`cursor-pointer transition-all ${
                  category === tag
                    ? "text-white font-bold underline underline-offset-8 decoration-[4px] decoration-[#4F61FF]"
                    : "text-white/80 font-light hover:text-white"
                }`}
                onClick={() => setCategory(tag)}
              >
                {tag}
              </button>
            ))}
          </nav>
        </div>
        <div className="max-w-352.5 w-full">
          <div className="max-w-202.5 w-full flex gap-18 text-white items-center">
            <div className="flex flex-col">
              <p className="text-5xl leading-18">{currentData.data.name}</p>
              <span className="text-2xl leading-12 font-light">
                {currentData.enKey}
              </span>
            </div>
            <span className="text-[16px] font-light leading-6 max-w-112.5 tracking-normal">
              {currentData.data.description.desc}
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-352.5 w-full flex flex-col gap-40 py-12">
        <div className="max-w-202.5 w-full flex flex-col gap-4 font-light">
          <p className="text-[64px] leading-24 text-[#000000DE]">
            {mockDegree === "high"
              ? "高"
              : mockDegree === "middle"
              ? "中"
              : "低"}
          </p>
          <span className="text-2xl text-[#00000098] leading-9">
            {mockDegree === "middle" ? (
              <>
                <p className="text-2xl leading-9 font-light mb-12">你的親和性介於中間。可參考高分與低分時的說明。</p>
                <p className="text-[16px] font-light leading-6 mb-6">
                  <span className="font-bold">高</span>——
                  {currentData.data.description["high"]}
                </p>
                <p className="text-[16px] font-light leading-6">
                  <span className="font-bold">低</span>——
                  {currentData.data.description["low"]}
                </p>
              </>
            ) : (
              currentData.data.description[mockDegree]
            )}
          </span>
        </div>
        <button
          type="button"
          onClick={handleNextAction}
          className={`max-w-95 w-full h-12 text-[32px] text-[#000000DE] flex items-center gap-2 cursor-pointer self-end hover:opacity-70 transition-opacity  ${
            currentData.isLast
              ? "border-2 border-[#000000DE] justify-center h-24"
              : " border-none justify-end"
          }`}
        >
          {currentData.isLast ? (
            <>
              <span className="font-bold">重新測驗</span>
              <span className="material-icons text-4xl lg:text-[48px]! leading-none text-[#000000DE]">
                arrow_forward
              </span>
            </>
          ) : (
            <>
              <span className="font-light">
                下一個：
                <span className="font-bold">{currentData.nextCategory}</span>
              </span>
              <span className="material-icons text-4xl lg:text-[48px]! leading-none text-[#4F61FF]">
                arrow_forward
              </span>
            </>
          )}
        </button>
      </div>
    </main>
  );
};
export default ResultPage;
