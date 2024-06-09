import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="header h-screen w-full">
      <div className="px-[10%] py-[10px]">
        <Navbar />
        <div className="header-text mt-[20%] text-3xl">
          <p>IT Student</p>
          <h1 className="mt-5 text-6xl">
            Hi, I am <span className="text-[#65B741]">Asma</span>
            <br />
            Batoutiva
          </h1>
        </div>
      </div>
    </div>
  );
}
