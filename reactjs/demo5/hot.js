/**
 * desc：
 * author：
 * date：
 */
import React, {PropTypes} from 'react';
import {
    StyleSheet, Text,
    View, Dimensions, Image
} from 'react-native';
import  Swiper from 'react-native-swiper'
const  {width} = Dimensions.get("window")
export default class  Hot extends React.Component {


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
            <Swiper
                style={styles.wrapper}          //样式
                height={200}                   //组件高度
                loop={true}                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
                autoplay={true}                //自动轮播
                autoplayTimeout={2}                //每隔4秒切换
                horizontal={true}              //水平方向，为false可设置为竖直方向
                paginationStyle={{bottom: 10}} //小圆点的位置：距离底部10px
                showsButtons={true}           //为false时不显示控制按钮
                showsPagination={true}       //为false不显示下方圆点
                dot={<View style={{           //未选中的圆点样式
                    backgroundColor: '#ffbfc5',
                    width: 18,
                    height: 18,
                    borderRadius: 4,
                    marginLeft: 10,
                    marginRight: 9,
                    marginTop: 9,
                    marginBottom: 9,
                }}/>}
                activeDot={<View style={{    //选中的圆点样式
                    backgroundColor: '#ff0b00',
                    width: 18,
                    height: 18,
                    borderRadius: 4,
                    marginLeft: 10,
                    marginRight: 9,
                    marginTop: 9,
                    marginBottom: 9,
                }}/>}

            >
                <View style={styles.img} >
                    <Text >Beautiful11</Text>

                </View>
                <View style={styles.img} >
                    <Text >Beautiful222</Text>

                </View>
                <View style={styles.img} >
                    <Text >Beautiful33</Text>

                </View>

            </Swiper>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height:200
    },

    slide: {

        justifyContent: 'center',
        backgroundColor: 'transparent',
        height:200
    },
    img: {
        width:width,
        height: 200,
    },

});
