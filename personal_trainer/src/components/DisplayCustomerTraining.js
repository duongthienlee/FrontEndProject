import React, {Component} from 'react';
import ReactTable from 'react-table'
import "react-table/react-table.css";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {confirmAlert} from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'
import AddTraining from "./AddTraining"; // Import css

class DisplayCustomerTraining extends Component {
    constructor(props) {
        super(props);
        this.state = {training: []};
    }


// fetch training
    componentDidMount() {
        this.fetchTraining();

    }

    fetchTraining = () => {
        fetch(this.props.idLink)
            .then(res => res.json())
            .then(responseData => {
                this.setState({training: responseData.content})
            })
        console.log(this.props.idLink)

    }
    addTraining = (newTraining) => {

        fetch('https://customerrest.herokuapp.com/api/trainings',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newTraining)
            })
            .then(respond => this.fetchTraining())
            .catch(error => console.error((error)))
    }

    deleteTraining = (value) => {
        console.log(value, "this is delete")
        confirmAlert({

            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => fetch(value, {method: 'DELETE'})
                        .then(res => {
                                this.fetchTraining()
                                toast.success("Success Notification !", {
                                        position: toast.POSITION.TOP_RIGHT
                                    }
                                )
                            }
                        ).catch(err => console.error(err))

                },
                {
                    label: 'No'
                }
            ]
        })


    }

    render() {
        return (
            <div style={{
                position: "relative",
                width: "70%",
                top: "-20px",
                left: "15%"
            }}>
                <ToastContainer autoClose={8000}/>
                <div className="row">
                    <AddTraining addTraining={this.addTraining}/>

                </div>
                <ReactTable
                    data={this.state.training}
                    columns={[
                        {
                            Header: "Trainings",
                            columns: [
                                {
                                    Header: "Date",
                                    accessor: "date"
                                },
                                {
                                    Header: "Duration",
                                    accessor: "duration"
                                },
                                {
                                    Header: "Activity",
                                    accessor: "activity"
                                },
                                {
                                    id: "button",
                                    accessor: "links[1].href",
                                    filterable: false,
                                    sortable: false,
                                    width: 100,
                                    Cell: ({value}) => (
                                        <button className="btn btn-warning" onClick={() => {
                                            this.deleteTraining(value)
                                        }}>Delete</button>)


                                }
                            ]
                        }

                    ]}
                    filterable
                    defaultPageSize={2}
                    className="-striped -highlight"
                />
            </div>
        );
    }
}


export default DisplayCustomerTraining;