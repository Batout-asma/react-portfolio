import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ServicesList() {
  const services = [
    {
      icon: ["fas", "code"],
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis consequat mauris non fringilla.",
      link: "#",
    },
    {
      icon: ["fas", "crop-simple"],

      title: "UI/UX Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis consequat mauris non fringilla.",
      link: "#",
    },
    {
      icon: ["fab", "app-store"],
      title: "App Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis consequat mauris non fringilla.",
      link: "#",
    },
  ];
  // eslint-disable-next-line react/prop-types
  function Service({ icon, title, description, link }) {
    return (
      <div className="rounded-xl bg-[#262626] p-10 text-[13px] font-light">
        <FontAwesomeIcon icon={icon} className="text-[40px]" />
        <h2>{title}</h2>
        <p>{description}</p>
        <a className="link" href={link}>
          Learn more
        </a>
      </div>
    );
  }
  return (
    <div className="services-list">
      {services.map((service, index) => (
        <Service
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
          link={service.link}
        />
      ))}
    </div>
  );
}
