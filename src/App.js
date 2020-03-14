import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bell from './fire/Bell';
//import Header from "./components/Header";
//import Footer from "./components/Footer";
import Layout from "./components/Layout";
import "./App.css";


class App extends Component{
  render() {
    return (
      <Layout
        title="ベル">
        <Bell />
      </Layout>
    );
  }
}

export default connect()(App);