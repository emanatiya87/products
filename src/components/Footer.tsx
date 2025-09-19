import { Footer, FooterDivider } from "flowbite-react";

export default function FooterComponent() {
  return (
    <>
      <Footer container>
        <div className="w-full text-center">
          <FooterDivider />
          <p className="text-gray-700">© 2025 Eman | Thank you for visiting</p>
        </div>
      </Footer>
    </>
  );
}
