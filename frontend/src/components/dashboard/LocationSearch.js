import React from 'react';
import {Button, Drawer, Icon, Row, Table, Form, Input} from 'antd';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Bar} from 'react-chartjs-2';
import {getCompanies} from "../../actions/companies";
import {getInvestments} from "../../actions/investments";
import {getInvestors} from "../../actions/investors";


export class LocationSearch extends React.Component {
    static propTypes = {};

    componentDidMount() {
        this.props.getCompanies();
        this.props.getInvestors();
        this.props.getInvestments();
    };

    columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Total Invested',
            dataIndex: 'investments_sum',
            key: 'investments_sum',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.investments_sum - b.investments_sum,
        },
        {
            title: 'Investment Count',
            dataIndex: 'investments_count',
            key: 'investments_count',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.investments_count - b.investments_count,
        },
    ];


    render() {
        return (
            <div>
                <Row
                    style={{paddingBottom: '2rem'}}
                >
                    <Table columns={this.columns} dataSource={this.props.investors}/>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    companies: state.companies.companies,
    investments: state.investments.investments,
    investors: state.investors.investors,
});

export default connect(mapStateToProps, {getCompanies, getInvestments, getInvestors})(LocationSearch);
