import React from "react";
import { Table, InputGroup, FormControl, Button } from "react-bootstrap";
import "./index.css";
export default class Matriz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      estrategia: null
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(checked) {
    this.setState({ checked });
  }
  render() {
    return (
      <div>
        <button
          type="button"
          id="btn-nquote"
          className="btn btn-success btn-sm"
          onClick={() => this.handleChange(false)}
        >
          Estrategia predeterminada
        </button>
        <button
          type="button"
          id="btn-flex"
          className="btn btn-unique btn-sm"
          onClick={() => this.handleChange(true)}
        >
          crear estrategia
        </button>
        <span>
          {this.state.checked ? (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Número aleatorio</th>
                  <th>Giro 1</th>
                  <th>Giro 2</th>
                  <th>Giro 3</th>
                  <th>Giro 4</th>
                  <th>Giro 5</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>{" "}
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>{" "}
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>{" "}
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>{" "}
                  <td>
                    <InputGroup className="mb-3">
                      <FormControl />
                    </InputGroup>
                  </td>
                </tr>
              </tbody>
              <button
                type="submit"
                id="btn-flex"
                className="btn btn-unique btn-sm"
                onClick={() => this}
              >
                guardar
              </button>
            </Table>
          ) : (
            <div></div>
          )}
        </span>
      </div>
    );
  }
}
