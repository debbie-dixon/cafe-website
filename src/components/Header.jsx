export default function Header({ text, id }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1
          id={id}
          className="text-center py-2 font-sans font-bold text-3xl md:text-4xl mt-3"
        >
          {text}
        </h1>
        <div className="h-0.5 bg-gray-600 w-10 rounded-2xl"></div>
      </div>
    </>
  );
}
