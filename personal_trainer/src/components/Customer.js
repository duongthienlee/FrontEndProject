import React, {Component} from 'react';
import ReactTable from 'react-table'
import "react-table/react-table.css";
import Training from './Training.js'


class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {customer: [], training: []};


    }


    componentDidMount() {
        this.loadCustomers();

    }

    getTraining = (value) => {
    console.log(value)
        fetch(value)
            .then(response => response.json())
            .then(responseData => {
                this.setState({training: responseData.content})
            })


    }


// Load the customer from API
    loadCustomers = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
            .then(response => response.json())
            .then(responseData => {
                this.setState({customer: responseData.content})
            })

    }



    render() {


        return (
            <div>
                <ReactTable
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
                            Header: "Trainings",
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
                                    Header: "Email",
                                    accessor: "email",
                                }]
                        },
                        {
                            Header: 'Trainings',
                            columns: [
                                {
                                    Header: "Training",
                                    accessor: "links[2].href",
                                    Cell: ({value}) => (
                                       <Training getTraining={this.getTraining(value)}/>)

                                }

                            ]
                        }]}

                    filterable
                    defaultPageSize={10}
                    className="-striped -highlight"

                />
            </div>
        );
    }
}


export default Customer;