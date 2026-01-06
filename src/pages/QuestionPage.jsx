import { useEffect, useState } from "react";
import { getBigFiveTestData } from "../api/bigFive";
import RadioOption from "../components/RadioOption";

const QuestionPage = () => {
  const [quiz, setQuiz] = useState(null);
  const [answer, setAnswer] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getBigFiveTestData();
        setQuiz(result.problemList);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <main className="w-full h-screen grid grid-cols-2">
      <div className="w-full h-full relative bg-[#4F61FF]/8 flex flex-col gap-112.25 pt-60 px-24 pb-10">
        <button
          type="button"
          className="absolute w-24 h-24 bg-[#4F61FF]/90 top-0 left-0 cursor-pointer hover:bg-[#4F61FF]"
        >
          <span className="material-icons text-[#FFFFFF] text-4xl lg:text-[48px]! leading-none">
            arrow_back
          </span>
        </button>
        <div className="flex flex-col gap-4">
          <span className="text-[120px] leading-30 text-[#000000DE] font-PTSans italic">
            Q
          </span>
          <div className="max-w-2xl">
            <p className="text-5xl text-[#000000DE] leading-18 font-light ml-12">
              我很少感到憂鬱或沮喪。
            </p>
          </div>
        </div>
        <div className="flex flex-col text-[#00000060] ml-1">
          <span className="text-[16px] leading-6 font-bold">
            五大性格特質心理測驗
          </span>
          <span className="text-[12px] leading-4.5 font-light">
            Big Five personality traits test
          </span>
        </div>
      </div>
      <div className="w-full h-full flex flex-col gap-33 relative justify-end">
        <span className="absolute top-12 right-24 text-2xl text-[#00000098] leading-6 font-PTSans italic">
          1/10
        </span>
        <div className="w-full flex flex-col gap-6 pl-18">
          <RadioOption
            name="q1"
            value={1}
            checked={answer === 1}
            onChange={() => setAnswer(1)}
            title="非常不同意。"
            description="我總是一點小事就感到挫折，覺得受傷，沒人愛我 QQ"
          />
          <RadioOption
            name="q1"
            value={2}
            checked={answer === 2}
            onChange={() => setAnswer(2)}
            title="非常不同意。"
            description="我總是一點小事就感到挫折，覺得受傷，沒人愛我 QQ"
          />
          <RadioOption
            name="q1"
            value={3}
            checked={answer === 3}
            onChange={() => setAnswer(3)}
            title="非常不同意。"
            description="我總是一點小事就感到挫折，覺得受傷，沒人愛我 QQ"
          />
          <RadioOption
            name="q1"
            value={4}
            checked={answer === 4}
            onChange={() => setAnswer(4)}
            title="非常不同意。"
            description="我總是一點小事就感到挫折，覺得受傷，沒人愛我 QQ"
          />
          <RadioOption
            name="q1"
            value={5}
            checked={answer === 5}
            onChange={() => setAnswer(5)}
            title="非常不同意。"
            description="我總是一點小事就感到挫折，覺得受傷，沒人愛我 QQ"
          />
        </div>
        <button type="button" className="w-full flex bg-[#4F61FF]/90 py-6 text-white justify-end items-center px-6 gap-2 cursor-pointer hover:bg-[#4F61FF]">
          <span className="text-[32px] leading-12 font-bold">下一題</span>
          <span className="material-icons text-4xl lg:text-[48px]! leading-none">
            arrow_forward
          </span>
        </button>
      </div>
    </main>
  );
};
export default QuestionPage;
