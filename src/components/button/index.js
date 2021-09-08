import React from "react";
import Matriz from "/src/components/matriz/";

import "./index.css";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
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
        <span>{this.state.checked ? <Matriz /> : <div></div>}</span>
      </div>
    );
  }
}
