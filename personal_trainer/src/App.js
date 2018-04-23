import React, {Component} from 'react';

import './App.css';
import Calendar from "./components/Calendar";
import Customer from "./components/Customer"
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from "./components/Header"
import Navigator from "./components/Navigator"

class App extends Component {
    render() {
        return (
            <div className="App">

                <Header/>
                <BrowserRouter>
                    <div>
                        <Navigator/>
                        <Switch>
                            <Route  exact path="/" render={() => <h1>This is frontpage</h1>}/>
                            <Route path="/calendar" component={Calendar}/>
                            <Route path="/customers" component={Customer}/>
                        </Switch>
                    </div>
                </BrowserRouter>

            </div>
        );
    }
}

export default App;
