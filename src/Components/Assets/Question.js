import React, { Component } from "react";
import '../../null.scss';
import './Question.scss'

export default class Question extends Component{
    render(){
        return(
            <a href="#" className="question">
                <div className="question__inner"></div>
            </a>
        )
    }
}