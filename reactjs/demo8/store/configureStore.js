'use strict'
/*创建项目中的store,用来管理所有的state
* */
import {createStore,applyMiddleware} from 'redux'
import  thunkMiddleware from 'redux-thunk'
import  rootReducer from '../reducers/index'
const  creteStoreWithMiddleware=applyMiddleware(thunkMiddleware)(createStore)
export  default  function configureStore( initState) {
    const  store=creteStoreWithMiddleware(rootReducer,initState)
    return store

}
