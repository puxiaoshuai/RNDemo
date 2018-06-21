/**
 * desc：
 * author：
 * date：
 */
import React from 'react';
import {
    Image,
    StyleSheet, ToastAndroid,
    View,
} from 'react-native';
import {Button} from "react-native-elements";
import TextComponent from "../components/TextComponent";
import {inWay} from "../redux/actions/ChangAction";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
 class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    /**
     * 初始化了状态之后，在第一次绘制 render() 之前
     * （能够使用setState()来改变属性 有且只有一次）
     */
    componentWillMount() {
   console.log("two_componentWillMount")
    }

    /**
     * 这个函数开始，就可以和 JS 其他框架交互了，例如设置计时 setTimeout 或者 setInterval，
     * 或者发起网络请求。这个函数也是只被调用一次
     * （能够使用setState()来改变属性 有且只有一次）
     */
    componentDidMount() {
        console.log("two_componentDidMount")
    }

    /**
     * 输入参数 nextProps 是即将被设置的属性，旧的属性还是可以通过 this.props 来获取。在这个回调函数里面，你可以根据属性的变化，
     * 通过调用 this.setState() 来更新你的组件状态，这里调用更新状态是安全的，并不会触发额外的 render()
     * （能够使用setState()来改变属性 多次调用）
     */
    componentWillReceiveProps() {
        console.log("two_componentWillReceiveProps")
    }

    /**
     * 当组件接收到新的属性和状态改变的话，都会触发调用 shouldComponentUpdate(...)
     * （不能够使用setState()来改变属性 多次调用）
     */
    shouldComponentUpdate() {
        console.log("two_shouldComponentUpdate")
        return true

    }

    /**
     * 如果组件状态或者属性改变，并且上面的 shouldComponentUpdate(...) 返回为 true，就会开始准更新组件
     * （不能够使用setState()来改变属性 多次调用）
     */
    componentWillUpdate() {
        console.log("two_componentWillUpdate")
    }

    /**
     * 调用了 render() 更新完成界面之后，会调用 componentDidUpdate() 来得到通知
     * （不能够使用setState()来改变属性 多次调用）
     */
    componentDidUpdate() {
        console.log("two_componentDidUpdate")

    }

    /**
     * 组件要被从界面上移除的时候，就会调用 componentWillUnmount()
     * （不能够使用setState()来改变属性 有且只有一次调用）
     */
    componentWillUnmount() {
        console.log("two_componentWillUnmount")

    }
//推荐容器和视图分开。先创建视图，在创建行为
    render() {
        const {inWay1 , outWay1 } =this.props
        return (
            <View style={styles.container}>
                {/*需要改变的组件,把参数往下传*/}
                <Image source={require('../../../img/qq.png')} style={{width:200, height:200}}/>
                <TextComponent {...this.props}/>
                <Button  color={'#0a0707'}
                         onPressOut={outWay1}//()=>outWay1()
                         onPressIn={inWay1}  //()=>inWay1()
                         buttonStyle={styles.button}
                         title='按住我会改变文字颜色' />
                <Button color={'#0a0707'} buttonStyle={{marginTop:32}} onPress={()=>{
                    Actions.home_three()
                }} title="跳转到第三页，以前没得这个按钮，新加的"/>
               {/* <View style={{backgroundColor:"#ff9505",position:'absolute' ,right:20,bottom:20 ,width:40,height:40}}/>
                <View style={{backgroundColor:"#ff9505",position:'absolute' ,left:20,bottom:20 ,width:40,height:40}}/>
                <View style={{backgroundColor:"#ff9505",position:'absolute' ,left:20,top:20 ,width:40,height:40}}/>
                <View style={{backgroundColor:"#ff9505",position:'absolute' ,right:20,top:20 ,width:40,height:40}}/>
                <View style={{
                    backgroundColor: "#ff9505", justifyContent: 'center',
                    alignItems: 'center',
                    width: 40,
                    height: 40,
                }}/>*/}
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffa7b7',
    },  button:{
        marginTop:32,
        backgroundColor: '#58a1ff',
    },

});
// 获取 state 变化
const mapStateToProps = (store) => {
    return {
       get_text_tag:store.default.userStore.text_tag,//获取别名
        get_text:store.default.userStore.textData,
      get_changtext:store.default.userStore.changtext
    }
};
// 发送行为,会在props中拿到
const mapDispatchToProps = (dispatch) => {
    return {
        inWay1:()=>dispatch(inWay("松开我就又变成很黑色了","in","")),//表示已经按住了，所以提示这样
        outWay1: ()=>dispatch(inWay("按住下方按钮我会变成红色","out","我是新的数据"))

    }
};
// 进行第二层包装,生成的新组件拥有 接收和发送 数据的能力
export default connect(mapStateToProps, mapDispatchToProps)(Main);


