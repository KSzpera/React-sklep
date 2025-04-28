import useSWR from "swr";
import { fetcher } from "../../utils/fetch";

const ProductDetails = ({ id }) => {
  const {data, error, isLodaing} = useSWR(`https://fakestoreapi.com/products/${id}`, fetcher);
  if (isLodaing) return <span>Trwa pobieranie danych produktu</span>;
  if (error) return <span>Wystąpił błąd</span>
  return (
    <>
      <p>Szczegóły produktu:</p>
      <h2 className="text-2xl">{data?.title}</h2>
      <p>{data?.description}</p>
    </>
  );
};

export default ProductDetails;
