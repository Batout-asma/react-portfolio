import ServicesList from "../components/ServicesList";

export default function Services() {
  return (
    <div className="services py-[50px]">
      <div className=" container pl-[150px]">
        <h1 className="sub-title mb-5 text-6xl font-semibold text-[#fff]">
          My Services
        </h1>
        <ServicesList />
      </div>
    </div>
  );
}
