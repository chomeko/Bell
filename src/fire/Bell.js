import React, { Component } from 'react';
import { connect } from "react-redux";
import firebase from "firebase";
import "firebase/storage";

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
    this.state = {
      dbvalue: 0
    }
    this.doAction = this.doAction.bind(this);
  }

  doAction() {
    //クリックaction
    if (this.props.push === false) {
      this.props.dispatch({ type: 'INCREMENT' });
    } else {
      this.props.dispatch({ type: 'DECREMENT' });
    }
    //dbから取得
    let db = firebase.database();
    let ref = db.ref('count/');
    let self = this;
    ref.orderByKey()
      .equalTo("value")
      .on("value", (snapshot) => {
        let data = snapshot.val();
        self.setState({
          dbvalue: data.value
        });
      });
    //dbに追加
    ref.set({ value: this.state.dbvalue + this.props.count });
  }

  render() {
    return (
      <div>
        <h2>{this.state.dbvalue}人目の呼び出し</h2>
        <p>{this.props.message}</p>
        <button style={this.style}
          onClick={this.doAction}>
          ベル
        </button>
      </div>
    );
  }
}


export default connect((state) => state)(Bell);