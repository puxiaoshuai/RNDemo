/**
 * desc：
 * author：
 * date：
 */
import React, {PropTypes} from 'react';
import {
    Button,
    StyleSheet, Text, ToastAndroid,
    View,BackHandler
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {connect} from "react-redux";
import {inWay} from "../redux/actions/ChangAction";
 class Oneoage extends React.Component {

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
        console.log("onepage_willMount")
        BackHandler.addEventListener("hardwareBackPress",this.onBackAndroid)

    }

    /**
     * 这个函数开始，就可以和 JS 其他框架交互了，例如设置计时 setTimeout 或者 setInterval，
     * 或者发起网络请求。这个函数也是只被调用一次
     * （能够使用setState()来改变属性 有且只有一次）
     */
    componentDidMount() {
        console.log("onepage_didMount")
    }

    /**
     * 输入参数 nextProps 是即将被设置的属性，旧的属性还是可以通过 this.props 来获取。在这个回调函数里面，你可以根据属性的变化，
     * 通过调用 this.setState() 来更新你的组件状态，这里调用更新状态是安全的，并不会触发额外的 render()
     * （能够使用setState()来改变属性 多次调用）
     */
    componentWillReceiveProps() {
        console.log("onepage_componentWillReceiveProps")
    }

    /**
     * 当组件接收到新的属性和状态改变的话，都会触发调用 shouldComponentUpdate(...)
     * （不能够使用setState()来改变属性 多次调用）
     */
    shouldComponentUpdate() {
        console.log("onepage_shouldComponentUpdate")
        return true

    }

    /**
     * 如果组件状态或者属性改变，并且上面的 shouldComponentUpdate(...) 返回为 true，就会开始准更新组件
     * （不能够使用setState()来改变属性 多次调用）
     */
    componentWillUpdate() {
        console.log("onepage_componentWillUpdate")
    }

    /**
     * 调用了 render() 更新完成界面之后，会调用 componentDidUpdate() 来得到通知
     * （不能够使用setState()来改变属性 多次调用）
     */
    componentDidUpdate() {
        console.log("onepage_componentDidUpdate")
    }
    /**
     * 组件要被从界面上移除的时候，就会调用 componentWillUnmount()
     * （不能够使用setState()来改变属性 有且只有一次调用）
     */
    componentWillUnmount() {
        console.log("onepage_componentWillUnmount")
        BackHandler.removeEventListener("hardwareBackPress",this.onBackAndroid)
    }
     onBackAndroid = () => {
         if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
             //最近2秒内按过back键，可以退出应用。
             return false;
         }
         this.lastBackPressed = Date.now();
         ToastAndroid.show('再按一次退出应用'+Date.now(), ToastAndroid.SHORT);
         return true;
     };
    render() {
        const  {get_changtext}=this.props
        const gotoDetails = () => Actions.home_two()//跳转并传值
        return (
            <View style={styles.container}>
                <Text>{"秀英秀英秀英秀英秀英秀英秀英秀英秀英秀英秀英秀英秀英秀英秀英秀英秀英\n"+get_changtext}</Text>
                <Button title="测试" onPress={gotoDetails}>点击跳转</Button>
            </View>
        );
    }
}

// 获取 state 变化
const mapStateToProps = (store) => {
    return {
        get_text_tag:store.default.userStore.text_tag,//获取别名
        get_text:store.default.userStore.textData,
        get_changtext:store.default.userStore.changtext
    }
};

// 进行第二层包装,生成的新组件拥有 接收和发送 数据的能力，可以只接受，或者只发送
export default connect(mapStateToProps, null)(Oneoage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffa7b7',
    }
});
