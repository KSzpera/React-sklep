import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/product/ProductList";
import LoginForm from "./components/forms/LoginForm";
import ReisterForm from "./components/forms/RegisterForm";

const mockUser = {
  name: "John Doe",
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* Header user={mockUser} />
      <ProductList/> */
      /* <LoginForm /> */}
      <ReisterForm />
    </div>
  )
}

export default App;
