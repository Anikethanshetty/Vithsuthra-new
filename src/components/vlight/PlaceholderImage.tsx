import {
  Lightbulb,
  Rows3,
  SquareStack,
  CircleDot,
  Focus,
  MoveHorizontal,
  Zap,
  Lamp,
  Sun,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  bulb: Lightbulb,
  tube: Rows3,
  panel: SquareStack,
  cob: CircleDot,
  focus: Focus,
  track: MoveHorizontal,
  flood: Zap,
  street: Lamp,
  solar: Sun,
};

export default function PlaceholderImage({
  icon,
  src,
  alt,
  className = "",
  iconClassName = "h-10 w-10",
}: {
  icon?: keyof typeof iconMap;
  src?: string;
  alt?: string;
  className?: string;
  iconClassName?: string;
}) {
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt ?? ""} className={`object-contain ${className}`} />
    );
  }

  const Icon = icon ? iconMap[icon] : Lightbulb;

  return (
    <div
      className={`flex items-center justify-center bg-[linear-gradient(135deg,#f4f4f4_0%,#e8e8e8_100%)] text-[#c9c9c9] ${className}`}
    >
      <Icon className={iconClassName} strokeWidth={1.25} />
    </div>
  );
}
