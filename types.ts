import { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
  className?: string;
}

export interface FadeInProps extends ChildrenProps {
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export interface StatProps {
  label: string;
  value: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}
