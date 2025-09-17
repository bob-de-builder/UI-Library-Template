import { Size } from "@/src/utils/types";
import { Loader2 } from "lucide-react";

export type LoaderProps = {
  size?: Size;
  text?: string;
};

const sizeMap = {
  sm: 16,
  md: 24,
  lg: 32,
};

export const Loader = ({ size = "md", text }: LoaderProps) => {
  const iconSize = sizeMap[size];

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Loader2 size={iconSize} className="animate-spin" />
      {text && <span className="text-sm text-gray-600">{text}</span>}
    </div>
  );
};
