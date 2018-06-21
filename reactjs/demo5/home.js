/**
 * desc：
 * author：
 * date：
 */
import React, {PropTypes} from 'react';
import {
    ScrollView,
    StyleSheet, Text,
    View,
} from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Icon from  'react-native-vector-icons/Ionicons'
import { Button } from 'react-native-elements';
import { SocialIcon } from 'react-native-elements';
import { Badge } from 'react-native-elements';
import { Avatar } from 'react-native-elements';
import EIcon from "react-native-elements/src/icons/Icon";





export default class  Home extends React.Component {

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
            <View>
                <ScrollView>
                <Text>react-native-elements——button</Text>
                <Button
                    raised
                    icon={{name: 'ac-unit', size: 32}}
                    buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
                    textStyle={{textAlign: 'center'}}
                    title={`Welcome to\nReact Native Elements1`} />
                <Text>FontAwesome</Text>
                <FontAwesome name="address-card" size={80} color="#4F8EF7" />
                <Text>SocialIcon-------------</Text>
                <SocialIcon
                    type='twitter'
                />
                <Text>elements -Icon-------------</Text>
                    <View style={styles.icon_style}>
                <EIcon
                    reverse
                    name='ios-american-football'
                    type='ionicon'
                    color='#517fa4'
                />
                <EIcon
                    reverse
                    name='ac-unit'
                    type='MaterialIcon'
                    color='#517fa4'
                />
                <EIcon
                    reverse
                    name='apps'
                    type='Entypo'
                    color='#517fa4'
                />
                <EIcon
                    raised
                    name='heartbeat'
                    type='font-awesome'
                    color='#f50'
                    />
                    </View>
                    <Text>react-native-vector-iconsIcon-------------</Text>
                    <View style={styles.icon_style}>
                        <Icon name="md-american-football" size={64}></Icon>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon_style:{
        flexDirection:"row",
        flexWrap:"wrap"
    }
});
