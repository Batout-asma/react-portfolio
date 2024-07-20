import Link from "./Link";

const links = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "About",
    link: "#About",
  },
  {
    name: "Services",
    link: "#Services",
  },
  {
    name: "Portfolio",
    link: "#Portfolio",
  },
  {
    name: "Contact",
    link: "#Contact",
  },
];

export default function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-between font-normal">
      <img src="/images/logo.png" className="w-38" />
      <ul className="flex gap-5">
        {links.map((link, index) => (
          <Link key={index} name={link.name} link={link.link} />
        ))}
      </ul>
    </nav>
  );
}
