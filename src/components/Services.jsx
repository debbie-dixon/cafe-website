import ServiceCard from "./ServiceCard";
import image from "../assets/image.jpeg";
import Header from "./Header";

export default function Services() {
  const myServices = [
    {
      title: "Service",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit minima dolor veniam quisquam quibusdam quasi ipsa rem ad, pariatur cum accusamus.",
      image: image,
    },
    {
      title: "Service",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit minima dolor veniam quisquam quibusdam quasi ipsa rem ad, pariatur cum accusamus.",
      image: image, // Temporarily reuse the same image to test!
    },
    {
      title: "Service",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit minima dolor veniam quisquam quibusdam quasi ipsa rem ad, pariatur cum accusamus.",
      image: image, // Temporarily reuse the same image to test!
    },
  ];
  return (
    <>
      <Header text="Our Services" id="services" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-8 mb-8 gap-8">
        {myServices.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </>
  );
}
