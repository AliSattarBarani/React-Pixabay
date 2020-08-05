import React from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import ContextAPI from "./ContextAPI";
import ImageGrid from "./components/ImageGrid";
import About from "./components/About";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <ContextAPI>
        <TopBar />
        <Switch>
          <Route path="/about" component={About} />
          <Route exact path="/" component={ImageGrid} />
        </Switch>
      </ContextAPI>
    );
  }
}

export default App;
