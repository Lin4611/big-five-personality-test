const Title = ({ zh, en }) => {
  return (
    <div className="max-w-123.75 w-full flex flex-col">
      <h1 className="max-w-[384px] text-4xl leading-16 font-light text-[#000000DE] lg:text-[64px] lg:leading-24">
        {zh}
      </h1>
      <p className="max-w-53.75 w-full text-xl font-light text-[#000000DE] leading-9 m-0 lg:-mt-20.75 lg:self-end lg:text-2xl">
        {en}
      </p>
    </div>
  );
};
export default Title;
