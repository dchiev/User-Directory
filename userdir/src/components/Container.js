import React, { Component } from "react";
import Table from "./Table";
import Nav from "./Nav";
import API from "../utils/API";

class Container extends Component {
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

export default Container;
