import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function WorkList() {
  const Works = [
    {
      icon: ["fas", "arrow-up-right-from-square"],
      image: "/images/work-1.png",
      title: "Social Media App",
      description:
        "The app connects you to the talented people around the world. Download it from app store.",
      link: "#",
    },
    {
      icon: ["fas", "arrow-up-right-from-square"],
      image: "/images/work-2.png",
      title: "Social Media App",
      description:
        "The app connects you to the talented people around the world. Download it from app store.",
      link: "#",
    },
    {
      icon: ["fas", "arrow-up-right-from-square"],
      image: "/images/work-3.png",
      title: "Social Media App",
      description:
        "The app connects you to the talented people around the world. Download it from app store.",
      link: "#",
    },
  ];
  // eslint-disable-next-line react/prop-types
  function Work({ icon, imageUrl, title, description, link }) {
    return (
      <div className="work">
        <img src={imageUrl} />
        <div className="layer">
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={link}>
            <FontAwesomeIcon icon={icon} />
          </a>
        </div>
      </div>
    );
  }
  return (
    <div className="work-list">
      {Works.map((work, index) => (
        <Work
          key={index}
          icon={work.icon}
          imageUrl={work.image}
          title={work.title}
          description={work.description}
          link={work.link}
        />
      ))}
    </div>
  );
}
