import React, {Component} from 'react';
import background from "../images/background.jpeg"
import background1 from "../images/background1.jpeg"
import background2 from "../images/background2.jpg"
import background3 from "../images/background3.jpeg"
import Typing from 'react-typing-animation';

class Header extends Component {

    render() {
        return (
            <div>
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
                                <div className="carousel-caption d-none d-md-block">
                                    <Typing>
                                        <span>Welcome to customer database!</span>
                                    </Typing>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={background1} alt="Second slide"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <Typing>
                                        <span>Welcome to customer database!</span>
                                    </Typing>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={background2} alt="Third slide"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <Typing>
                                        <span>Welcome to customer database!</span>
                                    </Typing>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={background3} alt="Fourth slide"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <Typing>
                                        <span>Welcome to customer database!</span>
                                    </Typing>
                                </div>
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
            </div>
        );
    }
}


export default Header;