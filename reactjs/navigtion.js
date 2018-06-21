/**
 * desc：
 * author：
 * date：
 */
import React from 'react';


import {
    StackNavigator,
} from 'react-navigation';

import MyList from "./demo/listtest";

import NewsDetails from "./reactjs/newsdetials";
/*
 * 初始化StackNavigator
 */
export default App = StackNavigator({
    //默认加载第一个页面，这里用来注册需要跳转的页面 相当于Manifest.xml文件
    Main: {
        screen: MyList,
    },
    Detail: {
        screen: NewsDetails,
    },
});
