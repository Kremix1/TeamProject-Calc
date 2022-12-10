import React, { Component } from "react";
import '../null.scss';
import './Header.scss';
import Prompt from "./Prompt";

export default class Header extends Component{
    showPrompt = () => {
        document.querySelectorAll('#title').forEach((title)=>{
            title.classList.toggle('title-index')
        })
        document.querySelectorAll('#prompt').forEach((title)=>{
            title.classList.toggle('show-prompt')
        })
        document.querySelector('.prompt-wrapper').classList.toggle('visibility-prompt')
    }
    render(){
        return(
            <>
                <Prompt id="prompt1" className="visibility-prompt"/>
                <div className="header">
                    
                    <div className="header__questions">
                        <div className="questions__title">Справка по сервису:</div>
                        <div className="questions__first"></div>
                        <div className="questions__second"></div>
                        <div className="questions__third" onClick={this.showPrompt}></div>
                    </div>
                    <div className="header__user">
                        <div className="user__name">Жмышенко Валерий Альбертович</div>
                        <div className="user__avatar"></div>
                        <div className="user__arrow"></div>
                    </div>
                </div>
            </>
        )
    }
}