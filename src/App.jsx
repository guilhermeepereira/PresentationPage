import "./index.css";
import ProfilePic from "./assets/profile-pic.png";
import Texts from "./components/texts";
import Medias from "./components/medias";

function App() {
  return (
    <div className="flex-col flex gap-10">
      <div className="flex items-center gap-20">
        <img className="h-96" src={ProfilePic} />
        <Texts />
      </div>
      <div className="flex justify-center">
        <Medias />
      </div>
    </div>
  );
}

export default App;
