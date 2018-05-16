import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import NewsDetails from './newsdetials';  //引入两个组件


class MyRouter extends React.Component {
    render() {
        return <Router>
            <Scene key="root">
                <Scene key="news" component={NewsDetails} title="详情页"/>
            </Scene>
        </Router>
    }
}
