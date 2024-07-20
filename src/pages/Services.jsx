import ServicesList from "../components/ServicesList";

export default function Services() {
  return (
    <div id="Services" className="services py-[50px]">
      <div className=" container">
        <h1 className="sub-title mb-5 text-6xl font-semibold text-[#fff]">
          My Services
        </h1>
        <ServicesList />
      </div>
    </div>
  );
}
