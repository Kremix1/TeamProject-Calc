import {React, Component, useState} from "react";
import '../null.scss';
import './Calculate.scss'
import './Analyzer.scss'
import './Prompt.scss'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Table from 'react-bootstrap/Table';
import Question from "./Assets/Question";
import {TablePerson} from './TablePerson';
import {IterationTable} from "./IterationTable";

export default function Analyzer(props){
    //https://react-bootstrap.netlify.app/components/table/#rb-docs-content (Конец документации)
    return(
        <div className="content">
            <div className="content__title">
                <div id="title" className="title__text">Калькулятор промежуточной оценки</div>
                <Question isCalculate={false}/>
                <div id="prompt" className='content__prompt prompt-first'>
                    <div className='prompt__arrow'></div>
                    <div className='prompt__body'>Это калькулятор промежуточной оценки, в него можно внести предпологаемые вводные данные оценок по Итерациям и Коэффициент участия. После чего калькулятор подскажет, как максимизировать свои баллы!</div>
                </div>
            </div>
            <div className="content__table-wrapper">
                <div className="table-wrapper__table">
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th></th>
                                <th><div className="table__title-wrapper"><div className="table__title" onClick={() => IterationTable(props.dataInCalculate, props.setDataInCalculate)}>Итерации(Нажми)</div><div className="question"></div></div></th>
                                <th><div className="table__title-wrapper"><div className="table__title">По всем итерациям</div><div className="question"></div></div></th>
                                <th><div className="table__title-wrapper"><div className="table__title">Коэффициент участия</div><div className="question"></div></div></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Куратор: </strong>Шестеров Михаил Андреевич</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <TablePerson isCalculate={false} dataInCalculate={props.dataInCalculate}/>
                        </tbody>
                    </Table>
                </div>

            </div>
        </div>
    )
}


//<div className="table-wrapper__button">Получить совет</div>