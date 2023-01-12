import {React, useState} from "react";
import '../null.scss';
import './Calculate.scss'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Table from 'react-bootstrap/Table';
import './Prompt.scss';
import { RenderTable } from "./RenderTable";

const calculatePrompt = (prompt) => {
    switch(prompt){
        case "iteration":
            document.getElementById('iteration').classList.toggle('show-prompt')
            break;
        case "allIteration":
            document.getElementById('allIteration').classList.toggle('show-prompt')
            break;
        case "coefficient":
            document.getElementById('coefficient').classList.toggle('show-prompt')
            break;
        case "comission":
            document.getElementById('comission').classList.toggle('show-prompt')
            break;
        case "iterationAnalyze":
            document.getElementById('iterationAnalyze').classList.toggle('show-prompt')
            break;
        case "allIterationAnalyze":
            document.getElementById('allIterationAnalyze').classList.toggle('show-prompt')
            break;
        case "coefficientAnalyze":
            document.getElementById('coefficientAnalyze').classList.toggle('show-prompt')
            break;
    }
}

export { calculatePrompt };

export default function Calculate(props){
    const [data, setData] = useState(props.dataInCalculate);
    //ToDo: Сделать динамическое создание столбцов
    //https://react-bootstrap.netlify.app/components/table/#rb-docs-content (Конец документации)
        return(
            <div className="content">
                <div className="content__title">
                    <div id="title" className="title__text">Калькулятор итоговой оценки</div>
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
                                    <th><div className="table__title-wrapper"><div className="table__title">По всем итерациям</div>
                                            <div className="question" onClick={() => calculatePrompt("allIteration")}></div>
                                            <div id="allIteration" className="table-prompt-calc-wrapper">
                                                <div className="table-prompt-calc">
                                                    <div className="table-prompt-calc__content">
                                                        <div className="table-prompt-calc__text">Оценка по всем итерациям складывается по общему арифметическому из всех оценок каждой итерации</div>
                                                        <div className="table-prompt-calc__button" onClick={() => calculatePrompt("allIteration")}>Ок</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></th>
                                    <th><div className="table__title-wrapper"><div className="table__title">Коэффициент участия</div>
                                            <div className="question" onClick={() => calculatePrompt("coefficient")}></div>
                                            <div id="coefficient" className="table-prompt-calc-wrapper">
                                                <div className="table-prompt-calc">
                                                    <div className="table-prompt-calc__content">
                                                        <div className="table-prompt-calc__text">Коэффициент участия - коэффициент, отражающий степень участия студента в достижении результатов итерации проекта</div>
                                                        <div className="table-prompt-calc__button" onClick={() => calculatePrompt("coefficient")}>Ок</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></th>
                                    <th><div className="table__title-wrapper"><div className="table__title">Оценка экспертной комиссии</div>
                                            <div className="question" onClick={() => calculatePrompt("comission")}></div>
                                            <div id="comission" className="table-prompt-calc-wrapper">
                                                <div className="table-prompt-calc">
                                                    <div className="table-prompt-calc__content">
                                                        <div className="table-prompt-calc__text">Сводная оценка экспертной комиссии - это итоговый балл от экспертной комиссии, полученный студентами проектной команды, по результатам очной защиты проекта</div>
                                                        <div className="table-prompt-calc__button" onClick={() => calculatePrompt("comission")}>Ок</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></th>
                                    <th><div className="table__title-wrapper"><div className="table__title">Итог</div></div></th>
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