import React, {Component} from "react";

import "./css/App.css";
import {BestModal} from "./modals-components/BestModal";
import {BadModal} from "./modals-components/BadModal";

class App extends Component {

    bestModal = React.createRef();
    badModal = React.createRef();

    onShowBest = () => {
        this.bestModal.current.show();
    }
    onShowBad = () => {
        this.badModal.current.show();
    }
    render() {
        return (
            <div className="App">
                <button className="btn show-portal" onClick={this.onShowBest}>
                    Show BestModal
                </button>
                <BestModal ref={this.bestModal}/>
                <h1>OMG</h1>
                <button className="btn show-portal" onClick={this.onShowBad}>
                    Show BadModal
                </button>
                <BadModal ref={this.badModal}/>
            </div>
        );
    }
}

export default App;