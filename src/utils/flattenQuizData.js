export const flattenQuizData = (apiData) => {
  if (!apiData) return [];
  return Object.values(apiData).flatMap((trait) =>
    trait.problems.map((problem) => ({
      ...problem,
      categoryName: trait.name,
    }))
  );
};
