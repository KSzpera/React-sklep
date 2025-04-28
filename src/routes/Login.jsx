import LoginForm from "../components/forms/LoginForm";
import { Link, useLocation } from "react-router-dom";

const LoginPage = () => {
  const location = useLocation();
  console.log(location);
  const fromRegister = location?.state?.fromRegister;
  return (
    <>
      <LoginForm fromRegister={fromRegister} />
      <div>
        <p>Nie masz konta?</p>
        <Link to="/register">Zarejestruj się</Link>
      </div>
    </>
  );
};

export default LoginPage;
