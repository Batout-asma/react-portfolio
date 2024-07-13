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
      title: "Music App",
      description:
        "The app connects you to the talented people around the world. Download it from app store.",
      link: "#",
    },
    {
      icon: ["fas", "arrow-up-right-from-square"],
      image: "/images/work-3.png",
      title: "Online Shopping App",
      description:
        "The app connects you to the talented people around the world. Download it from app store.",
      link: "#",
    },
  ];
  // eslint-disable-next-line react/prop-types
  function Work({ icon, imageUrl, title, description, link }) {
    return (
      <div className="work relative overflow-hidden rounded-xl">
        <img src={imageUrl} className="block w-full rounded-xl" />
        <div className="layer absolute bottom-0 flex h-0 w-full  flex-col items-center justify-center overflow-hidden rounded-xl px-10 text-center text-sm">
          <h3>{title}</h3>
          <p>{description}</p>
          <a
            href={link}
            className="mt-5 h-[60px] w-[60px] rounded-[50%] bg-[#fff] text-center text-lg leading-[60px] text-[#65B741]"
          >
            <FontAwesomeIcon icon={icon} className="" />
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
