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
          w-8 h-8 rounded-full
          border-[3.5px] border-[#000000DE]
          peer-checked:border-[#4F61FF]
          peer-checked:[&>div]:bg-[#4F61FF]      
          transition-all
        "
      >
        <div
          className="
            w-4 h-4 rounded-full 
            bg-transparent 
            transition-all duration-200
          "
        ></div>
      </div>
      <span
        className="
          text-2xl leading-12
          text-[#000000DE]
          peer-checked:text-[#4F61FF]
          group-hover:text-[#4F61FF]
          transition-colors
        "
      >
        <strong>{title}</strong>
        <span className="py-1.5">{description}</span>
      </span>
    </label>
  );
};
export default RadioOption;
