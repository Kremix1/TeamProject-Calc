import React, { Component, useState } from "react";
import '../null.scss';
import './Calculate.scss'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Table from 'react-bootstrap/Table';
import Question from "./Assets/Question";



export default class Calculate extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
        iterations: [],
        fullIterations: [],
        coefficient: [],
        expertComission: [],
        total: [],
      }
    }
    //ToDo: Сделать динамическое создание столбцов
    //https://react-bootstrap.netlify.app/components/table/#rb-docs-content (Конец документации)
    render(){
        return(
            <div className="content">
                <div className="content__title">
                    <div className="title__text">Калькулятор итоговой оценки</div>
                    <Question/>
                </div>
                <div className="content__table-wrapper">
                    <div className="table-wrapper__table">
                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Итерации</th>
                                    <th>По всем итерациям</th>
                                    <th>Коэффициент участия</th>
                                    <th>Оценка экспертной комиссии</th>
                                    <th>Итог</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Куратор: </strong>Шестеров Михаил Андреевич</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Клок Тимофей Алексеевич</td>
                                    <td className="center">
                                        <div className="table__input-place">
                                            <form>
                                                <input></input>
                                            </form>
                                        </div>
                                    </td>
                                    <td className="center">
                                            <form className="table__input-place">
                                                <input></input>
                                            </form>
                                    </td>
                                    <td className="center">
                                        <div className="table__input-place">
                                            <form>
                                                <input></input>
                                            </form>
                                        </div>
                                    </td>
                                    <td className="center">
                                        <div className="table__input-place">
                                            <form>
                                                <input></input>
                                            </form>
                                        </div>
                                    </td>
                                    <td className="center">
                                        <div className="table__input-place">
                                            <form>
                                                <input></input>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Моисеев Денис Александрович</td>
                                    <td className="center">
                                        <div className="table__input-place">
                                            <form>
                                                <input></input>
                                            </form>
                                        </div>
                                    </td>
                                    <td className="center">
                                            <form className="table__input-place">
                                                <input></input>
                                            </form>
                                    </td>
                                    <td className="center">
                                        <div className="table__input-place">
                                            <form>
                                                <input></input>
                                            </form>
                                        </div>
                                    </td>
                                    <td className="center">
                                        <div className="table__input-place">
                                            <form>
                                                <input></input>
                                            </form>
                                        </div>
                                    </td>
                                    <td className="center">
                                        <div className="table__input-place">
                                            <form>
                                                <input></input>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Несмелов Павел Евгеньевич</td>
                                    <td className="center">
                                        <div className="table__input-place">
                                            <form>
                                                <input></input>
                                            </form>
                                        </div>
                                    </td>
                                    <td className="center">
                                            <form className="table__input-place">
                                                <input></input>
                                            </form>
                                    </td>
                                    <td className="center">
                                        <div className="table__input-place">
                                            <form>
                                                <input></input>
                                            </form>
                                        </div>
                                    </td>
                                    <td className="center">
                                        <div className="table__input-place">
                                            <form>
                                                <input></input>
                                            </form>
                                        </div>
                                    </td>
                                    <td className="center">
                                        <div className="table__input-place">
                                            <form>
                                                <input></input>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Соколов Михаил Иванович</td>
                                    <td className="center">
                                        <div className="table__input-place">
                                            <form>
                                                <input></input>
                                            </form>
                                        </div>
                                    </td>
                                    <td className="center">
                                            <form className="table__input-place">
                                                <input></input>
                                            </form>
                                    </td>
                                    <td className="center">
                                        <div className="table__input-place">
                                            <form>
                                                <input></input>
                                            </form>
                                        </div>
                                    </td>
                                    <td className="center">
                                        <div className="table__input-place">
                                            <form>
                                                <input></input>
                                            </form>
                                        </div>
                                    </td>
                                    <td className="center">
                                        <div className="table__input-place">
                                            <form>
                                                <input></input>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Фокин Богдан Сергеевич</td>
                                    <td className="center">
                                        <div className="table__input-place">
                                            <form>
                                                <input></input>
                                            </form>
                                        </div>
                                    </td>
                                    <td className="center">
                                            <form className="table__input-place">
                                                <input></input>
                                            </form>
                                    </td>
                                    <td className="center">
                                        <div className="table__input-place">
                                            <form>
                                                <input></input>
                                            </form>
                                        </div>
                                    </td>
                                    <td className="center">
                                        <div className="table__input-place">
                                            <form>
                                                <input></input>
                                            </form>
                                        </div>
                                    </td>
                                    <td className="center">
                                        <div className="table__input-place">
                                            <form>
                                                <input></input>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className="table-wrapper__button">Рассчитать</div>
                </div>
            </div>
        )
    }
}