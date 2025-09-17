import { Loader2 } from 'lucide-react';

import { Size } from '@/src/utils/types';

export type LoaderProps = {
  size?: Size;
  text?: string;
};

const sizeMap = {
  lg: 32,
  md: 24,
  sm: 16,
};

export const Loader = ({ size = 'md', text }: LoaderProps) => {
  const iconSize = sizeMap[size];

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Loader2 className="animate-spin" size={iconSize} />
      {text && <span className="text-sm text-gray-600">{text}</span>}
    </div>
  );
};
