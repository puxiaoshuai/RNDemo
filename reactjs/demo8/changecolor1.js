/**
 * desc：
 * author：
 * date：
 */
import React, {PropTypes} from 'react';
import {
    StyleSheet,
    View,ToastAndroid
} from 'react-native';
import {Button} from 'react-native-elements'
import color from "../../staticurl/color";
/**
 * 这是我们用自己的方式实现点击按钮，改变颜色
 * **/

export default class ChangColor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         pressStatus:"out"
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
    _press()
    {
        ToastAndroid.show("点击",1000)
          this.setState({
              pressStatus:"in"
          })

    }
    _pressout()
    {
        ToastAndroid.show("移除",1000)
        this.setState({
            pressStatus:"out"
        })

    }
    render() {
        return (
            <View>
             <View style={[styles.view,this.state.pressStatus=='in'?styles.in_color:styles.out_color]}/>
                <Button  color={'#0a0707'}
                         onPressIn={()=>this._press()}
                         onPressOut={()=>this._pressout()}
                         buttonStyle={styles.button}
                    title='点击我改变颜色' />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    view:{
        height:80,
        width:80,
        alignSelf:'center',
        marginTop:32,
        backgroundColor:"#ff0e15"
    },
    button:{
      marginTop:32,
        backgroundColor: '#58a1ff',
    },
    in_color:{
        backgroundColor:"#ff9218"
    }, out_color:{
        backgroundColor:"#ff0e15"
    },
});
