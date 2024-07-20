import WorkList from "../components/WorkList";

export default function Portfolio() {
  return (
    <div id="Portfolio" className="portfolio py-[50px]">
      <div className=" container">
        <h1 className="sub-title mb-5 text-6xl font-semibold text-[#fff]">
          My Work
        </h1>
        <WorkList />
        <a
          href="#"
          className="btn mx-auto my-[50px] block w-fit rounded-md border-[2px] border-solid border-[#65B741] px-[50px] py-[14px] text-lg"
        >
          See more
        </a>
      </div>
    </div>
  );
}
