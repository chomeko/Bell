import React, { Component } from 'react';
import style from '../App.css';
import Header from './Header';
import Footer from './Footer';

class Layout extends Component {
  render() {
    return (
      <div>
        {style}
        <Header
          header={this.props.header}
          title={this.props.title}
        />
        {this.props.children}
        <Footer footer="copyright CHOMEKO."/>
      </div>
    );
  }
}

export default Layout;