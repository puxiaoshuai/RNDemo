let nextTodoId =0;
//抽象用户行为
export  const  addtoDo=(text)=>{
    return{
        type:"ADD_TODO",
        id:nextTodoId,
        text
    }
}
