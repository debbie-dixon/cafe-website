export default function SideMenu({ closeMenu, activeSection }) {
  return (
    <>
      <div className="flex flex-col gap-5 z-999">
        <a
          href="#home"
          onClick={closeMenu}
          className={`px-2 py-1 rounded-md transition-colors ${
            activeSection === "home"
              ? "bg-primary text-white"
              : "text-tColor hover:text-white"
          }`}
        >
          Home
        </a>
        <a
          href="#services"
          onClick={closeMenu}
          className={`px-2 py-1 rounded-md transition-colors ${
            activeSection === "services"
              ? "bg-primary text-white"
              : "text-tColor hover:text-white"
          }`}
        >
          Services
        </a>
        <a
          href="#contact"
          onClick={closeMenu}
          className={`px-2 py-1 rounded-md transition-colors ${
            activeSection === "contact"
              ? "bg-primary text-white"
              : "text-tColor hover:text-white"
          }`}
        >
          Contact Us
        </a>
        <a
          href="#book"
          onClick={closeMenu}
          className=" text-center bg-gray-400 text-black px-6 py-2.5 rounded-md font-medium tracking-wide transition"
        >
          Book Us
        </a>
      </div>
    </>
  );
}
