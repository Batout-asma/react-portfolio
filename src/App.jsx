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
      {/* -- -------------- about -------------- -- */}
      <div className="about py-20 text-[#ababab]">
        <div className="container pl-[150px]">
          <div className="row flex flex-wrap justify-between">
            <div className="about-col-1 basis-[35%]">
              <img src="/images/user.png" className="w-full rounded-2xl" />
            </div>
            <div className="about-col-2 basis-[60%]">
              <h1 className="sub-title  mb-5 text-6xl font-semibold text-[#fff]">
                About Me
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                lobortis consequat mauris non fringilla. Aenean iaculis augue id
                tellus varius, et mattis nulla facilisis. Aliquam erat volutpat.
                Vivamus mi ex, placerat sed blandit vitae, ornare sed elit.
                Curabitur sit amet venenatis sem.
              </p>
              <div className="tab-titles mb-10 mt-5 flex">
                <p className="tab-links">Skills</p>
                <p className="tab-links">Experience</p>
                <p className="tab-links">Education</p>
              </div>
            </div>
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
