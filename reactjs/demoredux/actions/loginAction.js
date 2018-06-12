'user strict'
/**
 * 这是用户操作的一些action,比如点击按钮进行登录逻辑，返回不同的状态值
 * **/
import * as types from '../constants/loginTypes'
let user ={
    name:'zhangsan',
    age:24
}
export function login() {
    return dispatch=>{
        dispatch(isLogining())
        fetch('https://www.baidu.com/')
            .then((res)=>{
                dispatch(loginSuccess(true,user))
            }).catch((err)=>{
                dispatch(loginError(false))
            })
    }

}
function isLogining() {
    return {
        type: types.LOGIN_IN_DOING

    }

}
function loginSuccess(isSuccess, user) {

    console.log('success');

    return {

        type: types.LOGIN_IN_DONE,

        user: user,

    }
}
function loginError(isSuccess) {
    console.log('error');
    return {
        type: types.LOGIN_IN_ERROR,
    }
}
