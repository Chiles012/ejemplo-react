// Librerias
import { useState } from 'react';

// Componentes
import Button from './Button';

// Estilos
import './App.css';

function App() {

  /**
   * Estado
   * const [ valor, setValor ] = useState(valorInicial)
   */
  const [number, setNumber] = useState(0);
  let component = null
  let componentCase = null

  if (number%2 === 0) {
    component = <h1>Es par</h1>
  } else {
    component = <h1>Es impar</h1>
  }

  switch(number) {
    case 10:
      componentCase = <h1>Numero 100</h1>
      break
    case 20:
      componentCase = <h1>Numero 100</h1>
      break;
      default:
        componentCase = null
        break;
  }

  let array = [
    {
      id: 1,
      nombre: "Ricardo"
    },
    {
      id: 2,
      nombre: "Alexis"
    },
    {
      id: 3,
      nombre: "Luis"
    }
  ]

  return (
    <> { /* Fragment */ }
      <h1>
        {number}
      </h1>
      {component}
      {componentCase}
      {
        array.map((value, index) => (
          <div
            key={index}
          >
            {value.nombre}
          </div>
        ))
      }
      <Button
        text="Incrementar"
        event={() => setNumber(number + 1)}
      />
      <Button
        text="Decrementar"
        event={() => setNumber(number - 1)}
      />
      <Button
        text="Resetear"
        event={() => setNumber(0)}
      />
    </>
  );
}

export default App;
