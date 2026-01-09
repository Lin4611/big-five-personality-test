const Title = ({text}) => {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-[60px] leading-15  text-[#000000DE] font-PTSans italic lg:text-[120px] lg:leading-30">
        Q
      </span>
      <div className="max-w-2xl">
        <p className="text-4xl text-[#000000DE] leading-18 font-light ml-12 lg:text-5xl">
          {text}
        </p>
      </div>
    </div>
  );
};
export default Title;
