import React from 'react';
// import Tel from './Tel';
// import Pas from './Pas';
// import Ver from './Ver';
// import Telver from './Telver';
import MyInput from './MyInput';


export default class MyComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            num : 1,
            varSrc : 'http://10.106.165.129:9000/capcha?width=100&height=50'
        }
    }
    aaa = () => {
        this.setState({
            num : ++(this.state.num)
        })
    }
    bbb = () => {
       console.log("bbb");
       this.setState({
           verSrc : 'http://10.106.165.129:9000/capcha?width=100&height=50'
       })
    };
    handleClick (e) {
        e.preventDefault();
        console.log('this is:', this);
    }
    render() {

        return (
            <div>

            <img className="bg-img" src="http://microloan-fe-test.yxapp.xyz/img/banner1.png" />
            <form className = "resgist-form" onChange={this.aaa}>
                <MyInput type = "text" className = "tel"  placeholder="请输入手机号" flag="0"/>
                <MyInput type = "password" className = "pas"  placeholder="请输入密码" flag="0" />
                <MyInput type = "text" className = "ver"  placeholder="请输入右侧验证码" flag="1" src="http://10.106.165.129:9000/capcha?width=100&height=50"/>
                <MyInput type = "text" className = "telver"  placeholder="请输入手机验证码" flag="2"/>
                <a href="#" id="register-button" className="button" disabled>立即申请</a>
            </form>
            </div>
        );
    }
}

// module.exports = MyComponent;



//
//
// var form = React.createElement('form', tel,pas,ver,telVer);
// //
// var container = React.createElement('div',{className: 'container'},form);