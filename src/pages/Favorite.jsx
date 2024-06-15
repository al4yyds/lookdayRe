import FavoriteProducts from "../componentsJSX/FavoriteProducts";
import Recommand from "../componentsJSX/Recommand";
import Favorite2 from "../componentsJSX/Favorite2";
import "./Favorite.scss";

const Favorite = () => {
  return (
    <div className="favorite-page">
      <FavoriteProducts />
      <Favorite2 />
      <Recommand />
    </div>
  );
};

export default Favorite;
