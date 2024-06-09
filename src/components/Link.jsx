// eslint-disable-next-line react/prop-types
export default function Link({ name, link }) {
  return (
    <li>
      <a className="navbar text-[18px]" href={link}>
        {name}
      </a>
    </li>
  );
}
