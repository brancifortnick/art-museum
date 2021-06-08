
import { Switch, Route } from "react-router-dom";
import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";



const App = () => {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <main></main>
    </div>
   );
}

export default App;
