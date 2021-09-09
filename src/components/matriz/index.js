import React from "react";
import { Form } from "react-bootstrap";

import "./index.css";

export default function Matriz(props) {
  const guardarDatos = async () => {
    let bandera = true;
    let cargoInfo = false;
    let matrix = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1]
    ];
    for (let i = 0; i < props.estrategia.length; i++) {
      for (let j = 0; j < props.estrategia[i].length; j++) {
        let elemento = document.getElementById("elemento-" + i + "-" + j).value;
        if (elemento !== undefined) {
          matrix[i][j] = await elemento;
        }
        if (elemento === null || elemento === "" || elemento === 0) {
          bandera = await false;
        }
        if (i === props.estrategia.length - 1) {
          cargoInfo = await true;
        }
      }
    }
    if (bandera && cargoInfo) {
      if (matrix !== undefined) {
        props.setEstrategia(matrix);
        alert("Estrategia guardada.");
      }
    } else {
      alert("Faltan datos en la matriz.");
    }
  };

  const renderMatriz = (value) => {
    if (value) {
      return (
        <Matriz
          estrategia={props.estrategia}
          setEstrategia={props.setEstrategia}
        />
      );
    } else {
      return null;
    }
  };
  return (
    <div>
      <Form striped bordered hover>
        <thead>
          <tr>
            <th>Número </th>
            <th> 1</th>
            <th> 2</th>
            <th> 3</th>
            <th> 4</th>
            <th> 5</th>
          </tr>
        </thead>
        <tbody>
          {props.estrategia.map((columns, indexCol) => {
            return (
              <tr>
                <td>{indexCol}</td>
                {columns.map((element, indexRow) => {
                  return (
                    <td>
                      <input
                        id={"elemento-" + indexCol + "-" + indexRow}
                        style={{ width: 35 }}
                        type="number"
                        min="1"
                        max="5"
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <button
          onClick={() => guardarDatos()}
          type="button"
          id="btn-flex"
          className="btn btn-unique btn-sm"
        >
          guardar
        </button>
      </Form>
    </div>
  );
}
