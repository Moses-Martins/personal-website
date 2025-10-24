'use client'
import { useRouter } from "next/navigation";

export default function NavBar() {
  const route = useRouter();

  const navItems = [
    { label: 'home', path: '/' },
    { label: 'projects', path: '/projects' },
    { label: 'articles', path: '/articles' },
    { label: 'about', path: '/about' },
  ];

  return (
    <nav className="flex gap-9 text-white dark:text-black">
      {navItems.map((item) => (
        <span
          key={item.path}
          onClick={() => route.push(item.path)}
          className="cursor-pointer transition-colors duration-200 hover:text-pink-400"
        >
          <span className="text-pink-400">#</span>
          {item.label}
        </span>
      ))}
    </nav>
  );
}
