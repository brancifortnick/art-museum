import { Switch, Route } from "react-router-dom";
import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView/GVindex";

//<Route path="/galleries/:galleryId">

const App = () => {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <Route path="/galleries/:galleryId">
        <GalleryView = galleries={harvardArt.records} />
      </Route>
      {/*<main></main>*/}
    </div>
  );
};

export default App;
