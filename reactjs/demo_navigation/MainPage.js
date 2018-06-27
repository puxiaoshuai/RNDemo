/**
 * desc：
 * author：
 * date：
 */
import React from 'react';
import {
    Button, Image,
    StyleSheet, Text,
    View,
} from 'react-native';
import  {TabNavigator} from 'react-navigation'
import PageHot from './PageHot'
import PageOther from './Pageother'
import PageMine from './PageMine'

export default  MainPage=TabNavigator({
    PageHot: {
        screen: PageHot,
        navigationOptions: {
            title: '热点',
            tabBarLabel: '热点',
            //可根据focused来改变图片的
            tabBarIcon: ({ tintColor,focused }) => (
                focused?
                <Image
                    source={
                        require('../../img/ic_homeno.png')
                    }
                    style={[styles.icon,{tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
                />:
                    <Image
                        source={
                            require('../../img/ic_women.png')
                        }
                        style={[styles.icon,{tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
                    />
            ),
            headerTitleStyle: {
                alignSelf:'center'
            }
        }
    },
    PageOther: {
        screen: PageOther,
        navigationOptions: {
            title: '推荐',
            tabBarLabel: '推荐',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={
                        require('../../img/ic_tuijian.png')
                    }
                    style={[styles.icon,{tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
                />
            ),
            headerTitleStyle: {
                alignSelf:'center'
            }
        }
    },
    PageMine: {
        screen: PageMine,
        //以下参数也可放置在MinePage.js页面
        navigationOptions: {
            title: '我的',
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={
                        require('../../img/ic_mineno.png')
                    }
                    style={[styles.icon,{tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
                />
            ),
            headerTitleStyle: {
                alignSelf:'center'
            }
        }
    },
}, {
    animationEnabled: true, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: true, // 允许左右滑动
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#ff7d82', // 文字和图片选中颜色
        inactiveTintColor: '#fff9ff', // 文字和图片默认颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {height:0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
        style: {
            backgroundColor: '#444', // TabBar 背景色
            height:54
        },
        labelStyle: {
            fontSize: 12, // 文字大小,
            marginTop: 0,
        },
    },
});
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
});


