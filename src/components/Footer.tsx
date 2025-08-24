import { Footer, FooterCopyright, FooterDivider } from "flowbite-react";

export default function FooterComponent() {
  return (
    <>
      <Footer container>
        <div className="w-full text-center">
          <FooterDivider />
          <FooterCopyright href="#" by="Flowbite™" year={2025} />
        </div>
      </Footer>
    </>
  );
}
