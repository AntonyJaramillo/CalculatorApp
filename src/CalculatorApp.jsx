import { useState } from "react";
import "./calculator.css";
import { Boton } from "./components/Boton";
import { Pantalla } from "./components/Pantalla";
import { evaluate } from "mathjs";
export const CalculatorApp = () => {
  const [input, setInput] = useState("");
  const agregarInput = (val) => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input));
    }else{
      alert("Ingrese valores para realizar los cálculos")
    }
    
  };
  const elminarCaracter = () => {
    setInput(input.slice(0, -1));
  };
  return (
    <>
      <div className="app-container">
        <div className="calculator-container">
          <Pantalla input={input} />
          <div className="fila">
            <Boton manejarClic={() => setInput("")}>C</Boton>
            <Boton manejarClic={elminarCaracter}>D</Boton>
            <Boton manejarClic={agregarInput}>%</Boton>
            <Boton manejarClic={agregarInput}>/</Boton>
          </div>
          <div className="fila">
            <Boton manejarClic={agregarInput}>7</Boton>
            <Boton manejarClic={agregarInput}>8</Boton>
            <Boton manejarClic={agregarInput}>9</Boton>
            <Boton manejarClic={agregarInput}>*</Boton>
          </div>
          <div className="fila">
            <Boton manejarClic={agregarInput}>4</Boton>
            <Boton manejarClic={agregarInput}>5</Boton>
            <Boton manejarClic={agregarInput}>6</Boton>
            <Boton manejarClic={agregarInput}>-</Boton>
          </div>
          <div className="fila">
            <Boton manejarClic={agregarInput}>1</Boton>
            <Boton manejarClic={agregarInput}>2</Boton>
            <Boton manejarClic={agregarInput}>3</Boton>
            <Boton manejarClic={agregarInput}>+</Boton>
          </div>
          <div className="fila">
            <Boton manejarClic={agregarInput}>e</Boton>
            <Boton manejarClic={agregarInput}>0</Boton>
            <Boton manejarClic={agregarInput}>.</Boton>
            <Boton manejarClic={calcularResultado}>=</Boton>
          </div>
        </div>
      </div>
    </>
  );
};
