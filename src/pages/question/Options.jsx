import RadioOption from "./RadioOption";
const Options = ({questionId,options,onChange,currentAnswerValue}) => {
  return (
    <div className="w-full flex-1 flex flex-col gap-6 px-6 pt-20 justify-center lg:justify-end lg:px-2 lg:pl-16">
      {options.map((option) => {
        const [title, desc] = option.description.split("。");
        return (
          <RadioOption
            key={option.fraction}
            name={questionId}
            value={option.fraction}
            checked={currentAnswerValue === option.fraction}
            onChange={() => onChange(option.fraction)}
            title={`${title}。`}
            description={desc}
          />
        );
      })}
    </div>
  );
};
export default Options;
