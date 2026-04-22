export type Page = 'home' | 'projects' | 'pricing' | 'contact';
 
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
 
export interface HomeProps {
  setPage: (page: Page) => void;
}

export interface LogoProps {
  variant?: 'mark-a' | 'mark-b' | 'mark-c' | 'horizontal' | 'horizontal-compact' | 'stacked';
  className?: string;
  size?: number;
}