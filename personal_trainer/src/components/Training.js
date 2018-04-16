import React, {Component} from 'react';
import SkyLight from 'react-skylight';
import ReactTable from 'react-table'
import "react-table/react-table.css";

class Training extends Component {
    constructor(props) {
        super(props);
        this.state = {training: []};
    }

    componentDidMount() {

    }


    render() {
        return (
            <div>
                <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title="Trainings">
                    <ReactTable
                        data={this.state.customer}
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
                                        Header: "Date",
                                        accessor: "date"
                                    }
                                ]
                            }

                        ]}

                        filterable
                        defaultPageSize={10}
                        className="-striped -highlight"

                    />
                </SkyLight>
            </div>
        );
    }
}


export default Training;