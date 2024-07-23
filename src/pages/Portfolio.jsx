import WorkList from "../components/WorkList";

export default function Portfolio() {
  return (
    <div id="Portfolio" className="portfolio py-[50px]">
      <div className=" container">
        <h1 className="sub-title mb-5 text-6xl font-semibold text-[#fff]">
          My Work
        </h1>
        <WorkList />
        <a href="#" className="btn">
          See more
        </a>
      </div>
    </div>
  );
}
