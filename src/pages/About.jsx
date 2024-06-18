import { useState } from "react";
import TabContent from "../components/TabContent";

export default function About() {
  const [activeTab, setActiveTab] = useState("Skills");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="about py-[50px] text-[#ababab]">
      <div className="container pl-[150px]">
        <div className="row flex flex-wrap justify-between">
          <div className="about-col-1 basis-[35%]">
            <img src="/images/user.png" className="w-full rounded-2xl" />
          </div>
          <div className="about-col-2 basis-[60%]">
            <h1 className="sub-title mb-5 text-6xl font-semibold text-[#fff]">
              About Me
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              lobortis consequat mauris non fringilla. Aenean iaculis augue id
              tellus varius, et mattis nulla facilisis. Aliquam erat volutpat.
            </p>
            <div className="tab-titles mb-7 mt-5 flex">
              <button
                id="Skills"
                className={`tab-links ${activeTab === "Skills" ? "active-link" : ""}`}
                onClick={() => handleTabClick("Skills")}
              >
                Skills
              </button>
              <button
                id="Experience"
                className={`tab-links ${activeTab === "Experience" ? "active-link" : ""}`}
                onClick={() => handleTabClick("Experience")}
              >
                Experience
              </button>
              <button
                id="Education"
                className={`tab-links ${activeTab === "Education" ? "active-link" : ""}`}
                onClick={() => handleTabClick("Education")}
              >
                Education
              </button>
            </div>
            <TabContent activeTab={activeTab} />
          </div>
        </div>
      </div>
    </div>
  );
}
