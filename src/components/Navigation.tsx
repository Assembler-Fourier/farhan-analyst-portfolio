"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { contact } from "@/data/profile";

const navItems = [
  { label: "Profile", href: "#profile" },
  { label: "Role fit", href: "#role-fit" },
  { label: "Experience", href: "#experience" },
  { label: "Ireland", href: "#ireland" },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <header className="site-nav">
      <div
        className="scroll-progress"
        aria-hidden="true"
        style={{ transform: `scaleX(${progress})` }}
      />
      <a className="monogram" href="#top" aria-label="Farhan Ahmad — back to top">
        <span>FA</span>
        <span className="monogram-dot" />
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="nav-cta" href={`mailto:${contact.email}`}>
        Let&apos;s talk
        <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.7} />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        {navItems.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            <span>0{index + 1}</span>
            {item.label}
          </a>
        ))}
        <a href={`mailto:${contact.email}`} onClick={() => setMenuOpen(false)}>
          <span>05</span>
          Contact
        </a>
      </div>
    </header>
  );
}
