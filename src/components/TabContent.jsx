const skills = [
  {
    title: "UI/UX",
    description: "Designing Web/App interfaces",
  },
  {
    title: "Web Development",
    description: "Web app Development",
  },
  {
    title: "App Development",
    description: "Building Android/iOS apps",
  },
];
const experience = [
  {
    title: "2023 - Current",
    description: "UI/UX Design Training at ET Institute",
  },
  {
    title: "2022 - 2023",
    description: "Team lead at StartApp LLC.",
  },
  {
    title: "2021 - 2022",
    description: "UI/UX Design Executive at Coin Digital Ltd.",
  },
];
const education = [
  {
    title: "2024",
    description: "License At Sidi Ammar Annaba",
  },
  {
    title: "2023",
    description: "Ui/UX Design Training at ET Institute",
  },
  {
    title: "2021",
    description: "BAC At Zighoud Youcef Annaba.",
  },
];
const content = {
  Skills: skills,
  Experience: experience,
  Education: education,
};

// eslint-disable-next-line react/prop-types
export default function TabContent({ activeTab }) {
  return (
    <div className="tab-contents">
      {content[activeTab].map((item, index) => (
        <div key={index} className="mb-4">
          <p className="text-[18px] font-bold text-[#65B741]">{item.title}</p>
          <p className="text-[20px]">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
