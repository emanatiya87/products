import { Carousel } from "flowbite-react";
export default function Header() {
  return (
    <>
      <header className="w-[80%] overflow-hidden h-42 mx-auto rounded-2xl flex items-center justify-center mt-2">
        <Carousel slide={true} className="w-full h-full">
          <img src="/images/images.png" alt="download1" />
        </Carousel>
      </header>
    </>
  );
}
