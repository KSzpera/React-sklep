import { useParams, useNavigate } from "react-router-dom";
import ProductDetails from "../components/product/ProductDetails";
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

function ProductDetailsPage() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user);
    else navigate("/login");
  }, [user]);

  return (
    <>
      <ProductDetails id={id} />
    </>
  );
}

export default ProductDetailsPage;
