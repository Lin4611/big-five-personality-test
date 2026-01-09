const Progress = ({ current, total }) => {
  return (
    <span className="absolute top-6 right-12 text-2xl text-[#00000098] leading-6 font-PTSans italic lg:top-12 lg:right-24">
      {current} / {total}
    </span>
  );
};

export default Progress;