import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-soft-black border-t border-amber-phosphor/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 items-start">
          <div className="col-span-1 md:col-span-2">
            <Logo variant="stacked-compact" size={180} className="mb-8" />
            <p className="text-amber-mid/50 max-w-md leading-relaxed">
              A boutique digital studio based in Los Angeles, CA. Specializing in 
              elevated web experiences, IT strategy, and creative visual storytelling 
              for the mission-driven sector.
            </p>
          </div>
          
          <div>
            <h4 className="text-amber-mid font-sans text-xl uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-amber-mid/60">
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-amber-mid" />
                <span>hello@deepphosphor.com</span>
              </li>
              <li>Los Angeles, CA</li>
              <li>Mon - Fri: 09:00 - 18:00</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-amber-mid font-sans text-xl uppercase tracking-widest mb-6">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-amber-mid/5 rounded-sm hover:bg-amber-mid hover:text-marine transition-all">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-amber-mid/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-amber-mid/30 font-sans">
            &copy; 2026 DEEP PHOSPHOR STUDIOS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-6 text-[10px] font-sans text-amber-mid/30 uppercase tracking-widest">
            <a href="#" className="hover:text-amber-mid">Privacy Policy</a>
            <a href="#" className="hover:text-amber-mid">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
