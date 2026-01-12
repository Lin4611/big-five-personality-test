import { Link } from "react-router-dom";

const Logo = ({ zh, en }) => {
  return (
    <Link
      className="flex flex-col max-w-40 text-white transition-opacity hover:opacity-70"
      to="/"
    >
      <p className="text-[16px] font-bold leading-6">{zh}</p>
      <span className="text-[12px] leading-4.5 font-light">{en}</span>
    </Link>
  );
};
export default Logo;
