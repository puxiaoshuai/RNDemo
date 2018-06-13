import {changText,CHANNGE_TAG} from "../actions/ChangAction";
export  default  ChangReducer=(state=changText("我是六三"),action)=>{
    const  newState=state;
    const  text=action.text1
    //判断类型
    switch (action.type)
    {
        case CHANNGE_TAG:
            return{
                ...newState,
                text:"以前的数据是"+text+"，现在我叫蒲小帅"
            };
        default:
            return newState
    }
}
