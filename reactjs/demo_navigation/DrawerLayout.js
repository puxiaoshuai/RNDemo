//侧滑
import D_pageOne from "./D_PageOne";
import D_pageTwo from "./D_PageTwo";
import {DrawerNavigator} from "react-navigation";
import React from 'react';
import {
    Button, Image,
    StyleSheet, Text, ToastAndroid, TouchableOpacity,Alert,
    View,
} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const   DrawerRouterConfig={
    D_PageOne: {
        screen: D_pageOne,
        navigationOptions: {
            drawer: () => ({
                label: 'Simple Tabs',
                icon: ({ tintColor }) => (
                    <MaterialIcons name="drafts" size={24} style={{ color: tintColor }} />
                ),
            }),
        },
    },
    D_PageTwo: {
        screen: D_pageTwo
        , navigationOptions: {
            drawer: () => ({
                label: 'Simple Tabs11',
                icon: ({ tintColor }) => (
                    <MaterialIcons name="drafts" size={24} style={{ color: tintColor }} />
                ),
            }),
        },
    },
}
const DrawerNavigatorConfig={
    initialRouteName: 'D_PageOne',
    tabBarPosition: 'bottom',
    lazy: true,
    tabBarOptions: {}


}
export default DrawerNavigator(DrawerRouterConfig,DrawerNavigatorConfig)

/*export  default DrawerNav = DrawerNavigator({
    D_PageOne: { screen: D_pageOne,
        navigationOptions: {
            drawer: () => ({
                label: 'Simple Tabs',
                icon: ({ tintColor }) => (
                    <MaterialIcons name="drafts" size={24} style={{ color: tintColor }} />
                ),
            }),
        },
    },
    D_PageTwo: { screen: D_pageTwo
    , navigationOptions: {
            drawer: () => ({
                label: 'Simple Tabs11',
                icon: ({ tintColor }) => (
                    <MaterialIcons name="drafts" size={24} style={{ color: tintColor }} />
                ),
            }),
        },},
}, {
    drawerWidth: 200, // 抽屉宽
    drawerPosition: 'left', // 抽屉在左边还是右边
    // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
    contentOptions: {
        initialRouteName: D_pageOne, // 默认页面组件
        activeTintColor: 'white',  // 选中文字颜色
        activeBackgroundColor: '#ff8500', // 选中背景颜色
        inactiveTintColor: '#666',  // 未选中文字颜色
        inactiveBackgroundColor: '#fff', // 未选中背景颜色
        style: {  // 样式
        }
    }
});*/
