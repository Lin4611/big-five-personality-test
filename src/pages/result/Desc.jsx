const Desc = ({ currentDegree, category, desc }) => {
  return (
    <div className="max-w-202.5 w-full flex flex-col gap-4 font-light">
      <p className="text-[64px] leading-24 text-[#000000DE]">
        {currentDegree === "high"
          ? "高"
          : currentDegree === "middle"
          ? "中"
          : "低"}
      </p>
      <div className="text-lg lg:text-2xl text-[#00000098] leading-8 lg:leading-9">
        {currentDegree === "middle" ? (
          <>
            <p className="text-lg lg:text-2xl leading-8 lg:leading-9 font-light mb-8 lg:mb-12">
              你的{category}介於中間。可參考高分與低分時的說明。
            </p>
            <div className="space-y-6">
              <div className="flex items-start text-[15px] lg:text-[16px] font-light leading-6">
                <span className="shrink-0 font-bold text-black mr-2">
                  高 ——
                </span>
                <span>{desc["high"]}</span>
              </div>
              <div className="flex items-start text-[15px] lg:text-[16px] font-light leading-6">
                <span className="shrink-0 font-bold text-black mr-2">
                  低 ——
                </span>
                <span>{desc["low"]}</span>
              </div>
            </div>
          </>
        ) : (
          desc[currentDegree]
        )}
      </div>
    </div>
  );
};
export default Desc;
