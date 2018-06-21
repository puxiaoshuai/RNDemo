/**
 * desc：
 * author：puhao
 * date： 4/22
 */
import React  from 'react';
import {
    ScrollView,FlatList,
    StyleSheet, Text, View,
    ToastAndroid
} from 'react-native';
import ScrollableTabView, { DefaultTabBar,ScrollableTabBar } from 'react-native-scrollable-tab-view';
import FlatListTest from "./demo2_list";
const  NET_URL="http://192.168.3.120/dachuan/index.php/api/news/newsType"
const  New_list="http://192.168.3.120/dachuan/index.php/api/news/lists"
var ITEM_HEIGHT = 100;
export default class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            new_tabs:null,
            new_data:null,
            pid:5
        };
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
        this.fetchData();
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
        {
           if (!this.state.new_tabs)
           {
               return this.renderLoadingView();
           }else {
               var tab=this.state.new_tabs;
               console.log(tab)
               return this.renderTabs(tab)
           }

        }
        /*return <ScrollableTabView
            style={styles.container}
            tabBarBackgroundColor='#fff' //tab栏目背景色
            tabBarActiveTextColor='#b4282d'//选中的文字颜色
            tabBarInactiveTextColor='#333'//为选中的文字颜色
            tabBarUnderlineStyle={styles.tabBarUnderline}
            tabBarTextStyle={styles.text_style}
            renderTabBar={()=><DefaultTabBar />}
           /!* tabBarPosition='top'
           * tabBarPosition(String，默认值'top')
             top：位于屏幕顶部
              bottom：位于屏幕底部
              overlayTop：位于屏幕顶部，悬浮在内容视图之上（看颜色区分：视图有颜色，Tab栏没有颜色）
             overlayBottom：位于屏幕底部，悬浮在内容视图之上（看颜色区分：视图有颜色，Tab栏没有颜色）
           * *!/
        >
            {
                lable.map((item,index)=>{
                    return (<ScrollView tabLabel={item} key={index}>
                        <Text>我是fsfjfsjf{item}</Text>
                    </ScrollView>)
                })
            }

        </ScrollableTabView>;*/
    }
    renderLoadingView()
    {
        return (
            <View style={styles.container}>
                <Text>
                    正在加载数据......
                </Text>
            </View>
        );
    }
    fetchData()
    {
      /*  var param = {
            pid:this.state.pid,
        };
        var paramStr = JSON.stringify(param);*/
        let formData = new FormData();
        formData.append('pid', this.state.pid);
        fetch(NET_URL, {
            method: 'POST',
            body: formData
        }).then((response)=>response.json())
            .then((responseData)=>{
                this.setState({
                    new_tabs:responseData.data
                })
            })
            .catch((error)=>{

        })
       /*let fromData=new FormData();
       fromData.append("pid","5");
        var requestOptions={
            method:'GET',
            mode: "no-cors",
            body:fromData
        }
        fetch(NET_URL,requestOptions)
            .then((response)=>response.json)
            .then((responseData)=>{
                console.log(responseData)
                this.setState({
                    new_tabs:responseData.data
                })
            }).catch((error)=>{
                console.log(error)
        })*/
    }
    fetchNewsData() {
        /*  var param = {
              pid:this.state.pid,
          };
          var paramStr = JSON.stringify(param);*/
        let formData = new FormData();
        formData.append('pid', this.state.pid);
        fetch(NET_URL, {
            method: 'POST',
            body: formData
        }).then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    new_tabs: responseData.data
                })
            })
            .catch((error) => {

            })
    }
    renderTabs(tabs)//返回第一个tabs
    {
        return <ScrollableTabView
            tabBarBackgroundColor='#fff' //tab栏目背景色
            tabBarActiveTextColor='#b4282d'//选中的文字颜色
            tabBarInactiveTextColor='#333'//为选中的文字颜色
            tabBarUnderlineStyle={styles.tabBarUnderline}
            tabBarTextStyle={styles.text_style}
            renderTabBar={()=><ScrollableTabBar />}
            /*onScroll={(position)=>{
                if (position==0)
                {
                    ToastAndroid.show('选中了'+position, ToastAndroid.SHORT)
                    //this.state.new_data=[{key: 'AA'}, {key: 'AAs'}]
                   /!* this.setState({
                        new_data: [{key: '我是A'}, {key: '我是B'}]
                    })*!/
                }
            }}
            onChangeTab={(obj)=>{
                if (obj.i!=0)
                {
                    ToastAndroid.show('选中'+obj.i, ToastAndroid.SHORT)
                }

             }
            }*/
          >
    {
        /**<ScrollView tabLabel="标题" key={index}>
         <Text>我是fsfjfsjf</Text>
         </ScrollView>**/
        /**
         *  <FlatList
         data={this.state.new_data}
         renderItem={({item}) => <Text>{item.key}</Text>}
         />**/
        tabs.map((item,index)=>{
            console.log(item.name)
            return (<ScrollView tabLabel={item.name} key={index} >
                <FlatListTest id={item.id}/>
            </ScrollView>)
        })
    }
    </ScrollableTabView>;
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#F5FCFF'
    },
    tabBarUnderline: {
        backgroundColor: '#b4282d',
        height: 2,
    },
    text_style:{
        fontSize:16,

    }
});
