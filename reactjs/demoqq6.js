/**
 * desc：
 * author：
 * date：
 */
import React, {PropTypes} from 'react';
import {
    Image,
    StyleSheet, TextInput,
    View,
} from 'react-native';
import { Button ,SearchBar} from 'react-native-elements'
import Divider from "react-native-elements/src/divider/Divider";
export default class QQLogin extends React.Component {

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
            <View style={styles.qqBack}>
                <SearchBar
                    lightTheme
                    placeholder='Type Here...' />
             <Image style={styles.style_img} source={require('../img/ic_icon.jpg')}/>
                <TextInput style={styles.style_user_input}
                           placeholder='qq号/手机号/邮箱'
                           numberOfLines={1}
                           autoFocus={true}
                           underlineColorAndroid={'transparent'}
                           secureTextEntry={false}//是否已密码形式显示
                />
                <Divider style={{ backgroundColor: '#efeeff' }} />
                <TextInput
                    style={styles.style_pwd_input}
                    placeholder='密码'
                    numberOfLines={1}
                    underlineColorAndroid={'transparent'}
                    secureTextEntry={true}
                />
                <Button title="登录"
                        buttonStyle={{backgroundColor: '#ff9601', marginTop:32, borderRadius: 4}}
                        textStyle={{textAlign: 'center'}}/>

            </View>
        );
    }
}

let styles = StyleSheet.create({
    qqBack:{
        backgroundColor:'#f6f7ff',
        flex:1
    },

    style_img:{
        borderRadius:35,
        height:80,
        width:80,
        marginTop:40,
        alignSelf:'center'
    },
    style_user_input:{
        backgroundColor:'#fff',
        marginTop:20,
        height:42,
        textAlign:'center'
    },
    style_pwd_input:{
        backgroundColor:'#fff',
        height:42,
        textAlign:'center'
    },
});
