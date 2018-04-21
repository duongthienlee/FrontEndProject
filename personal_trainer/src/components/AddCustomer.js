import React, {Component} from 'react';
import SkyLight from 'react-skylight';

class Template extends Component {
    constructor(props) {
        super(props);
        this.state = {firstname: '', lastname: '', streetaddress: '', postcode: '', city: '', email: '', phone: ''}
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    handleSubmit = (event) => {
        event.preventDefault();

        const newCustomer = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            streetaddress: this.state.streetaddress,
            postcode: this.state.postcode,
            city: this.state.city,
            email: this.state.email,
            phone: this.state.phone
        }
        this.props.addCustomer(newCustomer)
        this.simpleDialog.hide()
    }

    render() {
        return (
            <div>
                <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title="Add Car">
                    <form>
                        <div className="form-group">

                            <input placeholder="First Name" className="form-control" type="text" name="firstname"
                                   onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">

                            <input placeholder="Last Name" className="form-control" type="text" name="lastname"
                                   onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">

                            <input placeholder="Street Address" className="form-control" type="text" name="streetaddress"
                                   onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">

                            <input placeholder="Postcode" className="form-control" type="number" name="postcode"
                                   onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">

                            <input placeholder="City" className="form-control" type="text" name="city"
                                   onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">

                            <input placeholder="Email" className="form-control" type="email" name="email"
                                   onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">

                            <input placeholder="Phone" className="form-control" type="number" name="phone"
                                   onChange={this.handleChange}/>
                        </div>
                        <button className="btn btn-primary" onClick={this.handleSubmit}>Save</button>
                    </form>
                </SkyLight>
                <button className="btn btn-primary" style={{margin: 10}} onClick={() => this.simpleDialog.show()}>Add
                    customer
                </button>
            </div>
        );
    }
}


export default Template;