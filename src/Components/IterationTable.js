import React, {useState} from "react";
import { RenderTable } from "./RenderTable";
import './IterationTable.scss'
import Table from 'react-bootstrap/Table';
import Question from "./Assets/Question";
import {TablePerson} from './TablePerson';

export const IterationTable = (props) => {
    return(
        <div id="itTable" className="content black">
            <div className="content__title iteration-title">
                <div id="title" className="title__text">Оценки за каждую итерацию</div>
                <Question />
                <div id="prompt" className='content__prompt prompt-first'>
                    <div className='prompt__arrow'></div>
                    <div className='prompt__body'>Это калькулятор промежуточной оценки, в него можно внести предпологаемые вводные данные оценок по Итерациям и Коэффициент участия. После чего калькулятор подскажет, как максимизировать свои баллы!</div>
                </div>
            </div>
            <div className="content__table-wrapper iteration-table">
                <div className="iteration-table__border">
                    <div className="table-wrapper__table">
                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th><div className="table__title-wrapper"><div className="table__title">Анализ</div><div className="question"></div></div></th>
                                    <th><div className="table__title-wrapper"><div className="table__title">Проектирование</div><div className="question"></div></div></th>
                                    <th><div className="table__title-wrapper"><div className="table__title">Разработка</div><div className="question"></div></div></th>
                                    <th><div className="table__title-wrapper"><div className="table__title">Тестирование</div><div className="question"></div></div></th>
                                    <th><div className="table__title-wrapper"><div className="table__title">Презентация</div><div className="question"></div></div></th>
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
                                <RenderTable isCalculate={false} data={props.dataInCalculate} setData={props.setDataInCalculate}/>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}