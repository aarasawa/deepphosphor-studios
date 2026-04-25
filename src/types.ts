import { LucideIcon } from 'lucide-react';

export type Page = 'home' | 'projects' | 'pricing' | 'contact';
export interface HomeProps {
  setPage: (page: Page) => void;
}
export interface PricingProps {
  setPage: (page: Page) => void;
}
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}
 
export interface Project {
  id: string;
  title: string;
  category: string;
  status: string;
  description: string;
  imageUrl: string;
}

export interface LogoProps {
  variant?: 'mark-a' | 'mark-b' | 'mark-c' | 'horizontal' | 'horizontal-compact' | 'stacked';
  className?: string;
  size?: number;
}

export interface ServiceDetail {
  title: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  tags: string[];
  includes: string[];
  goodFit: string[];
}
 
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}