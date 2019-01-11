import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from './woniu-redux'
// function connect(){
//     return function(){
//         return React
//     }
// }
export const connect=(mapStateToProps=state=>state,mapDispatchToProps={})=>(WrapComponent)=>{
    return class ConnectComponent extends React.Component{
        static contextTypes = {
            store:PropTypes.Object
        }
        constructor(props,context){
            super(props,context)
            this.state ={
                props:{}
            }
        }
        componentDidMount(){
            const {store} = this.context
            store.subscribe(()=>this.update())
            this.update()
        }
        update(){
            const {store} = this.context
            const stateProps = mapStateToProps(store.getState())
            const dispatchProps = bindActionCreators(mapDispatchToProps,store.dispatch)
            this.setState({props:{
                ...this.state.props,
                ...dispatchProps,
                ...stateProps
                }    
            })
        }
        render(){
            return <WrapComponent {...this.state.props}></WrapComponent>
        }
    }
}

export class Provider extends React.Component{
    static childContextTypes ={
        store:PropTypes.object
    }
    constructor(props,context){
        super(props,context)
        this.store = props.store
    }
    getChildContext(){
        return {store:this.store}
    }
    render(){
        return this.props.children
    }
}