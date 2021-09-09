import React from "react";
import EmployeeList from "./components/EmployeeList";
import Header from './components/Header'
import Search from "./components/Search";
class App extends React.Component {

  render() {
    return (
      <div className="sm:w-3/4 md:w-1/2 mx-auto px-2 sm:p-0">
        <Header />
        <hr className="my-6 border-opacity-50" />
        <Search />
        <hr className="my-6 border-opacity-50" />
        <EmployeeList />
      </div>
    );
  }
}

export default App;
