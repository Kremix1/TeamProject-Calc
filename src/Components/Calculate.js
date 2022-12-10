import React, { Component, useState } from "react";
import '../null.scss';
import './Calculate.scss'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Table from 'react-bootstrap/Table';
import Question from "./Assets/Question";
import './Prompt.scss';



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
                    <div id="title" className="title__text">Калькулятор итоговой оценки</div>
                    <Question/>
                    <div id="prompt" className='content__prompt prompt-first'>
                        <div className='prompt__arrow'></div>
                        <div className='prompt__body'>Это калькулятор итоговой оценки, в него можно внести предпологаемые вводные данные оценок по Итерациям, Коэффициент участия, Сводную оценку комиссии и посмотреть, что будет в итоге</div>
                    </div>
                </div>
                <div className="content__table-wrapper">
                    <div className="table-wrapper__table">
                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th><div className="table__title-wrapper"><div className="table__title">Итерации</div><div className="question"></div></div></th>
                                    <th><div className="table__title-wrapper"><div className="table__title">По всем итерациям</div><div className="question"></div></div></th>
                                    <th><div className="table__title-wrapper"><div className="table__title">Коэффициент участия</div><div className="question"></div></div></th>
                                    <th><div className="table__title-wrapper"><div className="table__title">Оценка экспертной комиссии</div><div className="question"></div></div></th>
                                    <th><div className="table__title-wrapper"><div className="table__title">Итог</div><div className="question"></div></div></th>
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
                                            <div className="table__total"></div>
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
                                            <div className="table__total"></div>
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
                                            <div className="table__total"></div>
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
                                            <div className="table__total"></div>
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
                                            <div className="table__total"></div>
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