import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import HomePage from "./routes/Home";
import LoginPage from "./routes/Login";
import RegisterPage from "./routes/Register";
import ProductsPage from "./routes/Products";
import ProductDetailsPage from "./routes/ProductDetails";
import { useAuth } from "./hooks/useAuth";
import MainLayout from "./layouts/MainLayout";
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
  const { user, loading } = useAuth();
  const LoginNavigation = () => {
    return <Navigate to="/login" replace />;
  };

  if (loading) {
    return null; // albo <div>Ładowanie...</div>
  }

  return (
    // <div style={{ display: "flex", flexDirection: "column" }}>
    //   Header user={mockUser} />
    //   <ProductList />
    //   <LoginForm />
    //   <RegisterForm />
    //   <ProductForm />
    // </div>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/products"
          element={user ? <ProductsPage /> : <LoginNavigation />}
        />
        <Route
          path="/products/:id"
          element={user ? <ProductDetailsPage /> : <LoginNavigation />}
        />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
