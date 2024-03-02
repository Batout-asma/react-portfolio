export default function App() {
  return (
    <>
      <div className="header h-screen w-full">
        <div className="px-[10%] py-[10px]">
          <nav className="flex flex-wrap items-center justify-between">
            <img src="/images/logo.png" className="w-36" />
            <ul className="flex gap-3">
              <li>
                <Link name={"Home"} />
              </li>
              <li>
                <Link name={"About"} />
              </li>
              <li>
                <Link name={"Services"} />
              </li>
              <li>
                <Link name={"Portfolio"} />
              </li>
              <li>
                <Link name={"Contact"} />
              </li>
            </ul>
          </nav>
          <div className="header-text mt-[20%] text-3xl">
            <p>IT Student</p>
            <h1 className="mt-5 text-6xl">
              Hi, I am <span className="text-[#65B741]">Asma</span>
              <br />
              Batoutiva
            </h1>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="row">
            <img src="/images/user.png" className="" />
            <div className="about-col-1"></div>
            <div className="about-col-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

// eslint-disable-next-line react/prop-types
function Link({ name, link = "#" }) {
  return (
    <a className="navbar text-[18px]" href={link}>
      {name}
    </a>
  );
}
