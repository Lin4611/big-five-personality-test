import { Link } from "react-router-dom";

const Intro = ({ description }) => {
  return (
    <div className="max-w-202.5 w-full flex gap-7.5  flex-col items-center lg:self-end lg:flex-row">
      <p className="flex-1 w-full max-w-112.5 text-[16px] leading-6 text-[#00000098] font-light text-left tracking-normal">
        {description}
      </p>
      <Link
        className="max-w-82.5 shrink-0 bg-[#4F61FF] py-6 px-18.25 text-[#FFFFFF] cursor-pointer flex items-center tracking-normal gap-2 transition-opacity hover:opacity-70"
        to="/quiz"
      >
        <span className="text-[20px] lg:text-[32px] leading-12">開始測驗</span>
        <span className="material-icons text-4xl! lg:text-[48px]! leading-none">
          arrow_forward
        </span>
      </Link>
    </div>
  );
};

export default Intro;
