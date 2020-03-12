import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bell from './fire/Bell';
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";


class App extends Component{
  render() {
    return (
      <div>
        <Header
          header="1週間チャレンジ"
          title="ベル"
        />
        <Bell />
        <Footer footer="copyright CHOMEKO."/>
      </div>
    );
  }
}

export default connect()(App);