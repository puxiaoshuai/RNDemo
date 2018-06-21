/**
 * desc：
 * author：
 * date：
 */
import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import {Provider} from "react-redux";
import Main from '../containers/Main'
import ThreePage from '../containers/ThreePage'
import OnePage from '../containers/Onepage'
import configStore from '../redux/store/configureStore'
import { Router, Scene} from 'react-native-router-flux'
import  CodePush from  'react-native-code-push'
let codePushOptions = {
    //设置检查更新的频率
    //ON_APP_RESUME APP恢复到前台的时候
    //ON_APP_START APP开启的时候
    //MANUAL 手动检查
    checkFrequency : CodePush.CheckFrequency.ON_APP_RESUME
};


const  store= configStore()
 class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    /**
     * 初始化了状态之后，在第一次绘制 render() 之前
     * （能够使用setState()来改变属性 有且只有一次）
     */
    componentWillMount() {
        CodePush.disallowRestart();//禁止重启
        this.syncImmediate(); //开始检查更新
    }
//如果有更新的提示
    syncImmediate() {
        CodePush.sync( {
                //安装模式
                //ON_NEXT_RESUME 下次恢复到前台时
                //ON_NEXT_RESTART 下一次重启时
                //IMMEDIATE 马上更新
                installMode : CodePush.InstallMode.ON_NEXT_RESUME ,
                //对话框
                updateDialog : {
                    //是否显示更新描述
                    appendReleaseDescription : true ,
                    //更新描述的前缀。 默认为"Description"
                    descriptionPrefix : "更新内容：\n" ,
                    //强制更新按钮文字，默认为continue
                    mandatoryContinueButtonLabel : "立即更新" ,
                    //强制更新时的信息. 默认为"An update is available that must be installed."
                    mandatoryUpdateMessage : "必须更新后才能使用\n" ,
                    //非强制更新时，按钮文字,默认为"ignore"
                    optionalIgnoreButtonLabel : '稍后' ,
                    //非强制更新时，确认按钮文字. 默认为"Install"
                    optionalInstallButtonLabel : '后台更新' ,
                    //非强制更新时，检查到更新的消息文本
                    optionalUpdateMessage : '有新版本了，是否更新？\n' ,
                    //Alert窗口的标题
                    title : '更新提示',

                } ,
            } ,
        );
    }


    /**
     * 这个函数开始，就可以和 JS 其他框架交互了，例如设置计时 setTimeout 或者 setInterval，
     * 或者发起网络请求。这个函数也是只被调用一次
     * （能够使用setState()来改变属性 有且只有一次）
     */
    componentDidMount() {
        CodePush.allowRestart();//在加载完了，允许重启
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
          <Provider store={store}>
              <Router>
              <Scene key="root">
                  <Scene key="home_one" component={OnePage} title="首页" initialPage={true} />
                  <Scene key="home_two"   component={Main} title="第二页"/>
                  <Scene key="home_three"   component={ThreePage} title="第三页"/>
              </Scene>
              </Router>

          </Provider>
        );
    }

}
Index1=CodePush(codePushOptions)(Index)
export  default  Index1


const styles = StyleSheet.create({});
