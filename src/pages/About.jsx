export default function About() {
  return (
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
            <div className="tab-titles mb-7 mt-5 flex">
              <p className="tab-links active-link">Skills</p>
              <p className="tab-links">Experience</p>
              <p className="tab-links">Education</p>
            </div>
            <div className="tab-contents active-tab" id="skills">
              <ul>
                <li>
                  <span>UI/UX</span>
                  <br />
                  Designing Web/App interfaces
                </li>
                <li>
                  <span>Web Development</span>
                  <br />
                  Web app Development
                </li>
                <li>
                  <span>App Development</span>
                  <br />
                  Building Android/iOS apps
                </li>
              </ul>
            </div>
            <div className="tab-contents active-tab" id="experience">
              <ul>
                <li>
                  <span>2023 - Current</span>
                  <br />
                  UI/UX Design Training at ET Institute
                </li>
                <li>
                  <span>2022 - 2023</span>
                  <br />
                  Team lead at StartApp LLC.
                </li>
                <li>
                  <span>2021 - 2022</span>
                  <br />
                  UI/UX Design Executive at Coin Digital Ltd.
                </li>
                <li>
                  <span>2020 - 2021</span>
                  <br />
                  Internship at ekart eCommerce.
                </li>
              </ul>
            </div>
            <div className="tab-contents active-tab" id="education">
              <ul>
                <li>
                  <span>2024</span>
                  <br />
                  License At Sidi Ammar Annaba
                </li>
                <li>
                  <span>2023</span>
                  <br />
                  Ui/UX Design Training at ET Institute
                </li>
                <li>
                  <span>2021</span>
                  <br />
                  BAC At Zighoud Youcef Annaba.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
