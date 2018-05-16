/**
 * desc：
 * author：
 * date：
 */
import React, {PropTypes} from 'react';
MySorage._getStorage()
import {
    FlatList,
    StyleSheet, Text, TouchableOpacity,
    Alert,
    View, Button,
} from 'react-native';
import MySorage from "../storage/StorageUtils";
import DateUtil from "../utils/DateUtils";

export default class FlatListTest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           news:[]
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
        this._fetchData()
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
     return  true

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
   itemClick(item,index)
   {
       alert("点击了"+index)

   }
    //定义空布局
    emptyComponent = () => {
        return <View style={{
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text style={{
                fontSize: 16
            }}>暂无数据下拉刷新</Text>
        </View>
    }
    _renderItem =({item,index}) =>
        <View  key={index} style={styles.item} >
            <Text   style={styles.title} numberOfLines={1}>{item.title}</Text>
            <Text  style={styles.description}>{DateUtil.formatDate(item.created_time+"000", "yyyy-MM-dd")}</Text>
           {/* <Button title="存储" onPress={() => {
                Alert.alert("成功")
                var user = new Object();
                user.from = "hhh111";
                MySorage._sava("user3",user);
            }}> </Button>
            <Button title="获取" onPress={() => {
                MySorage._load("user3",function(data){
                    Alert.alert(data.from)
                });
            }}> </Button>*/}
        </View>

    _fetchData=()=>
    {
        let formData = new FormData();
        console.log(this.props.id)
        formData.append('pid',5);
        formData.append('user_id',1);
        formData.append('access_token',"35c9c4068c0bfd40a0ffa3e851a91322");
        formData.append('type_id',this.props.id);
        fetch("http://192.168.3.120/dachuan/index.php/api/news/lists", {
            method: 'POST',
            body:formData
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData)
                this.setState({
                  news:responseData.data.news
                });
            })
            .catch((error) => {
                callback(error);
            });

    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.news}

                    ItemSeparatorComponent={() => <View style={{
                        height: 1,
                        backgroundColor: '#d63f00'
                    }}/>}
                    renderItem={this._renderItem}//这个都不能加括号
                    ListEmptyComponent={this.emptyComponent()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:4
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        fontSize: 16,
        height: 80,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign:'left'
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
});
