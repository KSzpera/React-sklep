import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./routes/Home";
import LoginPage from "./routes/Login";
import RegisterPage from "./routes/Register";
import ProductsPage from "./routes/Products";
// import Header from "./components/Header";
// import ProductList from "./components/product/ProductList";
// import LoginForm from "./components/forms/LoginForm";
// import RegisterForm from "./components/forms/RegisterForm";
// import ProductForm from "./components/forms/ProductForm";

const mockUser = {
  name: "John Doe",
};

function App() {
  const [count, setCount] = useState(0);

  return (
    // <div style={{ display: "flex", flexDirection: "column" }}>
    //   Header user={mockUser} />
    //   <ProductList />
    //   <LoginForm />
    //   <RegisterForm />
    //   <ProductForm />
    // </div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/products" element={<ProductsPage />} />
    </Routes>
  );
}

export default App;
