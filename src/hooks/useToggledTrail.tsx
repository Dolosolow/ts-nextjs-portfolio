'use client';

import { useTrail } from "@react-spring/web";

interface ToggleTrailsProps {
  from: { opacity: number; y: number };
  to: { opacity: number; y: number };
  delay?: number;
  config?: { duration: number };
}

export const useToggledTrails = (length: number, props: ToggleTrailsProps) => {
  return useTrail(length, props);
};
