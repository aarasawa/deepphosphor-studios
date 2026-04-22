import { Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-soft-black border-t border-amber-phosphor/10 py-6 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-amber-mid/5">
          <div>
            <h4 className="text-amber-mid font-sans text-xl uppercase tracking-widest mb-4">CONNECT</h4>
            <div className="flex space-x-4">
              <a href="mailto:alex@deepphosphor.studio" target="_blank" className="p-2 bg-amber-mid/5 rounded-sm hover:bg-amber-mid hover:text-marine transition-all">
                <Mail size={20} />
              </a>
              <a href="https://www.github.com/aarasawa" target="_blank" className="p-2 bg-amber-mid/5 rounded-sm hover:bg-amber-mid hover:text-marine transition-all">
                <Github size={20} />
              </a>
            </div>
          </div>

          <p className="text-m sm:text-sm text-amber-mid/75 font-sans text-center md:text-right">
            &copy; 2026 DEEP PHOSPHOR STUDIOS
          </p>
        </div>
      </div>
    </footer>
  );
}
