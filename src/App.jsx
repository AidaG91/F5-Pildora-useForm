import BasicForm from "./components/BasicForm";
import ComplexForm from "./components/ComplexForm";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>React Hook Form</h1>

      <div className="grid-formularios">
        <BasicForm />
        <ComplexForm />
      </div>
    </div>
  );
}

export default App;
