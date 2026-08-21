export default function ServiceCard({ image, title, description }) {
  return (
    <div className="flex flex-col w-full max-w-75 overflow-hidden border rounded-md">
      {/* 1. Image (Clean and squared off at the top) */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          /* Fallback placeholder if your image path is broken */
          <div className="w-full h-full flex items-center justify-cente font-medium">
            Loading Image...
          </div>
        )}
      </div>

      <div className=" px-5 py-4 flex flex-col grow">
        <h3 className="font-sans font-bold text-2xl text-tColor mb-1 tracking-tight">
          {title}
        </h3>

        <p className="font-sans text-tDescColor text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
