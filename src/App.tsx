import * as React from "react";
import "./App.css";
import Description from "./Description";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Description countBy={1} />
      </div>
    );
  }
}

export default App;
