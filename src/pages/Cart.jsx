import GridPic from "../componentsJSX/GridPic";
import Introduction from "../componentsJSX/Introduction";
import ProInfo from "../componentsJSX/ProInfo";
import ProductSearchBar from "../componentsJSX/ProductSearchBar";

const Cart = () => {
  return (
    <div>
      <ProductSearchBar />
      <GridPic />
      <ProInfo />
      <Introduction />
    </div>
  );
};

export default Cart;
