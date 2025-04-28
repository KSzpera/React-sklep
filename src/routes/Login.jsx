import LoginForm from "../components/forms/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <LoginForm />
      <div>
        <p>Nie masz konta?</p>
        <Link to="/register">Zarejestruj się</Link>
      </div>
    </>
  );
};

export default LoginPage;