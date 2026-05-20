import { useForm } from "react-hook-form";

export default function BasicForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Datos registrados con éxito:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2>Basic Form</h2>

      <div>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "El nombre es obligatorio" })}
          className={errors.name ? "input-error" : ""}
        />
        {errors.name && (
          <p className="error-msg">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "El email es obligatorio",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Introduce un email válido",
            },
          })}
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && (
          <p className="error-msg">
            {errors.email.message}
          </p>
        )}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}
