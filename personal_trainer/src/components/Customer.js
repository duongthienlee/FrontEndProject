import React, {Component} from 'react';
import ReactTable from 'react-table'
import "react-table/react-table.css";


class Customer extends Component {
    constructor(props) {
        super(props);

        this.state = {customer: [], training: []};


    }


    componentDidMount() {
        this.loadCustomers();
        
    }


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
                                }]
                        }]}

                    getTdProps={(state, rowInfo, column, instance) => {
                        return {
                            onClick: (e, handleOriginal) => {
                                let idLink = rowInfo.original.links[2].href

                                console.log(idLink)

                                this.fetchTraining(idLink)
                                if (handleOriginal) {
                                    handleOriginal(

                                    )
                                }
                            }
                        }
                    }}
                    filterable
                    defaultPageSize={10}
                    freezeWhenExpanded={true}
                    onExpandedChange={undefined}
                    SubComponent={row => {
                        return (
                            <div style={{
                                width: "50%",
                                height: "100%",
                                left:"50%",
                                borderRadius: "2px"
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
                                    collapseOnDataChange={false}

                                />
                            </div>
                        );
                    }}
                />
            </div>
        );
    }
}


export default Customer;