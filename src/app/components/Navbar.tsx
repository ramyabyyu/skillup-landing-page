import Link from "next/link";
import Image from "next/image";
import logoText from "../assets/logoText.png";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="bg-gray-200 text-gray-800 sticky top-0 z-50 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="#" className="flex space-x-2">
              <Image src={Logo} alt="" />
              <Image src={logoText} alt="" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-12">
              <Link href="#">Beranda</Link>
              <Link href="#">Layanan</Link>
              <Link
                href="#"
                className="px-4 py-2 text-gray-200 rounded-full bg-[#00ABAD]"
              >
                Kontak Kami
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
