import { useParams, Redirect } from "react-router-dom";

const GalleryView = ({ galleries }) => {
  const { galleryId } = useParams();

  const galleryArt = galleries.find(
    gallery => gallery.id === parseInt(galleryId)
  );
  console.log(galleries)
  console.log(galleryId);
  console.log(galleryArt);

  if (!galleryArt) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Hello from GalleryView</h1>
      <h2>{galleryArt.name}</h2>
      <h2>{galleryArt.description}</h2>
    </div>
  );
};

export default GalleryView;
