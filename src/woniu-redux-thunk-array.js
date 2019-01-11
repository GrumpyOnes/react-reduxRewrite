const arrthunk =({dispatch,getState})=>next=>action=>{
    //next 返回的有可能是object 有可能是function


    if(Array.isArray(action)){
       return action.forEach(v=>dispatch(v))
        //如果function（action）{...} 如果action是方法的话

    }
    return next(action)
}
export default arrthunk