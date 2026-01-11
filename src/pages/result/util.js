export const calculateBigFiveScores = (fullData, userAnswers) => {
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
};
