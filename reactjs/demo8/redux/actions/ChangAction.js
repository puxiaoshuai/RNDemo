export  const  CHANNGE_INTAG="IN"
export  const  inWay=(text,tag,chang)=>
{

    return {
         type:CHANNGE_INTAG,
         text_tag:tag,//传默认的in.或者out,
         textData:text,
        changtext:chang
    }
}
