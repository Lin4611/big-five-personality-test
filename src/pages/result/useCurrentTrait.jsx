import { useMemo } from "react";

export const useCurrentTrait = (fullData, resultsMap, category) => {
  return useMemo(() => {
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
};
