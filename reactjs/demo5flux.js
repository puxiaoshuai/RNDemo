/**
 * desc：
 * author：
 * date：
 */
import React, {PropTypes} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import NewsDetails from "./newsdetials";
import Icon from "react-native-vector-icons/Ionicons"
import {Router,Scene} from 'react-native-router-flux'
import Home from '../reactjs/demo5/home'
import Mine from '../reactjs/demo5/mine'
export default class FluxRouter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index:{
                title:"首页",
                icon:"md-home"
            },
            mine:{
                title:"我的",
                icon:"md-contact"
            }
        }
    }

    static propTypes = {}

    /**
     * 初始化了状态之后，在第一次绘制 render() 之前
     * （能够使用setState()来改变属性 有且只有一次）
     */
    componentWillMount() {

    }

    /**
     * 这个函数开始，就可以和 JS 其他框架交互了，例如设置计时 setTimeout 或者 setInterval，
     * 或者发起网络请求。这个函数也是只被调用一次
     * （能够使用setState()来改变属性 有且只有一次）
     */
    componentDidMount() {

    }

    /**
     * 输入参数 nextProps 是即将被设置的属性，旧的属性还是可以通过 this.props 来获取。在这个回调函数里面，你可以根据属性的变化，
     * 通过调用 this.setState() 来更新你的组件状态，这里调用更新状态是安全的，并不会触发额外的 render()
     * （能够使用setState()来改变属性 多次调用）
     */
    componentWillReceiveProps() {

    }

    /**
     * 当组件接收到新的属性和状态改变的话，都会触发调用 shouldComponentUpdate(...)
     * （不能够使用setState()来改变属性 多次调用）
     */
    shouldComponentUpdate() {

    }

    /**
     * 如果组件状态或者属性改变，并且上面的 shouldComponentUpdate(...) 返回为 true，就会开始准更新组件
     * （不能够使用setState()来改变属性 多次调用）
     */
    componentWillUpdate() {

    }

    /**
     * 调用了 render() 更新完成界面之后，会调用 componentDidUpdate() 来得到通知
     * （不能够使用setState()来改变属性 多次调用）
     */
    componentDidUpdate() {

    }

    /**
     * 组件要被从界面上移除的时候，就会调用 componentWillUnmount()
     * （不能够使用setState()来改变属性 有且只有一次调用）
     */
    componentWillUnmount() {

    }

    render() {
        return<Router>
            <Scene key="root">
            <Scene key="home" component={Home} title="首页" initialPage={true} ></Scene>
            <Scene key="mine" component={Mine} ></Scene>
            </Scene>
        </Router>

    }
}

const styles = StyleSheet.create({});
/*
return <Router>
    <Scene key="root">
        <Scene key="news" component={NewsDetails} title="详情页"/>
    </Scene>
</Router>*/
