import React, {Component} from 'react';

import './App.css';
import Home from "./components/Home";
import Customer from "./components/Customer"
import DisplayCustomerTraining from "./components/DisplayCustomerTraining"
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">

                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <BrowserRouter>
                    <div>
                        <Link to="/">Frontpage</Link> {' '}
                        <Link to="/home">Home</Link> {' '}
                        <Link to="/customers">Customer</Link> {' '}
                        <Link to="/customerTrainings">customerTrainings</Link> {' '}
                        <Switch>
                            <Route exact path="/" render={() => <h1>This is frontpage</h1>}/>
                            <Route path="/home" component={Home}/>
                            <Route path="/customers" component={Customer}/>
                            <Route path="/customerTrainings" component={DisplayCustomerTraining}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
