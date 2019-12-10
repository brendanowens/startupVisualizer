import React, {Fragment} from 'react';
import {Menu, Icon, Table, Tag, Divider} from 'antd';
import {connect} from 'react-redux';
import {Link, Switch} from 'react-router-dom';

import {Layout, Breadcrumb} from 'antd';
import {Route} from "react-router-dom";
import {MapVisualizer} from "./MapVisualizer";

const {Content, Sider} = Layout;

export class Vendors extends React.Component {
    static propTypes = {};

    componentDidMount() {
    };


    render() {
        return (
            <Layout>
                <Layout>
                    <Sider
                        width={200}
                    >
                        <Menu
                            theme="dark"
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%', borderRight: 0}}
                        >
                            <Menu.Item key="1">
                                <Icon type="pushpin"/>
                                <span>Map Visualizer</span>
                                <Link to="/map/"/>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="search"/>
                                <span>Location Search</span>
                                <Link to="/location/"/>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="line-chart"/>
                                <span>Timeline Visualizer</span>
                                <Link to="/timeline/"/>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Content
                            style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                            }}
                        >
                            <Route exact path={`${this.props.match.url}`} component={MapVisualizer}/>
                            <Switch>
                                <Route path={`${this.props.match.url}/full`} component={MapVisualizer}/>
                                <Route path={`${this.props.match.url}/add`} exact component={MapVisualizer}/>
                                <Route path={`${this.props.match.url}/list`} exact component={MapVisualizer}/>
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

const mapStateToProps = state => ({
    // vendors: state.vendors.vendors
});

export default connect(mapStateToProps, {})(Vendors);
