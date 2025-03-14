import { Link } from "@remix-run/react";

export default function LeftSideNav() {
  return (
    <nav className="flex h-screen w-64 flex-col gap-6 bg-gray-100 p-6 dark:bg-gray-800">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
        Site Menu
      </h2>
      <ul className="flex flex-col gap-2">
        <li>
          <Link to="/" className="text-gray-800 hover:underline dark:text-gray-100">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-gray-800 hover:underline dark:text-gray-100">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-gray-800 hover:underline dark:text-gray-100">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
