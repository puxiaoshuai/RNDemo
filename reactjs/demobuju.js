/**
 * desc：
 * author：
 * date：
 */
import React, {PropTypes} from 'react';
import {
    Image,
    ScrollView,
    StyleSheet, Text,
    View,
} from 'react-native';
import {Divider} from "react-native-elements";


export default class DemoBuju extends React.Component {

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
            <ScrollView style={{flex:1}}>
            <View style={[styles.row,styles.item_htight]}>
                <View style={styles.item1_left}>
                    <Text style={styles.text_green} >我们约会吧</Text>
                    <Text style={styles.text_namal}>恋人家人好朋友</Text>
                    <Image style={styles.style_img} source={require('../img/ic_test1.jpg')}>
                    </Image>
                </View>
                <View style={{ width:2 , backgroundColor: '#D7D7D7' }} />
                <View  style={styles.item1_right}>
                 <View style={{backgroundColor:'#fffe50',flex:1}}>
                    <View style={{flex:1}}></View>
                     <View style={{flex:1}}></View>
                 </View>
                    <View style={{backgroundColor:'#88ffc5',flex:1}}>
                    </View>
                </View>

            </View>
                <Text style={styles.text_font}>我的老家平舆县谢庄村委，4000多口人，回族等55个少数民族同样是我们的兄弟姐妹，为了实现中华民族伟大复兴的“中国梦”，不但“回汉是一家”，而且56个民族更应该像石榴籽一样紧紧地团结在一起、永远是一家！只有56个民族团结是一家，中华民族才能自立于世界民族之林、傲然屹立在世界之东方！</Text>
            </ScrollView>
        );
    }
}

let styles = StyleSheet.create({
    row:{
        flexDirection:'row',
    },
    column:{
        flexDirection:'column',
    },
    item_htight:{
        height:160
    },
    item1_left:{
        flex:1,
        height:160
    },item1_right:
        {
            flex:2,
            height:160
        }
        , style_img:{
        flex:2,
        resizeMode:'contain',

        width:"100%",

        alignSelf:'center'
    },
    text_green:{
        marginTop:16,
        flex:1,
        color:'#76ff35',
        fontSize:18,
        alignSelf:'center',
        backgroundColor:'#f9fbff'
    },
    text_namal:{
        flex:1,
        color:'#100f10',
        fontSize:16,
        alignSelf:'center',
        backgroundColor:'#fff6f8'
    },
    text_font:{
        fontSize:18,
        fontFamily:'SCRATCHMYBACK'
    }

});
