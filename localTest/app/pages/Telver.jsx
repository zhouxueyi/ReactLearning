import React from 'react';

export default class Telver extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <input type="text" className="telver" placeholder="请输入手机验证码"/>
        );
    }
}