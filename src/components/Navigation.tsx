import { ArrowUpRight } from "lucide-react";
import { contact } from "@/data/profile";

const navItems = [
  { label: "Skills", href: "#skills" },
  { label: "Qualifications", href: "#proof" },
  { label: "Experience", href: "#experience" },
] as const;

export function Navigation() {
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <a className="brand" href="#top" aria-label="Farhan Ahmad portfolio home">
          <span>FA</span>
          <strong>Farhan Ahmad</strong>
        </a>

        <nav className="nav-links" aria-label="Portfolio sections">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href={`mailto:${contact.email}`}>
          Contact
          <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      </div>
    </header>
  );
}
