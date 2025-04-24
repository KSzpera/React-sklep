import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState } from "react";

const yupSchema = yup.object().shape({
  username: yup.string().required("Pole username jest wymagane"),
  password: yup.string().required("Pole hasło jest wymagane"),
});

export default function LoginForm() {
  const [apiError, setApiError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmititng },
    reset,
  } = useForm({
    resolver: yupResolver(yupSchema),
  });

  const onSubmit = async (data) => {
    console.log("Dane formularza:", data);
    setApiError(null);
    setSuccess(false);
    setIsFormSubmitting(true);
    // Tutaj dodamy później logikę logowania
    try {
      const response = await axios.post(
        "https://fakestoreapi.com/auth/login",
        data
      );
      console.log(response);
      if (response.data) {
        setSuccess(true);
        reset();
      }
      setIsFormSubmitting(false);
    } catch (e) {
      if (e.status === 401) {
        setApiError(
          "Dane logowania są niepoprawne lub użytkownik nie istnieje"
        );
      } else {
        setApiError("Wystąpił nieznany błąd");
      }
      setIsFormSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="speca-y-4 mt-10">
      <h1>Logowanie</h1>
      {apiError && <span>{apiError}</span>}
      {success && <span>Sukces</span>}
      <div className="flex flex-col">
        <label>Username</label>
        <input
          autoFocus
          {...register("username", { required: "Username jest wymagany" })}
          className={errors.username ? "border-red-500" : "border-gray-500"}
        />
        {errors.username && (
          <span className="text-red-500">{errors.username.message}</span>
        )}
      </div>
      <div className="flex flex-col">
        <label>Hasło</label>
        <input
          type="password"
          {...register("password", { required: "Hasło jest wymagane" })}
          className={errors.password ? "border-red-500" : "border-gray-500"}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </div>
      <button
        type="submit"
        className="btn-primary"
        disabled={isFormSubmitting || isFormSubmitting}
      >
        Zaloguj się
      </button>
    </form>
  );
}
