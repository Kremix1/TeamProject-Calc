import React, { Component } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import '../null.scss';
import './Navbar.scss';
import logo from '../Images/logo.svg'
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

export default class NavbarLeft extends Component {
    constructor(props) {
        super(props) // функция вызывающая родительский конструктор
      
        this.state = {
           width: window.screen.width,
        }
        this.toggleNavbar = this.toggleNavbar.bind(this);
      }
    toggleNavbar() {
        document.getElementById('nav').classList.toggle('visibility')
    }
    render(){
        return(
            <>
                <div className="burger-button" onClick={this.toggleNavbar}></div>
                <Nav id="nav" className="col-xxxl-12 d-block sidebar visibility"
                    activeKey="/home"
                    >
                        <div className="sidebar-sticky"></div>
                    <Nav.Item className="logo">
                        <Nav.Link className="logo__inner" href="/home"><img
                            src={logo}
                            height="90"
                            width="90"
                            className="d-inline-block align-top"
                            alt="Logo"
                        /></Nav.Link>
                        <div className="close-button" onClick={this.toggleNavbar}></div>
                    </Nav.Item>
                    <Nav.Item className="link">
                        <div
                            className="list-image list-image__1"
                        />
                        <Nav.Link>О проекте</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="link">
                        <div
                            className="list-image list-image__2"
                        />
                        <Nav.Link>Задачи</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="link">
                        <div
                            className="list-image list-image__3"
                        />
                        <Nav.Link>Команда</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="link">
                        <div
                            className="list-image list-image__4"
                        />
                        <Nav.Link>Лента событий</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="link">
                        <div
                            className="list-image list-image__5"
                        />
                        <Nav.Link>Документы</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="link">
                        <div
                            className="list-image list-image__6"
                        />
                        <Nav.Link>Календарь</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="link">
                        <div
                            className="list-image list-image__7"
                        />
                        <Nav.Link>Обсуждение</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="link-dark">
                        <div className="link-dark__title">
                        <div
                            className="list-image list-image__8"
                        />
                        <Nav.Link>Результаты и оценки</Nav.Link>
                        </div>
                        <Nav.Link className="link__item">Оценка по итерациям</Nav.Link>
                        <Nav.Link className="link__item">Результаты проекта</Nav.Link>
                    </Nav.Item>
                    </Nav>
            </>
        )
    }
}