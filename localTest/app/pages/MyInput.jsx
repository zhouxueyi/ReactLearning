import React from 'react';


export default class MyInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            type : props.type ? props.type : "text",
            flag : props.flag,
            verSrc : props.verSrc ? props.verSrc : "http://10.106.165.129:9000/capcha?width=100&height=50"

        }
    };

    componentWillReceiveProps(nextProps){
        // console.log(nextProps)
        if(nextProps.text){
            this.setState({
                num : nextProps.text
            })
        }
    }
    sendMess= () => {
        console.log("sendMess");
        // $.ajax('http://10.106.165.129:9000/sms_code/request?mobile=18056033794&service=register&capcha=1234&utm_source=h5');
    };

    reloadVer = () => {
        var timeStamp = new Date().getTime();
        this.setState({
            verSrc: 'http://10.106.165.129:9000/capcha?width=100&height=50&timestamp=' + timeStamp
        })
    };

    render() {
        return(

            <div className="my-input">
                <input type={this.state.type} className={this.props.className}  placeholder={this.props.placeholder}/>
                { this.state.flag == "0" &&
                        <i className="warn-icon">!</i>
                }
                {this.state.flag == "1" &&
                    <div className="ver-container" onClick={this.reloadVer}>
                        <img ref="ver" id="ver-text" src={this.state.verSrc}/>
                    </div>
                }
                {this.state.flag == "2" &&
                    <div className="ver-container" onClick={this.sendMess}>
                        <i className="tel-ver-text">获取验证码</i>
                    </div>
                }
            </div>

        );
    }
}