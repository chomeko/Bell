import React, { Component } from 'react';
//import style from '../static/Style';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

class Layout extends Component {
  render() {
    return (
      <div className='container'>
        <Helmet>
          <title>{this.props.title}</title>
          <meta charSet='uft-8' />
          <meta name='viewport'
            content='initial-scale=1.0, width=device-width' />
        </Helmet>
        <Header
          title={this.props.title}
        />
        {this.props.children}
        <Footer footer="copyright CHOMEKO."/>
      </div>
    );
  }
}

export default Layout;