import React from 'react';

export default class Ver extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <input type="text" className="ver" placeholder="请输入右侧验证码"/>
        );
    }
}