import React, {Component} from 'react';
import Heros from "./containers/heros/Heros";
import FixedBackground from './components/fixed-background/FixedBackground';
import Header from "./components/header/Header";
import {MainView} from "./components/view/MainView";

class App extends Component {

    render() {
        return (
            <div className="App">
                <MainView>
                    <FixedBackground/>
                    <Header/>
                <Heros/>
                </MainView>
            </div>
        );
    }
}

export default App;
