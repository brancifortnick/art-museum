import { NavLink, Redirect } from 'react-router-dom';
import "./GalleryNavigation.css";


const GalleryNavigation = ({ galleries }) => {
//  console.log(galleries);
  return (
    <nav>
      <h1>Galleries</h1>
       <NavLink to='/' exact>Home Page</NavLink>
       {galleries.map((gallery)=> {
        return (<NavLink key={gallery.id} to= {`/galleries/${gallery.id}`}>
           {gallery.name}
         </NavLink>);
       })};
    </nav>
  );
};

export default GalleryNavigation;
