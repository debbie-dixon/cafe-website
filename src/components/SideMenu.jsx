export default function SideMenu({ closeMenu }) {
  return (
    <>
      <div className="flex flex-col gap-5 z-999">
        <a
          href="#home"
          onClick={closeMenu}
          className=" active:text-white text-tColor hover:text-white  px-2 py-1 rounded-md transition-colors"
        >
          Home
        </a>
        <a
          href="#services"
          onClick={closeMenu}
          className=" active:text-white text-tColor hover:text-white px-2 py-1 rounded-md transition-colors"
        >
          Services
        </a>
        <a
          href="#contact"
          onClick={closeMenu}
          className="  text-tColor hover:text-white px-2 py-1 rounded-md transition-colors"
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
