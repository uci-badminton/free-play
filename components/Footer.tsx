import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-grow-0 flex-shrink flex-row justify-between items-center w-full px-16 py-3">
      <p className="text-md text-[#848484]">Made with ❤️ by Badminton Devs</p>
      <div className="flex flex-row items-center">
        <Link
          target="_blank"
          href="https://www.ups.com/us/en/healthcare/Home.page"
          className="flex m-3 flex-center"
        >
          <Image
            src="/assets/facebook.png"
            alt="Facebook Logo"
            width={30}
            height={30}
            className="object-contain"
          />
        </Link>
        <Link
          target="_blank"
          href="https://www.ups.com/us/en/healthcare/Home.page"
          className="flex m-3 flex-center"
        >
          <Image
            src="/assets/instagram.png"
            alt="Instagram Logo"
            width={30}
            height={30}
            className="object-contain"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
