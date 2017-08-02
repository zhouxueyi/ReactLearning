import React from 'react';
import MyInput from './Pas'
export default class Tel extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
           <MyInput type='tel'/>
        );
    }
}