const RadioOption = ({
  name,
  value,
  checked,
  onChange,
  title,
  description,
}) => {
  return (
    <label className="w-full flex gap-3 group cursor-pointer items-center">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />
      <div
        className="
          relative flex items-center justify-center shrink-0
          w-6 h-6 
          rounded-full
          border-[3.5px] border-[#000000DE]
          peer-checked:border-[#4F61FF]
          peer-checked:[&>div]:bg-[#4F61FF]      
          transition-all
          lg:w-8 lg:h-8
        "
      >
        <div className="w-3 h-3 rounded-full bg-transparent transition-all duration-200 lg:w-4 lg:h-4"></div>
      </div>
      <span
        className="
          text-xl leading-6
          text-[#000000DE]
          peer-checked:text-[#4F61FF]
          group-hover:text-[#4F61FF]
          transition-colors
          lg:text-2xl lg:leading-12
        "
      >
        <strong>{title}</strong>
        <span className="py-1.5">{description}</span>
      </span>
    </label>
  );
};
export default RadioOption;
