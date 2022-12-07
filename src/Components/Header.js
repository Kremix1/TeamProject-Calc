import React, { Component } from "react";
import '../null.scss';
import './Header.scss';

export default class Header extends Component{
    render(){
        return(
            <div className="header">
                <div className="header__questions">
                    <div className="questions__title">Справка по сервису:</div>
                    <div className="questions__first"></div>
                    <div className="questions__second"></div>
                    <div className="questions__third"></div>
                </div>
                <div className="header__user">
                    <div className="user__name">Жмышенко Валерий Альбертович</div>
                    <div className="user__avatar"></div>
                    <div className="user__arrow"></div>
                </div>
            </div>
        )
    }
}