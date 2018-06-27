/**
 * desc：
 * author：
 * date：
 */
import React from 'react';


import {
    StackNavigator,DrawerNavigator
} from 'react-navigation';

import MainPage from "./MainPage";
import Details from "./Details";
import Drawer_Layout from './DrawerLayout'

import {Alert, Image, StyleSheet,Platform, ToastAndroid, TouchableOpacity, View} from "react-native";
/*
 * 初始化StackNavigator
 */
const  StackRouteConfigs= {
    //默认加载第一个页面，这里用来注册需要跳转的页面 相当于Manifest.xml文件
    PageOne: {
        screen: MainPage,
        path: "pages/MainPage",
        navigationOptions: () => ({
            //左侧标题
            //左侧标题
            headerTitle: '趣味',
            //设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题
            headerBackTitle: "",
            //顶部标题栏的样式
            headerStyle: styles.headerStyle,
            //顶部标题栏文字的样式
            headerTitleStyle: styles.headerTitleStyle,
            //设置滑动返回的距离
            gestureResponseDistance: {horizontal: 300},
            //设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题
            headerBackTitle: null,
            //导航栏的样式
            headerStyle: styles.headerStyle,
            //导航栏文字的样式
            headerTitleStyle: styles.headerTitleStyle,
            //返回按钮的颜色
            headerTintColor: 'white',
            //隐藏顶部导航栏
            // header: null,
            //设置顶部导航栏右边的视图  和 解决当有返回箭头时，文字不居中
            //设置导航栏左边的视图
            headerRight: (<View/>),
            headerLeft: leftView,

        }),
    },
    PageTwo: {
        screen: Details,
        navigationOptions: () => ({
            //左侧标题
            headerTitle: '详情界面',

        }),
    },
    Drawer: {
        screen: Drawer_Layout,
    },


}
const StackNavigatorConfig = {
    initialRouteName:"PageOne",
    mode: Platform.OS === 'ios' ? 'modal' : 'card'
}
export default  Navigator =StackNavigator(StackRouteConfigs,StackNavigatorConfig)




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    icon:{
        width:20,
        height:20,

    },
    textsize:{
        marginBottom:32,
        fontSize:18,
        color:'#0c0e13'
    },
    headerStyle: {
        backgroundColor: '#ff9fac',
        elevation: 0
    },
    headerTitleStyle: {
        //标题的文字颜色
        flex:1, textAlign: 'center',
        color: 'white',
        //设置标题的大小
        fontSize: 18,
        //居中显示
        alignSelf: 'center',
    },
    imgStyle: {
        width: 20, height: 20, marginLeft: 16
    },
});

//image外面包裹一层，不然点击事件不起效果
const leftView = <View style={styles.rightContainer}>
    <TouchableOpacity onPress={() => {

    }}>
        <Image source={
            require('../../img/ic_drawer.png')
        } style={styles.imgStyle}/>
    </TouchableOpacity>
</View>



