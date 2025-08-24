import { Carousel } from "flowbite-react";

export default function Header() {
  return (
    <>
      <header className="w-[80%] overflow-hidden h-42 mx-auto rounded-2xl flex items-center justify-center">
        <Carousel className="w-full h-full">
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />

          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </header>
    </>
  );
}
