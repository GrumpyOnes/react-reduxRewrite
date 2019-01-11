


export function createStore(reducer,enhancer){
    if(enhancer){
        return enhancer(createStore)(reducer);
    }
    var currentstate={};
    var currentlisteners=[];
    function getState(){
        return currentstate;
    }
    function subscribe(listner){
        currentlisteners.push(listner)
    }
    function dispatch(action){
        currentstate = reducer(currentstate,action)
        currentlisteners.map(v=>v())
        return action
    }
    dispatch({type:'ETWFGHDGJDFSDJGHD'})
    return {getState,subscribe,dispatch}
}
export function applyMiddlewares(...middlewares){
    return createStore=>(...args)=>{
        const store = createStore(...args)
        let dispatch = store.dispatch

        const midApi ={
            getState:store.getState,
            dispatch:(...args)=>dispatch(...args)
        }
        const middlewareChain = middlewares.map(middleware=>middleware(midApi))
        dispatch = compose(...middlewareChain)(store.dispatch)
        //dispatch = middleware(midApi)(store.dispatch)
        return {
            ...store,
            dispatch
        }
    }
}
export function compose(...funcs){
    if(funcs.length==0){
        return arg=>arg
    }
    if(funcs.length==1){
        return funcs[0]
    }
    return funcs.reduce((ret,item)=>(...arg)=>ret(item(...arg)))
}
function bindActionCreator(creator,dispatch){
    return (...args)=>dispatch(creator(...args))
}
export function bindActionCreators(creators,dispatch){
    let bound ={}
    Object.keys(creators).forEach(v=>{
        let creator = creators[v]
        bound[v] = bindActionCreator(creator,dispatch)
    })
    return bound
}