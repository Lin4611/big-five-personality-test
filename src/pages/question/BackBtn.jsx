const BackBtn = ({ onClick }) => {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className="absolute w-18 h-18  bg-[#4F61FF]/90 top-0 left-0 cursor-pointer hover:bg-[#4F61FF] lg:w-24 lg:h-24"
      >
        <span className="material-icons text-[#FFFFFF] text-4xl! lg:text-[48px]! leading-none">
          arrow_back
        </span>
      </button>
    </>
  );
};
export default BackBtn;
