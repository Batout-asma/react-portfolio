import Link from "./Link";

const links = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "About",
    link: "#",
  },
  {
    name: "Services",
    link: "#",
  },
  {
    name: "Portfolio",
    link: "#",
  },
  {
    name: "Contact",
    link: "#",
  },
];

export default function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-between">
      <img src="/images/logo.png" className="w-36" />
      <ul className="flex gap-3">
        {links.map((link, index) => (
          <Link key={index} name={link.name} link={link.link} />
        ))}
      </ul>
    </nav>
  );
}
