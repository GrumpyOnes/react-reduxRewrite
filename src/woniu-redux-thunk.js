const thunk =({dispatch,getState})=>next=>action=>{
    //next 返回的有可能是object 有可能是function

    /**
     * function thunk({dispatch,getstate}){
     *  return function(next){
     *      return function(action){
     *          if(typeof action=='function'){
     *              return action(dispatch,getState)
     *          }
     *          return next(action)
     *      }     
     *  }
     * 
     * }
     * 
     * ***/
    if(typeof action=='function'){
        //如果function（action）{...} 如果action是方法的话

        return action(dispatch,getState)
    }
    return next(action)
}
export default thunk