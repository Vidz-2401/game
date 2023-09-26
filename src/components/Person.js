import React, { Component } from "react";
// import Man from "./Man";

class Person extends Component {
  constructor(props){
    super(props);
    this.props = props;
    this.state= {
        Name: "John",
        Age: "20",
    };
}
nameChangeHandler() {
    console.log(this.state);
    this.setState({Name:"dev" },() => {
        console.log(this.state);
    });
}
  render() {
    return (
      <div>
        <h3>
          <i>Name:john {this.state.Name} ,{this.state.Age} how are you?</i>
          <br></br>
          <button onClick={() => this.nameChangeHandler()} className="bg-red-500">Click Me</button>
        </h3>
        {/* <Man></Man> */}
      </div>
    );
  }
}

export default Person;
