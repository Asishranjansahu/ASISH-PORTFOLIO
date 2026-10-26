import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Code2, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'Hackathons', href: '#hackathons' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'GitHub activity', href: '#github-stats' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef(null);

  const closeMenu = () => setIsOpen(false);
  const handleKeyDown = (event) => {
    if (event.key === 'Escape' && isOpen) {
      closeMenu();
      menuButtonRef.current?.focus();
    }
  };

  return (
    <nav
      aria-label="Main navigation"
      onKeyDown={handleKeyDown}
      className="site-nav fixed inset-x-0 top-0 z-[100] border-b border-white/[0.06]"
    >
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-4">
        <a href="#hero" onClick={closeMenu} className="flex items-center gap-3 text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)]">
            <Code2 className="h-5 w-5 text-cyan-300" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold tracking-tight">
            Asish<span className="text-cyan-300">.dev</span>
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="site-nav-link text-sm font-medium text-slate-300 transition-colors hover:text-cyan-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-white transition-colors hover:border-cyan-300 lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-nav overflow-hidden border-t border-white/[0.06] bg-[var(--background)] lg:hidden"
          >
            <div className="mx-auto flex max-h-[calc(100dvh-5rem)] max-w-[1120px] flex-col gap-1 overflow-y-auto px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/[0.06] hover:text-cyan-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
