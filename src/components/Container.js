import React, { Component, useState, useEffect } from "react";
import Table from "./Table";
import Nav from "./Nav";
import API from "../utils/API";

function Container() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    console.log("mounted");
    API.findEmployees()
      .then((results) => setEmployees(results.data.results))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    console.log("rendered");
  });
  console.log("anything");

  return (
    <div>
      <Nav />
      <Table results={employees} setEmployees={setEmployees} />
    </div>
  );
}

/* class Container2 extends Component {
  state = {
    employees: [],
  };
  componentDidMount() {
    API.findEmployees()
      .then((results) =>
        this.setState({
          employees: results.data.results,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Nav />
        <Table results={this.state.employees} />
      </div>
    );
  }
}
 */
export default Container;
