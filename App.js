
import React from 'react';
import {
    StyleSheet,
    ScrollView, Text,
} from 'react-native';
import ScrollableTabView, { DefaultTabBar,ScrollableTabBar } from 'react-native-scrollable-tab-view';
export default () => {
    return <ScrollableTabView
        style={styles.container}
        tabBarBackgroundColor='#fff'
        tabBarActiveTextColor='#b4282d'
        tabBarInactiveTextColor='#333'
        tabBarUnderlineStyle={styles.tabBarUnderline}
        renderTabBar={()=><ScrollableTabBar />}
        tabBarPosition='overlayTop'
    >
        <ScrollView tabLabel='微信精选'>
         <Text>我是微信</Text>
        </ScrollView>
        <ScrollView tabLabel='新闻头条'>
            <Text>我是头像</Text>
        </ScrollView>
        <ScrollView tabLabel='新闻头条2'>
            <Text>我是头像</Text>
        </ScrollView>
        <ScrollView tabLabel='新闻头条3'>
            <Text>我是头像</Text>
        </ScrollView>
    </ScrollableTabView>;
}

const styles = StyleSheet.create({
    container: {

    },
    tabBarUnderline: {
        backgroundColor: '#b4282d',
        height: 2,
    },
    text1:{

    }
    ,
    icon: {
        width: 300,
        height: 300,
        alignSelf: 'center',
    },
});
