import {React, useState} from "react";
import '../null.scss';
import './Calculate.scss'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Table from 'react-bootstrap/Table';
import Question from "./Assets/Question";
import './Prompt.scss';
import {TablePerson} from './TablePerson';
import { RenderTable } from "./RenderTable";

export default function Calculate(props){
    const [data, setData] = useState(props.dataInCalculate);
    //ToDo: Сделать динамическое создание столбцов
    //https://react-bootstrap.netlify.app/components/table/#rb-docs-content (Конец документации)
        return(
            <div className="content">
                <div className="content__title">
                    <div id="title" className="title__text">Калькулятор итоговой оценки</div>
                    <Question isCalculate={true}/>
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
                                </tr>
                                <RenderTable isCalculate={true} data={data} setData={setData} />
                            </tbody>
                        </Table>
                    </div>

                </div>
            </div>
    )
}
//<div className="table-wrapper__button" onClick={TotalButton(data, setData)}>Рассчитать</div>