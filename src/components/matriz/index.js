import React from "react";
import { Form } from "react-bootstrap";

import "./index.css";

export default function Matriz(props) {
  const guardarDatos = async () => {
    let bandera = true;
    let cargoInfo = false;
    let falla = false;
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
        switch (j) {
          case 0:
            if (elemento > 0 && elemento <= 5) {
              matrix[i][j] = await elemento;
            } else {
              falla = true;
            }
            break;
          case 1:
            if (elemento > 0 && elemento <= 4) {
              matrix[i][j] = await elemento;
            } else {
              falla = true;
            }
            break;
          case 2:
            if (elemento > 0 && elemento <= 3) {
              matrix[i][j] = await elemento;
            } else {
              falla = true;
            }
            break;
          case 3:
            if (elemento > 0 && elemento <= 2) {
              matrix[i][j] = await elemento;
            } else {
              falla = true;
            }
            break;
          case 4:
            if (elemento > 0 && elemento <= 1) {
              matrix[i][j] = await elemento;
            } else {
              falla = true;
            }
            break;
          default:
        }
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

    if (bandera && cargoInfo && !falla) {
      if (matrix !== undefined) {
        props.setEstrategia(matrix);
        alert("Estrategia guardada.");
      }
    } else {
      alert("error en los datos en la matriz.");
    }
  };

  return (
    <div>
      <Form>
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
          onClick={() => {
            guardarDatos();
          }}
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
