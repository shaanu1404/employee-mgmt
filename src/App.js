import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Home from "./pages/Home";
import AddEmployee from "./pages/AddEmployee";
class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
      <div className="sm:w-3/4 md:w-1/2 mx-auto px-2 sm:p-0">
        <Header />
        <hr className="my-6 border-opacity-50" />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/add">
            <AddEmployee />
          </Route>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
