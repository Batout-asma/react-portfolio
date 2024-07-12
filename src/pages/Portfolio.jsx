import WorkList from "../components/WorkList";

export default function Portfolio() {
  return (
    <div className="portfolio py-[50px]">
      <div className=" container pl-[150px]">
        <h1 className="sub-title mb-5 text-6xl font-semibold text-[#fff]">
          My Work
        </h1>
        <WorkList />
      </div>
    </div>
  );
}
