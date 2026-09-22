import image from "../assets/HeroImage.jpg";
import Button from "./Button";
import NavBar from "./NavBar";

export default function Hero() {
  return (
    <section
      id="home"
      className=" relative min-h-[85vh] w-full overflow-hidden sm:min-h-screen flex flex-col justify-between"
    >
      <link rel="preload" as="image" href={image} fetchPriority="high" />
      <img
        src={image}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />

      {/* Adaptive Overlay: Solid dark backdrop on Mobile | Gradient fade on Desktop */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-black/70 " />

      <div className="relative z-10 flex min-h-screen flex-col justify-start">
        <NavBar />
        <section
          id="home"
          className="animate-fade-up flex min-h-0 flex-1 w-full flex-col items-center justify-center gap-8 px-5 py-16 text-center sm:px-8 md:flex-row md:px-12 lg:px-16"
        >
          <div className="flex max-w-xl flex-col items-center text-center">
            <h1 className="text-center font-sans text-3xl font-bold leading-tight text-white sm:text-6xl">
              Fresh Brews & Hot Plates, Served Daily.
            </h1>
            <p className="mt-4 max-w-lg  font-sans text-base font-normal leading-relaxed text-slate-200 sm:text-base md:text-lg">
              Start your day with rich espresso. Stick around for delicious
              breakfasts, warm pastries, and hearty plates made fresh to order.
            </p>
            <div className="mt-8 space-x-4">
              <Button
                text="Explore Our Menu"
                hover="hover:bg-secondary transition"
                rounded="rounded-full"
                bgColor="bg-primary"
                textColor="text-white"
                font="font-semibold"
                link="#menu"
                icon="chevron-right"
              />
              <Button
                text="Special Events"
                hover="hover:bg-secondary transition"
                rounded="rounded-full"
                bgColor=" bg-opacity-20 backdrop-blur-sm"
                textColor="text-white"
                font="font-semibold"
                link="#events"
                border="border border-primary"
                icon="calendar"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
