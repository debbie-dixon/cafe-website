import DynamicIcons from "./DynamicIcons";
export default function Offers() {
  const offerings = ["offers", "offers", "offers"];

  return (
    <section className="w-full bg-white py-12 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        {/* Responsive Grid: 2 columns on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8 justify-items-center">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 w-full max-w-50"
            >
              <DynamicIcons iconName="check" />

              <span className="font-sans font-sm text-slate-400 text-sm md:text-base whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
