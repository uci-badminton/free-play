import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex flex-grow-0 flex-shrink flex-row justify-between w-full px-16 py-3 shadow-lg">
      <Link href="/" className="flex flex-row justify-start items-center">
        <Image
          src="/assets/logo.png"
          alt="Badminton at UCI Logo"
          width={70}
          height={70}
          className="object-contain"
        />
        <h1 className="text-4xl ml-5">Badminton Club at UCI</h1>
      </Link>
      <div className="flex flex-row justify-end items-center">
        <h2 className="text-lg">How it works</h2>
        <button className="bg-black text-white rounded-lg py-1 px-2 text-center ml-5">
          Admin Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
