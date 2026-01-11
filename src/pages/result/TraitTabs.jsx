const TraitTabs = ({traits,category,onClick}) => {
  return (
    <nav className="w-full flex items-center text-[16px] leading-6 overflow-x-auto flex-nowrap gap-6 justify-start self-center lg:gap-12 lg:justify-end px-6 py-3 lg:px-0 lg:py-0 max-w-full lg:max-w-lg">
      {traits.zh.map((tag) => (
        <button
          type="button"
          key={tag}
          className={`
                  cursor-pointer transition-all 
                  whitespace-nowrap
                  shrink-0
                  py-2
                  ${
                    category === tag
                      ? "text-white font-bold underline underline-offset-8 decoration-[4px] decoration-[#4F61FF]"
                      : "text-white/80 font-light hover:text-white"
                  }
                `}
          onClick={() => onClick(tag)}
        >
          {tag}
        </button>
      ))}
    </nav>
  );
};
export default TraitTabs;
