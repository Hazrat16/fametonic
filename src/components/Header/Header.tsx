import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className=" px-[211px]">
      <nav className=" shadow-md px-6 py-4 flex items-center justify-between ">
        <div className="text-xl font-bold text-gray-800">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={173.12}
              height={74}
            />
          </Link>
        </div>
        <ul className="flex space-x-10 text-gray-700 font-medium self-start ">
          <li>
            <Link
              href="/about"
              className="text-lg font-semibold text-[background: #A9A9A9;
] "
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-lg font-semibold text-[background: #A9A9A9;
] "
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
