import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useBigFiveData } from "../../hooks/useBigFiveData";
import { flattenQuizData } from "./util";

import BackBtn from "./BackBtn";
import Title from "./Title";
import TitleLabel from "./TitleLabel";
import Progress from "./Progress";
import Options from "./Options";
import NextBtn from "./NextBtn";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorInfo from "../../components/ErrorInfo";

const QuestionPage = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useBigFiveData();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = useMemo(() => {
    if (!data?.problemList) return [];
    return flattenQuizData(data.problemList);
  }, [data]);

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

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorInfo error={error} />;
  }

  return (
    <main className="w-full h-screen grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2">
      <div className="w-full h-full relative bg-[#4F61FF]/8  flex flex-col-reverse gap-10 px-6 py-20 items-start justify-center lg:flex-col lg:justify-between lg:pt-60 lg:px-24 lg:pb-10">
        <BackBtn onClick={handleBack} />
        <Title text={currentQuestion.problem} />
        <TitleLabel
          zh={data.name["zh"].split("(")[0]}
          en={data.name["en"].split("(")[0]}
        />
      </div>
      <div className="w-full h-full flex flex-col relative gap-10 lg:justify-end lg:gap-33">
        <Progress current={currentIndex + 1} total={totalQuestions} />
        <Options
          questionId={currentQuestion.id}
          options={currentQuestion.options}
          onChange={handleOptionChange}
          currentAnswerValue={currentAnswerValue}
        />
        <NextBtn
          currentAnswerValue={currentAnswerValue}
          onClick={handleNext}
          isLast={currentIndex === totalQuestions - 1}
        />
      </div>
    </main>
  );
};
export default QuestionPage;
