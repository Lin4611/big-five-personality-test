import { useEffect, useState } from "react";
import { getBigFiveTestData } from "../api/bigFive";
import RadioOption from "../components/RadioOption";
import { useNavigate } from "react-router-dom";
const flattenQuizData = (apiData) => {
  if (!apiData) return [];
  return Object.values(apiData).flatMap((trait) =>
    trait.problems.map((problem) => ({
      ...problem,
      categoryName: trait.name,
    }))
  );
};
const QuestionPage = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getBigFiveTestData();
        const flatData = flattenQuizData(result.problemList);
        setQuestions(flatData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const currentQuestion = questions[currentIndex];
  const currentAnswerValue = currentQuestion
    ? answers[currentQuestion.id]
    : null;
  const totalQuestions = questions.length;

  const handleOptionChange = (score) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: score,
    }));
  };
  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      navigate("/result", { state: { answers } });
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      navigate("/");
    }
  };
  if (!currentQuestion)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        Loading Quiz...
      </div>
    );
  return (
    <main className="w-full h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="w-full relative bg-[#4F61FF]/8 flex flex-col-reverse gap-10 px-6 pb-10 pt-10 lg:flex-col lg:gap-112.25 lg:pt-60 lg:px-24 lg:pb-10 lg:h-full">
        <button
          type="button"
          onClick={handleBack}
          className="absolute w-18 h-18  bg-[#4F61FF]/90 top-0 left-0 cursor-pointer hover:bg-[#4F61FF] lg:w-24 lg:h-24"
        >
          <span className="material-icons text-[#FFFFFF] text-4xl! lg:text-[48px]! leading-none">
            arrow_back
          </span>
        </button>
        <div className="flex flex-col gap-4">
          <span className="text-[60px] leading-15  text-[#000000DE] font-PTSans italic lg:text-[120px] lg:leading-30">
            Q
          </span>
          <div className="max-w-2xl">
            <p className="text-4xl text-[#000000DE] leading-18 font-light ml-12 lg:text-5xl">
              {currentQuestion.problem}
            </p>
          </div>
        </div>
        <div className="flex flex-col text-[#00000060] ml-1 self-end lg:self-start">
          <span className="text-[16px] leading-6 font-bold">
            五大性格特質心理測驗
          </span>
          <span className="text-[12px] leading-4.5 font-light">
            Big Five personality traits test
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col relative  gap-10 h-auto pb-20 lg:justify-end lg:h-full lg:gap-33 lg:pb-0">
        <span className="absolute top-6 right-12 text-2xl text-[#00000098] leading-6 font-PTSans italic lg:top-12 lg:right-24">
          {currentIndex + 1} / {totalQuestions}
        </span>
        <div className="w-full flex flex-col gap-6 px-6 pt-20 lg:px-0 lg:pl-18">
          {currentQuestion.options.map((option) => {
            const [title, desc] = option.description.split("。");
            return (
              <RadioOption
                key={option.fraction}
                name={currentQuestion.id}
                value={option.fraction}
                checked={currentAnswerValue === option.fraction}
                onChange={() => handleOptionChange(option.fraction)}
                title={title + "。"}
                description={desc}
              />
            );
          })}
        </div>
        <button
          type="button"
          className={`w-full flex px-3 py-3 text-white justify-end items-center gap-2 lg:px-6 lg:py-6 
              transition-colors
              ${
                !currentAnswerValue
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#4F61FF]/90 hover:bg-[#4F61FF] cursor-pointer"
              }`}
          onClick={handleNext}
          disabled={!currentAnswerValue}
        >
          <span className="text-[32px] leading-12 font-bold">
            {currentIndex === totalQuestions - 1 ? "計算結果" : "下一題"}
          </span>
          <span className="material-icons text-4xl! lg:text-[48px]! leading-none">
            arrow_forward
          </span>
        </button>
      </div>
    </main>
  );
};
export default QuestionPage;
