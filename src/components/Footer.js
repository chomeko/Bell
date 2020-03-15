import React, { Component } from 'react';

class Footer extends Component {
  footer = {
    margin: 'auto',
    position: 'fixed',
    bottom: "1.0rem",
    maxWidth: '1080px',
    width:"100%",
    hight: "100%",
  }
  text = {
    letterSpacing: ".1rem",
    fontSize:'1.2rem',
    display: "inline-block",
    padding: "0px 10px 0px 10px",
    borderRadius: "13px",
    background: "#ffe100",
    boxShadow: "5px 5px 5px #e3c800,-4px -4px 5px #fffa00"
  }
  render() {
    return (
      <footer style={this.footer}>
        <div style={this.text}>{this.props.footer}</div>
      </footer>
    );
  }
}

export default Footer;