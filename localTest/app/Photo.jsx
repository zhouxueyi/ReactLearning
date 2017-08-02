// import './react.js'

// import './js/inputEvent.js'

// import React from 'react';
import ReactDOM from 'react-dom';
// var React = require('react');

import React from 'react';

class Photo extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Test</h1>
            </div>
        );
    }
}

export default Photo;

/*var Photo = React.createClass({
    render() {
        return (
            <div>
                <h1>kdkdjjdgg</h1>
            </div>
        );
    }
});
module.exports = Photo;*/

// export class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {count: props.initialCount};
//     }
//     tick() {
//         this.setState({count: this.state.count + 1});
//     }
//     render() {
//         return (
//             <div onClick={this.tick.bind(this)}>
//                 Clicks: {this.state.count}
//             </div>
//         );
//     }
// }
// Counter.propTypes = { initialCount: React.PropTypes.number };
// Counter.defaultProps = { initialCount: 0 };

// class Photo extends React.Component {
//     render() {
//         return <h1>lalala</h1>
//     }
// }
// ReactDOM.render(<Photo />, document.getElementById('example'));


// React.createElement('a', {href: 'http://facebook.github.io/react/'}, 'Hello!')


// React.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('example')
// );


//
// var tel = React.createElement(
//     'input',
//     {
//         className: 'tel',
//         type: 'text',
//         value: '请输入手机号',
//         data: '请输入手机号'
//     });
// var pas = React.createElement(
//     'input',
//     {
//         className: 'pas',
//         type: 'text',
//         value: '请设置密码',
//         data: '请设置密码'
//     });
// var ver = React.createElement(
//     'input',
//     {
//         className: 'ver',
//         type: 'text',
//         value: '请输入右侧验证码',
//         data: '请输入右侧验证码'
//     });
// var telVer = React.createElement(
//     'input',
//     {
//         className: 'telVer',
//         type: 'text',
//         value: '请输入手机验证码',
//         data: '请输入手机验证码'
//     });
//
//
// var form = React.createElement('form', tel,pas,ver,telVer);
// //
// var container = React.createElement('div',{className: 'container'},form);
