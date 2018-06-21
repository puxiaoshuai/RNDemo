'use strict'
/*创建项目中的store,用来管理所有的state
* */
import {createStore,applyMiddleware,combineReducers} from 'redux'
import  thunk from 'redux-thunk'  //在dispatch中存在耗时需要使用redux-thunk

import  * as  reducers from '../reducers/ReduceIndex'
const  creteStoreWithMiddleware=applyMiddleware(thunk)(createStore)
export  default  function configureStore( initState) {
    const  reducer=combineReducers(reducers)
    const  store=creteStoreWithMiddleware(reducer,initState)
    return store
}

