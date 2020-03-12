import React, { Component } from 'react';
import { connect } from "react-redux";

class Bell extends Component{
  style = {
    width: "23px",
    height: "30px",
    background: "#ff8c00",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    boxShadow: "0px 3px 5px #3E3E3E33",
    margin: "auto"
  }

  constructor(props) {
    super(props);
    this.doAction = this.doAction.bind(this);
  }

  doAction(e) {
    if (this.props.push === false) {
      this.props.dispatch({ type: 'INCREMENT' });
    } else {
      this.props.dispatch({ type: 'DECREMENT' });
    }
  }

  render() {
    return (
      <div>
        <h2>{this.props.counter}人目の呼び出し</h2>
        <p>{this.props.message}</p>
        <div style={this.style}
          onClick={this.doAction}>
          ベル
        </div>
      </div>
    );
  }
}


export default connect((state) => state)(Bell);