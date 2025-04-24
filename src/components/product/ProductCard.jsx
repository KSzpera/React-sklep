const ProductCard = ({ product, onClick }) => {
  return (
    <div onClick={onClick} className="flex flex-col items-center cursor-pointer">
      <p className="text-xl">{product.title}</p>
      <img src={product.image} width="300"></img> 
      <p>{product.price.toFixed(2)} zł</p>
    </div>
  );
};

/* Tailwind - najlepiej do pojedynczych elementów */

export default ProductCard;