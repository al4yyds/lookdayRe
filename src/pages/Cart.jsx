import GridPic from "../componentsJSX/GridPic";
import Introduction from "../componentsJSX/Introduction";
import ProInfo from "../componentsJSX/ProInfo";
import ProductSearchBar from "../componentsJSX/ProductSearchBar";
import Reviews from "../componentsJSX/Reviews";

const Cart = () => {
  return (
    <div>
      <ProductSearchBar />
      <ProInfo />
      <Introduction />
      <Reviews />
    </div>
  );
};

export default Cart;
