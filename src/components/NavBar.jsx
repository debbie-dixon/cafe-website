import { useEffect, useState } from "react";
import DynamicIcons from "./DynamicIcons";
import SideMenu from "./SideMenu";

const navItems = [
  { label: "Home", href: "#home", section: "home" },
  { label: "Menu", href: "#about", section: "about" },
  { label: "Events", href: "#services", section: "services" },
];
const observedSections = ["home", "about", "services", "contact", "book"];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const sections = observedSections
      .map((section) => document.getElementById(section))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const linkClass = (section) =>
    `px-4 py-1.5 rounded-full transition-colors duration-300 ${
      activeSection === section
        ? "bg-primary text-white"
        : "hover:bg-primary hover:text-white"
    }`;

  return (
    <>
      <nav className="flex justify-between items-center gap-4 py-4 px-16 sticky top-0 left-0 w-full bg-accent shadow-sm mx-auto z-50">
        <p className="font-serif italic font-bold text-2xl">Logo</p>
        <div className="hidden md:flex gap-4 font-sans items-center font-semibold">
          {navItems.map(({ label, href, section }) => (
            <a key={section} href={href} className={linkClass(section)}>
              {label}
            </a>
          ))}
        </div>
        <a
          href="#book"
          className="px-6 py-2.5 hidden md:flex tracking-wide rounded-full bg-primary text-white font-semibold hover:bg-secondary transition-colors duration-300"
        >
          Admin
        </a>
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Open Menu"
        >
          <DynamicIcons iconName="menu" />
        </button>
      </nav>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-55 shadow-xl p-6 transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={closeMenu}
          className=" p-2 focus:outline-none flex justify-end mb-8"
          aria-label="Close Menu"
        >
          <DynamicIcons iconName="x" />
        </button>
        <SideMenu closeMenu={closeMenu} activeSection={activeSection} />
      </div>
    </>
  );
}
