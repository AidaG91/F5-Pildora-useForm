import { useForm } from "react-hook-form";

export default function ComplexForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log("Datos Complejo:", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="form-box complex">
      <h2>Formulario Avanzado (Ejemplo Extra)</h2>

      {/* NOMBRE */}
      <div>
        <label htmlFor="comp-name">Nombre</label>
        <input
          id="comp-name"
          type="text"
          {...register("name", {
            required: "El nombre es obligatorio",
            minLength: { value: 2, message: "Mínimo 2 caracteres" },
          })}
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "comp-name-error" : null}
        />
        {errors.name && <p id="comp-name-error" role="alert" className="error-msg">{errors.name.message}</p>}
      </div>

      {/* EMAIL */}
      <div>
        <label htmlFor="comp-email">Email</label>
        <input
          id="comp-email"
          type="email"
          {...register("email", {
            required: "El email es obligatorio",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Introduce un email válido",
            },
          })}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "comp-email-error" : null}
        />
        {errors.email && <p id="comp-email-error" role="alert" className="error-msg">{errors.email.message}</p>}
      </div>

      {/* SELECT: MOTIVO */}
      <div>
        <label htmlFor="comp-reason">Motivo de contacto</label>
        <select
          id="comp-reason"
          {...register("reason", { required: "Selecciona un motivo" })}
          aria-invalid={errors.reason ? "true" : "false"}
          aria-describedby={errors.reason ? "comp-reason-error" : null}
        >
          <option value="">Selecciona una opción…</option>
          <option value="info">Solicitar información</option>
          <option value="support">Soporte técnico</option>
        </select>
        {errors.reason && <p id="comp-reason-error" role="alert" className="error-msg">{errors.reason.message}</p>}
      </div>

      {/* TEXTAREA: MENSAJE */}
      <div>
        <label htmlFor="comp-message">Mensaje</label>
        <textarea
          id="comp-message"
          rows="4"
          {...register("message", {
            required: "El mensaje es obligatorio",
            minLength: { value: 10, message: "Mínimo 10 caracteres" },
          })}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "comp-message-error" : null}
        />
        {errors.message && <p id="comp-message-error" role="alert" className="error-msg">{errors.message.message}</p>}
      </div>

      <button type="submit">Enviar Avanzado</button>
    </form>
  );
}