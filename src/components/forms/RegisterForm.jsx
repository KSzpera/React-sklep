import { useForm } from "react-hook-form";

export default function ReisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Dane formularza:", data);
  };

  const currentPassword = watch("password")

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="speca-y-4 mt-10">
      <h1>Rejestracja</h1>
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
        <label>Email</label>
        <input
          type="email"
          autoFocus
          {...register("email", { required: "Email jest wymagany" })}
          className={errors.email ? "border-red-500" : "border-gray-500"}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </div>

      <div className="flex flex-col">
        <label>Hasło</label>
        <input
          type="password"
          {...register("password", {
            required: "Hasło jest wymagane",
            minLength: {
              value: 12,
              message: "Hasło musi mieć co najmniej 12 znaków",
            },
          })}
          className={errors.password ? "border-red-500" : "border-gray-500"}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </div>

      <div className="flex flex-col">
        <label>Potwierdź hasło</label>
        <input
          type="password"
          {...register("passwordConfirmation", {
            required: "Potwierdzenie hasła jest wymagane",
            validate: (value) =>
              value === currentPassword || "Hasła nie są takie same",
          })}
          className={
            errors.passwordConfirmation ? "border-red-500" : "border-gray-500"
          }
        />
        {errors.passwordConfirmation && (
          <span className="text-red-500">
            {errors.passwordConfirmation.message}
          </span>
        )}
      </div>

      <button type="submit" className="btn-primary">
        Zarejestruj się
      </button>
    </form>
  );
}
