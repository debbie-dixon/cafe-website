export default function Button({
  border,
  bgColor,
  text,
  borderColor,
  hoverTp,
  hover,
  size,
  rounded,
  font,
  textColor,
  link,
}) {
  return (
    <>
      <a href={link}>
        <button
          className={`px-6 py-2 ${textColor}  transition-all ${font} duration-300 mt-4 shadow-sm ${border} ${bgColor} ${borderColor} ${hover} ${hoverTp} ${size} ${rounded}`}
        >
          {text}
        </button>
      </a>
    </>
  );
}
