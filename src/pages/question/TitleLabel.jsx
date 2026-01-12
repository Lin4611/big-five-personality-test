const TitleLabel = ({ zh, en }) => {
  return (
    <div className="flex flex-col text-[#00000060] ml-1 self-end lg:self-start">
      <span className="text-[16px] leading-6 font-bold">{zh}</span>
      <span className="text-[12px] leading-4.5 font-light">{en}</span>
    </div>
  );
};
export default TitleLabel;
