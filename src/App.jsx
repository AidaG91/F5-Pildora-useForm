import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  // Inicializamos useForm y extraemos las herramientas que necesitamos
  const {
    register, // Conecta inputs al formulario
    handleSubmit, // Gestiona el envío y validación
    formState: { errors }, // Contiene los errores de validación
  } = useForm();

  // Función que se ejecuta cuando el formulario es válido
  const onSubmit = (data) => {
    console.log("Datos enviados:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-labelledby="contact-title"
    >
      <h1 id="contact-title">Formulario de contacto</h1>

      {/* CAMPO: Nombre */}
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          type="text"
          // register conecta el input y añade reglas de validación
          {...register("name", {
            required: "El nombre es obligatorio",
            minLength: {
              value: 2,
              message: "Debe tener al menos 2 caracteres",
            },
          })}
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
        />

        {/* Mensaje de error accesible */}
        {errors.name && (
          <p id="name-error" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* CAMPO: Email */}
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "El email es obligatorio",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Introduce un email válido",
            },
          })}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
        />

        {errors.email && (
          <p id="email-error" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* CAMPO: Motivo de contacto (select) */}
      <div>
        <label htmlFor="reason">Motivo de contacto</label>
        <select
          id="reason"
          {...register("reason", {
            required: "Selecciona un motivo",
          })}
          aria-invalid={errors.reason ? "true" : "false"}
          aria-describedby={errors.reason ? "reason-error" : undefined}
        >
          <option value="">Selecciona una opción…</option>
          <option value="info">Solicitar información</option>
          <option value="support">Soporte técnico</option>
          <option value="feedback">Enviar feedback</option>
          <option value="other">Otro</option>
        </select>

        {errors.reason && (
          <p id="reason-error" role="alert">
            {errors.reason.message}
          </p>
        )}
      </div>

      {/* CAMPO: Mensaje */}
      <div>
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          rows="4"
          {...register("message", {
            required: "El mensaje es obligatorio",
            minLength: {
              value: 10,
              message: "Debe tener al menos 10 caracteres",
            },
          })}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
        />

        {errors.message && (
          <p id="message-error" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* BOTÓN */}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
