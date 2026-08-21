import image from "../assets/image.jpeg";
export default function About() {
  return (
    <>
      <section
        id="about"
        className="w-full flex flex-col md:flex-row justify-between items-center gap-8 px-6 mt-8"
      >
        <img
          src={image}
          alt="About Image"
          className="max-w-sm w-lg h-auto object-cover p-4 sm:w-100 sm:h-100 rounded-4xl"
        />
        <div>
          <h1 className="font-black text-2xl text-center pb-4">About Us</h1>
          <p className="font-sans text-sm tracking-wide px-8 text-start block max-w-3xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At tenetur
            molestiae reprehenderit incidunt perferendis dolorum error neque
            totam adipisci expedita voluptatem nam, quaerat iure eius ducimus
            tempora repellat perspiciatis quo velit sunt vel provident. Saepe
            cum in mollitia dolore sunt, doloremque delectus, quos optio non qui
            fugit, accusantium commodi. Ipsa id, aspernatur enim ab, natus
            facilis quasi libero nam sint odio mollitia numquam? Error
            aspernatur quisquam esse? Impedit voluptas, maiores corrupti
            temporibus laudantium vitae quia qui laborum reiciendis perspiciatis
            quae voluptate animi adipisci eligendi totam excepturi doloribus
            veritatis, quo repudiandae! Deserunt quasi fugit animi officia
            molestiae quibusdam soluta hic ipsum.
          </p>
        </div>
      </section>
    </>
  );
}
