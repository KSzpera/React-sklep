import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/product/ProductList";

const mockUser = {
  name: "John Doe",
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header user={mockUser} />
      <ProductList />
    </>
  );
}

export default App;
