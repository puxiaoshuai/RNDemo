/**
 * desc：
 * author：
 * date：
 */
import React, {PropTypes} from 'react';
import {
    Dimensions,
    StyleSheet, Text,
    View,
} from 'react-native';
import Icon from  'react-native-vector-icons/Ionicons'
import EIcon from "react-native-elements/src/icons/Icon";

import ColorUrils from '../staticurl/color'
const  {width} = Dimensions.get("window")
export default class Box extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
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
        return true

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
        return (
            <View style={styles.background}>
                <View >
                    <Icon name="md-aperture" size={64} style={styles.usericon}></Icon>
                </View>
                <View style={ {width:100,height:100,margin:40,backgroundColor:'gray'}}>
                    <Text style={ {fontSize:12,margin:20,justifyContent:'center'}}>尺寸</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:ColorUrils.color_back
        ,flex:1
        ,height:200
    },
    base:{
        width:width

    },
    usericon:{
        alignItems:'center'
    }
});
