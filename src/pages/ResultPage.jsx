import { useEffect, useMemo, useState } from "react";
import { getBigFiveTestData } from "../api/bigFive";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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
      navigate('/');
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
        className={`${bgMap[category]} w-full flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat pt-12 pb-12 gap-12 lg:pt-6 lg:gap-80 lg:pb-12`}
      >
        <div className="max-w-352.5 w-full px-6 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0 2xl:px-0">
          <div className="flex flex-col max-w-40 text-white">
            <p className="text-[16px] font-bold leading-6">
              五大性格特質心理測驗
            </p>
            <span className="text-[12px] leading-4.5 font-light">
              Big Five personality traits test
            </span>
          </div>
          <nav className="w-full flex items-center text-[16px] leading-6 overflow-x-auto flex-nowrap gap-6 justify-start self-center lg:gap-12 lg:justify-end px-6 py-3 lg:px-0 lg:py-0 max-w-full lg:max-w-lg">
            {fullData.traits.zh.map((tag) => (
              <button
                type="button"
                key={tag}
                className={`
                  cursor-pointer transition-all 
                  whitespace-nowrap
                  shrink-0
                  py-2
                  ${
                    category === tag
                      ? "text-white font-bold underline underline-offset-8 decoration-[4px] decoration-[#4F61FF]"
                      : "text-white/80 font-light hover:text-white"
                  }
                `}
                onClick={() => setCategory(tag)}
              >
                {tag}
              </button>
            ))}
          </nav>
        </div>
        <div className="max-w-352.5 w-full px-6 2xl:px-0">
          <div className="max-w-202.5 w-full flex gap-10 text-white items-center flex-col lg:gap-18 lg:flex-row">
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
      <div className="max-w-352.5 w-full flex flex-col  py-12 gap-20 px-6 2xl:gap-40 2xl:px-0">
        <div className="max-w-202.5 w-full flex flex-col gap-4 font-light">
          <p className="text-[64px] leading-24 text-[#000000DE]">
            {mockDegree === "high"
              ? "高"
              : mockDegree === "middle"
              ? "中"
              : "低"}
          </p>
          <div className="text-lg lg:text-2xl text-[#00000098] leading-8 lg:leading-9">
            {mockDegree === "middle" ? (
              <>
                <p className="text-lg lg:text-2xl leading-8 lg:leading-9 font-light mb-8 lg:mb-12">
                  你的親和性介於中間。可參考高分與低分時的說明。
                </p>
                <div className="space-y-6">
                  <div className="flex items-start text-[15px] lg:text-[16px] font-light leading-6">
                    <span className="shrink-0 font-bold text-black mr-2">
                      高 ——
                    </span>
                    <span>{currentData.data.description["high"]}</span>
                  </div>
                  <div className="flex items-start text-[15px] lg:text-[16px] font-light leading-6">
                    <span className="shrink-0 font-bold text-black mr-2">
                      低 ——
                    </span>
                    <span>{currentData.data.description["low"]}</span>
                  </div>
                </div>
              </>
            ) : (
              currentData.data.description[mockDegree]
            )}
          </div>
        </div>
        <button
          type="button"
          onClick={handleNextAction}
          className={`
            w-full h-auto min-h-12 text-xl lg:text-[32px] text-[#000000DE] 
            flex items-center gap-2 cursor-pointer transition-opacity hover:opacity-70         
            justify-end lg:justify-center self-start lg:self-end
            ${
              currentData.isLast
                ? "border-2 border-[#000000DE] justify-center lg:justify-center p-4 lg:h-24 lg:max-w-95"
                : "border-none lg:max-w-95"
            }
          `}
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
