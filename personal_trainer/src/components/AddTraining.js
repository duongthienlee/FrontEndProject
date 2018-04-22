import React, {Component} from 'react';
import SkyLight from 'react-skylight';

class AddTraining extends Component {
    constructor(props) {
        super(props);
        this.state = {date: '', duration: '', activity: '',customer:''}
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    handleSubmit = (event) => {
        event.preventDefault();

        const newTraining = {
            date: this.state.date,
            duration: this.state.duration,
            activity: this.state.activity,
            customer:this.state.customer
        }
        this.props.addTraining(newTraining)
        this.simpleDialog.hide()
    }

    render() {
        return (
            <div>
                <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title="Add Training">
                    <form>
                        <div className="form-group">

                            <input placeholder="Date" className="form-control" type="text" name="date"
                                   onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">

                            <input placeholder="Duration" className="form-control" type="text" name="duration"
                                   onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">

                            <input placeholder="Activity" className="form-control" type="text" name="activity"
                                   onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">

                            <input placeholder="Customer" className="form-control" type="url" name="customer"
                                   onChange={this.handleChange}/>
                        </div>

                        <button className="btn btn-primary" onClick={this.handleSubmit}>Add</button>
                    </form>
                </SkyLight>
                <button className="btn btn-primary" style={{margin: 10}} onClick={() => this.simpleDialog.show()}>Add
                    training
                </button>
            </div>
        );
    }
}


export default AddTraining;