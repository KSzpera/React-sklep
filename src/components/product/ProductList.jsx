import ProductCard from "./ProductCard";
import styles from "../../styles/ProductList.module.css";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../utils/fetch";
import ProductDetails from "./ProductDetails";

const ProductList = () => {
  const { data, error, isLoading } = useSWR(
    "https://fakestoreapi.com/products",
    fetcher
  );
  //   console.log(data, error, isLoading);
  if (isLoading) {
    return <p>Trwa ładowanie</p>;
  }

  if (error) {
    return;
    console.log("Błąd:", error);
    <p>Wystąpił błąd</p>;
  }

  return (
    <div className="flex flex-row space-between">
      <div className={styles.container}>
        {data.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>
    </div>
  );
};

// Inna metoda

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
// //   console.log(products);
//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((productsRes) => setProducts(productsRes));
//   }, []);

//   return (
//     <div className={styles.container}>
//       {products.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

export default ProductList;
