import { DynamicIcon } from "lucide-react/dynamic";

export default function DynamicIcons({ iconName, link, text }) {
  return (
    <a href={link} className="flex gap-1 items-center">
      <DynamicIcon name={iconName} size={18} />
      {text}
    </a>
  );
}
