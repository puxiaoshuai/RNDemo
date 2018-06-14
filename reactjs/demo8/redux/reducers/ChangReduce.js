import {inWay,CHANNGE_INTAG} from "../actions/ChangAction";
//根据行为来返回不同的状态
export  default  ChangReducer=(state = inWay("按住下方按钮我会变成红色","out"),action)=>{
    const  newState=state;
    const  text=action.textData
    const  textTag=action.text_tag
    //判断类型
    switch (action.type)
    {
        case CHANNGE_INTAG:
            return{
                ...newState,
                text_tag:textTag,
                textData:text
            };
        default:
             return{
                 ...newState,
                 text_tag:state.text_tag,
                 textData:state.textData
             }
    }
}
