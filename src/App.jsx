import "./index.css";
import ProfilePic from "./assets/image00003.png";
import Texts from "./components/texts";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <main className="flex-col flex gap-10 h-[85%]">
        <div className="flex px-[13%] items-center justify-center gap-40 h-screen">
          <img className="h-96" src={ProfilePic} />
          <Texts />
        </div>
      </main>
    </>
  );
}

export default App;
