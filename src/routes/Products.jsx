import ProductList from "../components/product/ProductList";
import { useLocation } from "react-router-dom";

const ProductsPage = () => {
  const location = useLocation();
  const fromLogin = location?.state?.fromLogin;
  return (
    <>
      {fromLogin && <span className="text-green">Logowanie się powiodło</span>}
      <ProductList />;
    </>
  );
};

export default ProductsPage;
