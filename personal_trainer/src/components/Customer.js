import React, {Component} from 'react';
import ReactTable from 'react-table'
import "react-table/react-table.css";
import {ToastContainer, toast} from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import AddCustomer from './AddCustomer';

class Customer extends Component {
    constructor(props) {
        super(props);

        this.state = {customer: [], training: []};


    }


    componentDidMount() {
        this.loadCustomers();

    }

// fetch training
    fetchTraining = (value) => {
        fetch(value)
            .then(res => res.json())
            .then(responseData => {
                this.setState({training: responseData.content})
            })
        console.log(value)

    }


// Load the customer from API
    loadCustomers = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
            .then(response => response.json())
            .then(responseData => {
                this.setState({customer: responseData.content})
            })

    }

    // add customer
    addCustomer = (newCustomer) => {
        fetch('https://customerrest.herokuapp.com/api/customers',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newCustomer)
            })
            .then(respond => this.loadCustomers())
            .catch(error => console.error((error)))
    }
    deleteCustomer = (value) => {
        console.log(value, "this is delete")
        confirmAlert({

            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => fetch(value, {method: 'DELETE'})
                        .then(res => {
                                this.loadCustomers()
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
            <div className="container">
                <div className="row">
                    <AddCustomer addCustomer={this.addCustomer}/>

                </div>
                <ReactTable id="table_container"

                    data={this.state.customer}
                    columns={[
                        {
                            Header: "Name",
                            columns: [
                                {
                                    Header: "First Name",
                                    accessor: "firstname"
                                },
                                {
                                    Header: "Last Name",
                                    accessor: "lastname"
                                }
                            ]
                        },
                        {
                            Header: "Info",
                            columns: [
                                {
                                    Header: "Street Address",
                                    accessor: "streetaddress"
                                },
                                {
                                    Header: "Postcode",
                                    accessor: "postcode"
                                },
                                {
                                    Header: "City",
                                    accessor: "city"
                                },
                                {
                                    Header: "Email",
                                    accessor: "email",
                                },
                                {
                                    Header: "Phone",
                                    accessor: "phone",
                                },
                                {
                                    id: "button",
                                    accessor: "links[1].href",
                                    filterable: false,
                                    sortable: false,
                                    width: 100,
                                    Cell: ({value}) => (
                                        <button className="btn btn-warning" style={{margin: 10}} onClick={() => {
                                            this.deleteCustomer(value)
                                        }}>Delete</button>)


                                }

                                ]
                        }]}

                    getTdProps={(state, rowInfo, column, instance) => {
                        return {
                            onClick: (e, handleOriginal) => {
                                let idLink = rowInfo.original.links[2].href

                                console.log(idLink)

                                this.fetchTraining(idLink)

                            }
                        }
                    }}
                    filterable
                    defaultPageSize={10}
                    freezeWhenExpanded={true}


                    SubComponent={row => {
                        return (
                            <div style={{
                                position: "relative",
                                width: "50%",
                                height: "100%",
                                left: "25%"
                            }}>

                                <br/>
                                <br/>
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
                                                }
                                            ]
                                        }

                                    ]}
                                    defaultPageSize={3}
                                    showPagination={false}

                                />
                            </div>
                        );
                    }}
                />
                <ToastContainer autoClose={8000}/>
            </div>
        );
    }
}


export default Customer;