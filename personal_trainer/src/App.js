import React, {Component} from 'react';
import background from "./images/background.jpeg"
import background1 from "./images/background1.jpeg"
import background2 from "./images/background2.jpg"
import background3 from "./images/background3.jpeg"
import './App.css';
import Home from "./components/Home";
import Customer from "./components/Customer"
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={background} alt="First slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={background1} alt="Second slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={background2} alt="Third slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={background3} alt="Fourth slide"/>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                           data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                           data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </header>

                <BrowserRouter>
                    <div>
                        <Link to="/">Frontpage</Link> {' '}
                        <Link to="/home">Home</Link> {' '}
                        <Link to="/customers">Customer</Link> {' '}

                        <Switch>
                            <Route exact path="/" render={() => <h1>This is frontpage</h1>}/>
                            <Route path="/home" component={Home}/>
                            <Route path="/customers" component={Customer}/>

                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
