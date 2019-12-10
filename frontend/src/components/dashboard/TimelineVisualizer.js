import React from 'react';
import {Button, Drawer, Icon, Row, Table} from 'antd';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getCompanies} from "../../actions/companies";
import {getInvestments} from "../../actions/investments";
import {getInvestors} from "../../actions/investors";


export class TimelineVisualizer extends React.Component {
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
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.category.localeCompare(b.category),
        },
        {
            title: 'Funding Total',
            dataIndex: 'funding_total',
            key: 'funding_total',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.funding_total - b.funding_total,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.status.localeCompare(b.status),
        },
        {
            title: 'State',
            dataIndex: 'us_state',
            key: 'us_state',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.us_state.localeCompare(b.us_state),
            filters: [
                {text: 'AL', value: 'AL'},
                {text: 'AK', value: 'AK'},
                {text: 'AZ', value: 'AZ'},
                {text: 'AR', value: 'AR'},
                {text: 'CA', value: 'CA'},
                {text: 'CO', value: 'CO'},
                {text: 'CT', value: 'CT'},
                {text: 'DE', value: 'DE'},
                {text: 'FL', value: 'FL'},
                {text: 'GA', value: 'GA'},
                {text: 'HI', value: 'HI'},
                {text: 'ID', value: 'ID'},
                {text: 'IL', value: 'IL'},
                {text: 'IN', value: 'IN'},
                {text: 'IA', value: 'IA'},
                {text: 'KS', value: 'KS'},
                {text: 'KY', value: 'KY'},
                {text: 'LA', value: 'LA'},
                {text: 'ME', value: 'ME'},
                {text: 'MD', value: 'MD'},
                {text: 'MA', value: 'MA'},
                {text: 'MI', value: 'MI'},
                {text: 'MN', value: 'MN'},
                {text: 'MS', value: 'MS'},
                {text: 'MO', value: 'MO'},
                {text: 'MT', value: 'MT'},
                {text: 'NE', value: 'NE'},
                {text: 'NV', value: 'NV'},
                {text: 'NH', value: 'NH'},
                {text: 'NJ', value: 'NJ'},
                {text: 'NM', value: 'NM'},
                {text: 'NY', value: 'NY'},
                {text: 'NC', value: 'NC'},
                {text: 'ND', value: 'ND'},
                {text: 'OH', value: 'OH'},
                {text: 'OK', value: 'OK'},
                {text: 'OR', value: 'OR'},
                {text: 'PA', value: 'PA'},
                {text: 'RI', value: 'RI'},
                {text: 'SC', value: 'SC'},
                {text: 'SD', value: 'SD'},
                {text: 'TN', value: 'TN'},
                {text: 'TX', value: 'TX'},
                {text: 'UT', value: 'UT'},
                {text: 'VT', value: 'VT'},
                {text: 'VA', value: 'VA'},
                {text: 'WA', value: 'WA'},
                {text: 'WV', value: 'WV'},
                {text: 'WI', value: 'WI'},
                {text: 'WY', value: 'WY'},
            ],
            onFilter: (value, record) => record.us_state.indexOf(value) === 0,
        },
        {
            title: 'City',
            dataIndex: 'us_city',
            key: 'us_city',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.us_city.localeCompare(b.us_city),
        },
        {
            title: 'Founded Year',
            dataIndex: 'founded_at',
            key: 'founded_at',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.founded_at - b.founded_at,
        },
    ];


    render() {
        return (
            <div>
                <Row
                    style={{paddingBottom: '2rem'}}
                >
                    <Table columns={this.columns} dataSource={this.props.companies}/>
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

export default connect(mapStateToProps, {getCompanies, getInvestments, getInvestors})(TimelineVisualizer);
