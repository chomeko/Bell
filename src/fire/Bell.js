import React, { Component } from 'react';
import { connect } from "react-redux";
import firebase from "firebase";
import "firebase/storage";

class Bell extends Component{
  p = {
    fontSize:"2.0rem"
  }
  span = {
    fontSize: "3.6rem",
    fontWeight:"bold"
  }
  text = {
    fontSize: "5.0rem",
    fontWeight:"bold"
  }
  btn = {
    borderRadius: "14.8rem",
    background: "linear-gradient(145deg, #e6cb00, #fff100)",
    boxShadow:  "5px 5px 10px #c7b000,inset 5px 5px 10px #ffff00,inset -5px -5px 10px #c7b000",
    border: "none",
    width: "23rem",
    height: "23rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize:"2.0rem",
    margin: "auto",
    transition: "all 120ms ease-out 0s"
  }

  btnPush = {
    borderRadius: "14.8rem",
    background: "linear-gradient(145deg, #e6cb00, #fff100)",
    boxShadow: "inset 8px 5px 10px #d9bf00,inset -7px -5px 60px #ffff00",
    border: "none",
    width: "23rem",
    height: "23rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize:"2.0rem",
    margin: "auto",
    transition: "all 120ms ease-out 3s"
  }

  constructor(props) {
    super(props);
    this.state = {
      dbvalue: 0,
    }
    this.doAction = this.doAction.bind(this);
  }

  componentDidMount() {
    //dbから取得
    let db = firebase.database();
    let ref = db.ref('count');
    let self = this;
    ref.orderByKey()
      .equalTo("value")
      .on("value", (snapshot) => {
        let data = snapshot.val();
        console.log("data=", data);
        console.log("click=", this.props.click);
        self.setState({
          dbvalue: data.value
        });
      });
  }


  doAction() {
    //クリックaction
    if (this.props.push === false) {
      this.props.dispatch({ type: 'INCREMENT' });
    } else {
      this.props.dispatch({ type: 'DECREMENT' });
    }
    //dbに追加
    let db = firebase.database();
    let ref = db.ref('count');
    ref.set({ value: this.state.dbvalue + this.props.count });
  }

  render() {
    return (
      <section className="top">
        <p style={this.p}><span style={this.span}>{this.state.dbvalue}</span>人目の呼び出し</p>
        <p style={this.text}>{this.props.message}</p>
        { this.props.click ?
          <button style={this.btn}
            onClick={this.doAction}
            disabled={this.state.dbvalue === 0}
          >
            呼び出す
          </button>
          :
          <button style={this.btnPush}
            onClick={this.doAction}
            disabled={this.state.dbvalue === 0}
          >
            呼び出す
          </button>
        }
      </section>
    );
  }
}


export default connect((state) => state)(Bell);