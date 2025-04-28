import RegisterForm from "../components/forms/RegisterForm";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <RegisterForm />
      <p>Masz już konto?</p>
      <Link to="/login">Zaloguj się</Link>
    </>
  );
};

export default RegisterPage;
