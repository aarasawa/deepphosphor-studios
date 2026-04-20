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
  description: string;
  imageUrl: string;
}
 
export interface HomeProps {
  setPage: (page: Page) => void;
}