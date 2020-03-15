import React, { Component } from 'react';

class Header extends Component {
  header = {
    fontSize:"2rem",
    fontWeight:"bold",
    height: "100%"
  }
  h1 = {
    display: "inline-block",
    padding: "0px 5px 0px 5px",
    fontSize:"3.2rem",
    fontWeight:"bold",
    color: "#ff8c00",
    borderRadius: "13px",
    background: "#ffe100",
    boxShadow: "5px 5px 5px #e3c800,-4px -4px 5px #fffa00"
    }
  render() {
    return (
      <header style={this.header}>
        <h1 style={this.h1}>{this.props.title}</h1>
      </header>
    );
  }
}

export default Header;