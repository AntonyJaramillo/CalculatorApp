import "./styles/Boton.css";
export const Boton = (props) => {
  const esOperador = (valor) => {
    return isNaN(valor) && valor != "." && valor != "=" && valor != "e";
  };
  return (
    <div
      className={`boton-container ${
        esOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </div>
  );
};
