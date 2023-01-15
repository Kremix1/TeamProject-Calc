import {React, Component, useState} from "react";
import '../null.scss';
import './Calculate.scss'
import './Analyzer.scss'
import './Prompt.scss'
import './IterationTable.scss'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Table from 'react-bootstrap/Table';
import {AnalyzeTable} from './AnalyzeTable';
import {IterationTable} from "./IterationTable";
import {calculatePrompt} from "./Calculate";

const showIterationTable = (render, setRender) => {
    setRender(!render)
    document.getElementById('itTable').classList.toggle('show');
}

export default function Analyzer(props){
    const [render, setRender] = useState(false);
    const [dataAnalyze, setDataAnalyze] = useState(props.dataInCalculate)
    //https://react-bootstrap.netlify.app/components/table/#rb-docs-content (Конец документации)
    return(
        <>
            <IterationTable dataInCalculate={dataAnalyze} setDataInCalculate={setDataAnalyze}/>
            <div className="content">
                <div className="content__title">
                    <div id="title" className="title__text">Калькулятор промежуточной оценки</div>
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
                                    <th><div className="table__title-wrapper"><div className="table__title button" onClick={() => showIterationTable(render, setRender)}>Итерации(Нажми)</div>
                                        <div className="question" onClick={() => calculatePrompt("iterationAnalyze")}></div>
                                        <div id="iterationAnalyze" className="table-prompt-analyze-wrapper">
                                            <div className="table-prompt">
                                                <div className="table-prompt__content">
                                                    <div className="table-prompt__text">Таблица с вводом оценок по каждой конкретной итерации</div>
                                                    <div className="table-prompt__button" onClick={() => calculatePrompt("iterationAnalyze")}>Ок</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></th>
                                    <th><div className="table__title-wrapper"><div className="table__title">По всем итерациям</div>
                                        <div className="question" onClick={() => calculatePrompt("allIterationAnalyze")}></div>
                                        <div id="allIterationAnalyze" className="table-prompt-analyze-wrapper">
                                            <div className="table-prompt">
                                                <div className="table-prompt__content">
                                                    <div className="table-prompt__text">Оценка по всем итерациям складывается по общему арифметическому из всех оценок каждой итерации</div>
                                                    <div className="table-prompt__button" onClick={() => calculatePrompt("allIterationAnalyze")}>Ок</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></th>
                                    <th><div className="table__title-wrapper"><div className="table__title">Коэффициент участия</div>
                                        <div className="question" onClick={() => calculatePrompt("coefficientAnalyze")}></div>
                                        <div id="coefficientAnalyze" className="table-prompt-analyze-wrapper">
                                            <div className="table-prompt">
                                                <div className="table-prompt__content">
                                                    <div className="table-prompt__text">Коэффициент участия - коэффициент, отражающий степень участия студента в достижении результатов итерации проекта</div>
                                                    <div className="table-prompt__button" onClick={() => calculatePrompt("coefficientAnalyze")}>Ок</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Куратор: </strong>Шестеров Михаил Андреевич</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <AnalyzeTable isCalculate={false} dataInCalculate={dataAnalyze} setDataInCalculate={setDataAnalyze}/>
                            </tbody>
                        </Table>
                    </div>

                </div>
            </div>
        </>
    )
}