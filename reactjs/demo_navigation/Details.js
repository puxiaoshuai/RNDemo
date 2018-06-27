/**
 * desc：
 * author：
 * date：
 */
import React from 'react';
import {
    Button, Image,
    StyleSheet, Text, ToastAndroid, TouchableOpacity,Alert,
    View,
} from 'react-native';


export default class Details extends React.Component {
    //设置顶部导航栏的内容
    static navigationOptions = () => ({
        //左侧标题
        headerTitle: '详情页面',
        //设置滑动返回的距离
        gestureResponseDistance: {horizontal: 100},
        //是否开启手势滑动返回，android 默认关闭 ios打开
        // gesturesEnabled: true,
        //设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题
        headerBackTitle: "返回",
        //导航栏的样式
        headerStyle: styles.headerStyle,
        //导航栏文字的样式
        headerTitleStyle: styles.headerTitleStyle,
        //返回按钮的颜色
        headerTintColor: 'white',
        //隐藏顶部导航栏
        // header: null,

        //设置顶部导航栏右边的视图  和 解决当有返回箭头时，文字不居中
        headerRight: rightView,

        //设置导航栏左边的视图
        // headerLeft: (<View/>),

    });

    constructor(props) {
        super(props);
        this.state = {}
    }

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
            <View style={styles.container}>
                <Text onPress={() => {
                    ToastAndroid.show("点击了我", 1000)
                }}>我是第二页</Text>
                <Text style={styles.textsize}>{this.props.navigation.state.params.data}</Text>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"

    },
    imgStyle: {
        width: 26, height: 26, marginRight: 8
    },
    imgStyle1: {
        width: 20, height: 20, marginRight: 8
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    textsize: {
        marginBottom: 32,
        fontSize: 18,
        color: '#0c0e13'
    },
    headerStyle: {
        backgroundColor: '#ff9fac',
        elevation: 0
    },
    headerTitleStyle: {
        //标题的文字颜色
        flex: 1, textAlign: 'center',
        color: 'white',
        //设置标题的大小
        fontSize: 18,
        //居中显示
        alignSelf: 'center',

    },
});
//image外面包裹一层，不然点击事件不起效果
const rightView = <View style={styles.rightContainer}>
    <TouchableOpacity onPress={() => {
        ToastAndroid.show("搜索中...", 1000)
    }}>
        <Image source={
            require('../../img/ic_search.png')
        } style={styles.imgStyle}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {
        Alert.alert('提示',
            '展开菜单',
            [
                {
                    text: '稍后询问',
                    onPress: () => ToastAndroid.show('wait', ToastAndroid.SHORT)
                },
                {
                    text: '取消',
                    onPress: () => ToastAndroid.show('Cancel', ToastAndroid.SHORT),
                    style: 'cancel'
                },
                {
                    text: '好的',
                    onPress: () => ToastAndroid.show('OK', ToastAndroid.SHORT)
                },
            ],
            {
                cancelable: true,
                onDismiss: () => {
                    ToastAndroid.show('点击了外面', ToastAndroid.SHORT)
                }
            });
    }}>
        <Image source={
            require('../../img/ic_menu.png')
        } style={styles.imgStyle1}/></TouchableOpacity>
</View>


