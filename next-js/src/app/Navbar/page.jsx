"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "State", href: "/state.jsx" },
    { name: "SignUp", href: "/SignUp" },
    { name: "Students Info", href: "/studentsInfo" },
  ];

  return (
    <ul className="flex gap-4 p-4 bg-gray-100">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={`px-4 py-2 rounded transition-all duration-200 ${
              pathName === link.href
                ? "bg-blue-600 text-white font-bold shadow-lg shadow-blue-200"
                : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
            }`}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
