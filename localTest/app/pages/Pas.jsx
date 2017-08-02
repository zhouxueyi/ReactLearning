import React from 'react';

export default class MyInput extends React.Component{
    constructor(props){
        super(props);
    }

    enter = (e) =>{
        console.log(e.target.value)
    };

    render() {
        return (
            <div onChange={this.enter}>
                <input type={this.props.type} className="pas"  placeholder="请输入密码"/>
            </div>
        );
    }
}