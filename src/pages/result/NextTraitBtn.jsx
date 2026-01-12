const NextTraitBtn = ({ onClick, isLast, nextCategory }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
            w-full h-auto min-h-12 text-xl lg:text-[32px] text-[#000000DE] 
            flex items-center gap-2 cursor-pointer transition-opacity hover:opacity-70         
            justify-end lg:justify-center self-start lg:self-end
            ${
              isLast
                ? "border-2 border-[#000000DE] justify-center lg:justify-center p-4 lg:h-24 lg:max-w-95"
                : "border-none lg:max-w-95"
            }
          `}
    >
      {isLast ? (
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
            <span className="font-bold">{nextCategory}</span>
          </span>
          <span className="material-icons text-4xl lg:text-[48px]! leading-none text-[#4F61FF]">
            arrow_forward
          </span>
        </>
      )}
    </button>
  );
};
export default NextTraitBtn;
