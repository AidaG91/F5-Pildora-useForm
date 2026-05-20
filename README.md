# F5 Píldora — useForm (React Hook Form)

Este repositorio contiene el material de la píldora formativa sobre **React Hook Form** y su hook principal, **useForm**, presentada en el bootcamps de Factoría F5 con FemCoders.

El objetivo de esta sesión es aprender a gestionar formularios en React de forma eficiente, eliminando el código repetitivo (*boilerplate*) y optimizando el rendimiento sin abusar de estados manuales (`useState`).

---

## 🚀 Instalación y arranque rápido

> ⚠️ **Nota:** Asegúrate de tener instalado **Node.js** en tu equipo antes de empezar.

1. Clona el repositorio e instala las dependencias (si abres la terminal directamente en la carpeta del proyecto, no necesitas hacer `cd`):
```bash
git clone https://github.com/AidaG91/F5-Pildora-useForm.git

cd F5-Pildora-useForm
```

```bash
npm install
```
2. Instala la librería de React Hook Form (por si creas el proyecto desde cero):
```bash
npm install react-hook-form
```

3. Inicia el entorno de desarrollo local con Vite:
```bash
npm run dev
```

## 📂 Estructura del proyecto
Para facilitar el aprendizaje en los 15-30 minutos de la sesión, el código se ha dividido en dos componentes independientes dentro de la aplicación:

```
F5-Pildora-useForm/
│
├── src/
│   ├── components/
│   │   ├── BasicForm.jsx       <-- El código base que picamos paso a paso en el directo (fácil de entender).
│   │   └── ComplexForm.jsx     <-- Ejemplo avanzado listo para consultar (incluye selects, textareas y accesibilidad).
│   ├── App.css                 <-- Estilos de la app y clases de error dinámicas.
│   ├── App.jsx                 <-- Contenedor principal que renderiza ambos formularios en paralelo.
│   ├── index.css
│   └── main.jsx
└── README.md
```
---

## 🛠️ ¿Qué vas a encontrar en cada formulario?
### 1. Formulario Simple (BasicForm.jsx)
Es el que construimos desde cero en la demostración en vivo. Va directo al grano para entender el núcleo de la librería:

- Uso básico de `register` para enlazar inputs sin estados manuales.
- Intercepción del envío mediante `handleSubmit`.
- Validación declarativa básica (`required` en texto y `pattern` con expresiones regulares para emails).
- Estilos condicionales en CSS (`className`) para resaltar campos erróneos en rojo.

### 2. Formulario Complejo y Accesible (ComplexForm.jsx)
Un ejemplo "del mundo real" pensado para que lo explores a tu ritmo después de la píldora:
- **Escalabilidad**: Implementación de etiquetas `<select>` y `<textarea>` con validaciones de longitud (`minLength`).
- **Accesibilidad Web (WCAG 2.1 AA)**: Uso de estándares WAI-ARIA (`aria-invalid` y `aria-describedby`) vinculados dinámicamente al objeto `errors` de la librería para dar soporte completo a lectores de pantalla.

## 🧩 Tecnologías utilizadas
- React + Vite
- React Hook Form (`useForm`)
- HTML5 & CSS3 Estricto

---

## 🎤 Presentación
Aquí encontrarás el material de apoyo visual utilizado durante la píldora formativa:

👉 **Diapositivas de la presentación:** [Ver el PDF de la presentación](./public/Pildora_useForm.pdf)


## 🤝 Créditos
Píldora diseñada e impartida por Aïda G. 
**Factoría F5 — FemCoders** 💜

## 📚 Recursos recomendados
- [Documentación oficial de React Hook Form](https://react-hook-form.com/)
- [Guía de accesibilidad WCAG 2.1](https://www.w3.org/TR/WCAG21/)
- [React Docs — Hooks](https://react.dev/reference/react)