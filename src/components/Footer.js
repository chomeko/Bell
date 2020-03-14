import React, { Component } from 'react';

class Footer extends Component {
  style = {
    fontSize:'1.2rem',
    margin: '5rem 0rem 1rem 0rem',
    position: 'fixed',
    bottom: "0",
    maxWidth: '1080px',
    width:"100%",
    hight:"100%"
    }
  render() {
    return (
      <footer style={this.style}>
        <div>{this.props.footer}</div>
      </footer>
    );
  }
}

export default Footer;