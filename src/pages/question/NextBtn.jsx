const NextBtn = ({currentAnswerValue,onClick, isLast}) => {
  return (
    <button
      type="button"
      className={`w-full flex px-3 py-3 text-white justify-end items-center gap-2 lg:px-6 lg:py-6 
              transition-colors
              ${
                !currentAnswerValue
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#4F61FF]/90 hover:bg-[#4F61FF] cursor-pointer"
              }`}
      onClick={onClick}
      disabled={!currentAnswerValue}
    >
      <span className="text-[32px] leading-12 font-bold">
        {isLast ? "計算結果" : "下一題"}
      </span>
      <span className="material-icons text-4xl! lg:text-[48px]! leading-none">
        arrow_forward
      </span>
    </button>
  );
};
export default NextBtn;
