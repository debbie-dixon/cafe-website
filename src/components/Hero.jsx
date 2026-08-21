import image from "../assets/image.jpeg";
import Button from "./Button";

export default function Hero() {
  return (
    <div>
      <section
        id="home"
        className=" w-full flex flex-col md:flex-row justify-evenly items-center gap-8 pt-24 pb-16"
      >
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="font-serif text-6xl text-slate-800 text-center sm:text-start leading-none">
            Name <span className="block mb-2">Name</span>
            <p className=" text-[11px] md:text-base font-sans font-semibold text-slate-500 uppercase tracking-widest py-2">
              Tagline Here
            </p>
          </h1>
          <Button
            text="View Gallery"
            hover="hover:text-blue"
            rounded="rounded-md"
            textColor="text-tColor"
            bgColor="bg-blue-300"
            textColor="text-black"
            font="font-semibold"
            link="#gallery"
          />
        </div>

        <img
          src={image}
          alt="Nail Art Design"
          className=" max-w-md w-full h-auto object-cover  sm:w-lg"
        />
      </section>
    </div>
  );
}
