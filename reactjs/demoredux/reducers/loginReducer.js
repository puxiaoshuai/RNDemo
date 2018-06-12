'use strict'
/**
 * 这是对action不同状态返回不同的值，，，，
 * **/
import * as types from '../constants/loginTypes'
//初始化状态
const  initialState={
    status:'点击登录',
    isSuccess:false,
    user:null
}
//不同类别的事件使用swith对应的处理过程
export  default  function  loginIn(state:initialState,action) {
    switch (action.type)
    {
        case types.LOGIN_IN_DOING:
            return{
                ...state,
                status:"正在登录",
                isSuccess:false,
                user:null

            }
            break;
        case types.LOGIN_IN_DONE:
            return{
                ...state,
                status:"登录成功",
                isSuccess:true,
                user:action.user
            }
            break
        case types.LOGIN_IN_ERROR:
            return{
                ...state,
                status:"登录出错哦",
                isSuccess:false,
                user:null
            }
            break
        default :
            return state
    }
}
