/**
 * desc：
 * author：puhao
 * date：
 */
import React from 'react';
import {
    Button,
    Image,
    Alert,
    StyleSheet, Text,
    View,
} from 'react-native';
MySorage._getStorage();

import MySorage from "../storage/StorageUtils";
//http://192.168.3.120/dachuan/index.php/api/news/newsType  pid 7  http://gank.io/api/data/Android/10/1
///http://192.168.3.120/dachuan/index.php/api/news/get-one
///news/lists .params("page", page)
//                 .params("pid",pid)
//                 .params("type_id", tpye_id)
const  NET_URL="http://192.168.3.120/dachuan/index.php/api/news/newsType"
export default class Feach1  extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            results:null,

        }
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

       return true;
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
            if (!this.state.results) {
                return this.renderLoadingView();
            }
            var movie = this.state.results[0];
            return this.renderMovie(movie);
        }
    }
    fetchData()
    {
        fetch(NET_URL, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData)
                this.setState({
                    results:responseData.data,

                });
            })
            .catch((error) => {
                callback(error);
            });

    }

    renderLoadingView()
    {
        return (
            <View style={styles.container}>
                <Text>
                    正在加载电影数据......
                </Text>
            </View>
        );
    }
    renderMovie(movie)//返回一部电影
    {
        return (
                <View >
                    <Text >{movie.id}</Text>
                    <Text >{movie.name}</Text>
                   {/* <Button title="存储" onPress={() => {
                       Alert.alert("成功")
                        var user = new Object();
                        user.from = "hhh";
                        MySorage._sava("user3",user);
                    }}> </Button>
                    <Button title="获取" onPress={() => {
                        MySorage._load("user3",function(data){
                            Alert.alert(data.from)
                        });
                    }}> </Button>*/}
                </View>
        );
    }




}

const styles = StyleSheet.create({

    container:{
        flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#F5FCFF'
    },
});
