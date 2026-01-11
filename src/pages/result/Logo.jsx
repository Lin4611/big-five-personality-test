const Logo = ({ zh, en }) => {
  return (
    <div className="flex flex-col max-w-40 text-white">
      <p className="text-[16px] font-bold leading-6">{zh}</p>
      <span className="text-[12px] leading-4.5 font-light">{en}</span>
    </div>
  );
};
export default Logo;
