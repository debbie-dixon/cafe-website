import { DynamicIcon } from "lucide-react/dynamic";

export default function DynamicIcons({
  iconName,
  link,
  text,
  size = "24",
  color,
}) {
  return (
    <a href={link} className={`flex gap-1 items-center ${color}`}>
      {text} <DynamicIcon name={iconName} size={size} />
    </a>
  );
}
