const ProductDetails = ({ selectedProduct }) => {
  if (!selectedProduct) {
    return <p>Wybierz produkt, żeby wyświetlić szczegóły</p>;
  }
  return (
    <>
    <div>
      <p>Szczegóły produktu:</p>
      <h2 className="text-2xl">{selectedProduct.title}</h2>
      <p>{selectedProduct.description}</p>
      <p>Ocena: {selectedProduct.rating.rate} ({selectedProduct.rating.count})</p>
      </div>
    </>
  );
};

export default ProductDetails;
