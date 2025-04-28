import ProductList from "../components/product/ProductList";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";

const ProductsPage = () => {
  const location = useLocation();
  const fromLogin = location?.state?.fromLogin;
  const { user } = useAuth();
  const navigate = useNavigate();

   useEffect(() => {
      if (user);
      else navigate("/login")
    }, [user]);

  return (
    <>
      {fromLogin && <span className="text-green">Logowanie się powiodło</span>}
      <ProductList />;
    </>
  );
};

export default ProductsPage;
