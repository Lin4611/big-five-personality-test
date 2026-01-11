const TraitSummary = ({category, enKey,desc}) => {
  return (
    <div className="max-w-352.5 w-full px-6 2xl:px-0">
      <div className="max-w-202.5 w-full flex gap-10 text-white items-center flex-col lg:gap-18 lg:flex-row">
        <div className="flex flex-col">
          <p className="text-5xl leading-18">{category}</p>
          <span className="text-2xl leading-12 font-light">
            {enKey}
          </span>
        </div>
        <span className="text-[16px] font-light leading-6 max-w-112.5 tracking-normal">
          {desc}
        </span>
      </div>
    </div>
  );
};
export default TraitSummary;
