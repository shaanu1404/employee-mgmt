import React from "react";
import EmployeeList from "../components/EmployeeList";
import Search from "../components/Search";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Search />
        <hr className="my-6 border-opacity-50" />
        <EmployeeList />
      </React.Fragment>
    );
  }
}

export default Home;
