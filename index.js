/**
 * desc：
 * author：
 * date：
 */
import React, {PropTypes} from 'react';
import {
    StyleSheet, Text, TouchableOpacity,
    View,AppRegistry
} from 'react-native';
import Feach from './reactjs/demo1_Feach'
import List from './reactjs/demo2_list'
import ImageTest from './reactjs/demo4_img'
import Demo_ScroTab from  './reactjs/demo3_scrollTab'
import  Demo5 from './reactjs/demo5flux'
import codePush from 'react-native-code-push'
import DemoBuju from './reactjs/demobuju'
import QQ from './reactjs/demo6'
import ChangColor1 from './reactjs/demo8/changecolor1'
import Main from './reactjs/demo8/containers/Main'
import {Button} from 'react-native-elements'
export default class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text:"你好"
        }
    }
    static propTypes = {}

    /**
     * 初始化了状态之后，在第一次绘制 render() 之前
     * （能够使用setState()来改变属性 有且只有一次）
     */
    componentWillMount() {
      // this.codePushUpdate()
    }
//远程服务检测更新
    codePushUpdate() {
        codePush.sync({
                installMode: codePush.InstallMode.IMMEDIATE,
                updateDialog: true
            },
            (status) => {
                switch (status) {
                    case codePush.SyncStatus.CHECKING_FOR_UPDATE:
                        console.log('codePush.SyncStatus.CHECKING_FOR_UPDATE');
                        break;
                    case codePush.SyncStatus.AWAITING_USER_ACTION:
                        console.log('codePush.SyncStatus.AWAITING_USER_ACTION');
                        break;
                    case codePush.SyncStatus.DOWNLOADING_PACKAGE:
                        console.log('codePush.SyncStatus.DOWNLOADING_PACKAGE');
                        break;
                    case codePush.SyncStatus.INSTALLING_UPDATE:
                        console.log('codePush.SyncStatus.INSTALLING_UPDATE');
                        break;
                    case codePush.SyncStatus.UP_TO_DATE:
                        console.log('codePush.SyncStatus.UP_TO_DATE');
                        break;
                    case codePush.SyncStatus.UPDATE_IGNORED:
                        console.log('codePush.SyncStatus.UPDATE_IGNORED');
                        break;
                    case codePush.SyncStatus.UPDATE_INSTALLED:
                        console.log('codePush.SyncStatus.UPDATE_INSTALLED');
                        break;
                    case codePush.SyncStatus.SYNC_IN_PROGRESS:
                        console.log('codePush.SyncStatus.SYNC_IN_PROGRESS');
                        break;
                    case codePush.SyncStatus.UNKNOWN_ERROR:
                        console.log('codePush.SyncStatus.UNKNOWN_ERROR');
                        break;
                }
            },
            ({receivedBytes, totalBytes,}) => {
                console.log('receivedBytes / totalBytes: ------------    ' + receivedBytes + '/' + totalBytes);
            }
        );
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
            {}

        )

    }

}


AppRegistry.registerComponent('HelloRN', () => Main);


