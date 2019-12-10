import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from '../store';
import {Icon, Layout, Menu} from "antd";
import MapVisualizer from "./dashboard/MapVisualizer";
import LocationSearch from "./dashboard/LocationSearch";
import TimelineVisualizer from "./dashboard/TimelineVisualizer";

const {Content, Sider} = Layout;

const {Footer} = Layout;


class App extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        this.setState({collapsed});
    };

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Layout
                        style={{
                            height: "-webkit-fill-available"
                        }}
                    >
                        <Fragment>
                            <Layout>
                                <Layout>
                                    <Sider
                                        collapsible
                                        collapsed={this.state.collapsed}
                                        onCollapse={this.onCollapse}
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
                                                <Icon type="fire"/>
                                                <span>Heatmap</span>
                                                <Link to="/"/>
                                            </Menu.Item>
                                            <Menu.Item key="2">
                                                <Icon type="line-chart"/>
                                                <span>Startups</span>
                                                <Link to="/timeline/"/>
                                            </Menu.Item>
                                            <Menu.Item key="3">
                                                <Icon type="search"/>
                                                <span>Investors</span>
                                                <Link to="/location/"/>
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
                                            <Route path="/" exact component={MapVisualizer}/>
                                            <Route path="/location" component={LocationSearch}/>
                                            <Route path="/timeline" component={TimelineVisualizer}/>
                                        </Content>
                                    </Layout>
                                </Layout>
                            </Layout>
                        </Fragment>
                    </Layout>
                    <Footer style={{textAlign: 'center'}}>©2019 Brendan Owens</Footer>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));