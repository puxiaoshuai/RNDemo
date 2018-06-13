'use strict'
/*创建项目中的store,用来管理所有的state
* */
import { createStore } from 'redux';
import  ChangeReduce from '../reducers/ChangReduce'
export default () => {
    // 根据 reducer 初始化 store
    const store = createStore(ChangeReduce);
    return store;
}
