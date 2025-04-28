import { Link, NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our application</p>
      <Link to="/login">Logowanie</Link>
      <NavLink to="/register">Rejestracja</NavLink>
      <Link to="/products">Lista produktów</Link>
    </div>
  );
};

export default HomePage;