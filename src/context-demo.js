import React from 'react'
import PropTypes from 'prop-types'
//无状态写法
//SiderBar = function(props,context){}
class SiderBar extends React.Component{
    static contextTypes = {
        user:PropTypes.string
    }
    render(){
        return (<div><p>我是SiderBar{this.context.user}</p></div>)
    }
}

class NaviBar extends React.Component{
    render(){
        return (<div><p>我是NaviBar</p><SiderBar></SiderBar></div>)
    }
}
class Page extends React.Component{
    static childContextTypes = {
        user:PropTypes.string
    }
    constructor(props){
        super(props);
        this.state={'user':'woniu'}
    }
    getChildContext(){
        return this.state
    }
    render(){
        const user='woniu'
        return (<div><p>我是{this.state.user}</p><NaviBar></NaviBar></div>)
    }
}
export default Page