import "./index.css";
import ProfilePic from "./assets/image00003.png";
import Texts from "./components/texts";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <main className="h-[85%] px-8 w-screen flex flex-col justify-center">
        <div
          className="flex flex-col gap-5 items-center lg:flex-row xl:justify-center xl:gap-40"
          id="infos"
        >
          <img
            className="w-44 bg-transparent md:w-64 lg:w-[350px] xl:w-72"
            src={ProfilePic}
          />
          <Texts />
        </div>
      </main>
    </>
  );
}

export default App;
