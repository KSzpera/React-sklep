import { Link } from "react-router-dom"

const ProductCard = ({ product, onClick }) => {
  return (
    <Link to={`/products/${product.id}`} className="flex flex-col items-center cursor-pointer">
      <p className="text-xl">{product.title}</p>
      <img src={product.image} width="300"></img> 
      <p>{product.price.toFixed(2)} zł</p>
    </Link>
  );
};

/* Tailwind - najlepiej do pojedynczych elementów */

export default ProductCard;