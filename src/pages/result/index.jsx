import { useMemo, useState } from "react";
import { useBigFiveData } from "../../hooks/useBigFiveData";
import { useLocation, useNavigate } from "react-router-dom";

import Logo from "./Logo";
import TraitTabs from "./TraitTabs";
import TraitSummary from "./TraitSummary";
import Desc from "./Desc";
import NextTraitBtn from "./NextTraitBtn";

import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorInfo from "../../components/ErrorInfo";

const bgMap = {
  情緒不穩定性: "bg-[url('/src/assets/imgs/neuroticism_pic.png')]",
  外向性: "bg-[url('/src/assets/imgs/extroversion_pic.png')]",
  經驗開放性: `bg-[url('/src/assets/imgs/openness_pic.png')]`,
  親和性: "bg-[url('/src/assets/imgs/agreeableness_pic.png')]",
  盡責性: "bg-[url('/src/assets/imgs/conscientiousness_pic.png')]",
};

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const userAnswers = location.state?.answers;

  const { data: fullData, loading, error } = useBigFiveData();
  const [category, setCategory] = useState("經驗開放性");

  const resultsMap = useMemo(() => {
    if (!fullData || !userAnswers) return null;

    const calculated = {};
    const { degree, traits, problemList } = fullData;

    traits.en.forEach((traitKey) => {
      const traitData = problemList[traitKey];
      let score = 0;

      traitData.problems.forEach((problem) => {
        score += userAnswers[problem.id] || 0;
      });

      if (score >= degree.high) calculated[traitKey] = "high";
      else if (score <= degree.low) calculated[traitKey] = "low";
      else calculated[traitKey] = "middle";
    });

    return calculated;
  }, [fullData, userAnswers]);

  const currentData = useMemo(() => {
    if (!fullData || !resultsMap) return null;

    const list = fullData.traits.zh;
    const index = list.indexOf(category);
    const isLast = index === list.length - 1;

    const enKey = fullData.traits.en[index];
    const traitData = fullData.problemList[enKey];
    const nextIndex = (index + 1) % list.length;
    const nextCategoryName = list[nextIndex];

    const myDegree = resultsMap[enKey];

    return {
      enKey,
      data: traitData,
      nextCategory: nextCategoryName,
      isLast,
      degree: myDegree,
    };
  }, [fullData, category, resultsMap]);

  const handleNextAction = () => {
    if (currentData.isLast) {
      navigate("/");
    } else {
      setCategory(currentData.nextCategory);
    }
  };

  if (!loading && !userAnswers) {
    navigate("/");
    return null;
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorInfo error={error} />;
  }

  return (
    <main className="w-full flex flex-col items-center justify-center">
      <div
        className={`${bgMap[category]} w-full flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat pt-12 pb-12 gap-12 lg:pt-6 lg:gap-80 lg:pb-12`}
      >
        <div className="max-w-352.5 w-full px-6 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0 2xl:px-0">
          <Logo
            zh={fullData.name["zh"].split("(")[0]}
            en={fullData.name["en"].split("(")[0]}
          />
          <TraitTabs
            traits={fullData.traits}
            onClick={setCategory}
            category={category}
          />
        </div>
        <TraitSummary
          category={category}
          enKey={currentData.enKey}
          desc={currentData.data.description.desc}
        />
      </div>
      <div className="max-w-352.5 w-full flex flex-col  py-12 gap-20 px-6 2xl:gap-40 2xl:px-0">
        <Desc
          currentDegree={currentData.degree}
          category={category}
          desc={currentData.data.description}
        />
        <NextTraitBtn
          onClick={handleNextAction}
          isLast={currentData.isLast}
          nextCategory={currentData.nextCategory}
        />
      </div>
    </main>
  );
};
export default ResultPage;
