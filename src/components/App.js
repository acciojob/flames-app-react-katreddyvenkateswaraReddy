import React, {Component, useState} from "react";
import '../styles/App.css';
import FlamesCalculator from "./FlamesCalculator";

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <FlamesCalculator />
            </div>
        )
    }
}


export default App;
