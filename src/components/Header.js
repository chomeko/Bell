import React, { Component } from 'react';

class Header extends Component {
  header = {
    fontSize:"2rem",
    fontWeight:"bold",
    height: "5rem"
  }
  h1 = {
    fontSize:"3.2rem",
    fontWeight:"bold",
    color:"#ff8c00",
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