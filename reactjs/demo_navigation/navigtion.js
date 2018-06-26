/**
 * desc：
 * author：
 * date：
 */
import React from 'react';


import {
    StackNavigator,
} from 'react-navigation';

import PageOne from "../demo_navigation/PageOne";

import PageTwo from "../demo_navigation/Pagetwo";
/*
 * 初始化StackNavigator
 */

export  default  NavigationIndex= StackNavigator({
    //默认加载第一个页面，这里用来注册需要跳转的页面 相当于Manifest.xml文件
    PageOne: {
        screen: PageOne,
        navigationOptions: () => ({
            //左侧标题
            headerTitle: '主页面',

        }),
    },
    PageTwo: {
        screen: PageTwo,
        navigationOptions: () => ({
            //左侧标题
            headerTitle: '详情界面',

        }),
    }

});

