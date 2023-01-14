import React, {useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { NavbarLeft } from './Components/Navbar';
import Header from './Components/Header';
import Calculate from './Components/Calculate';
import Analyzer from './Components/Analyzer';
import { Faq } from './Components/Faq';

function App() {
  const [page, setPage] = useState('calculates')
  const [dataInCalculate, setDataInCalculate] = useState([
    {
        personName: "Клок Тимофей Алексеевич",
        identify: "1",
        iteration: "",
        allIteration: "",
        coefficient: "",
        comission: "",
        total: "0",
        iterationAnalyze: "",
        iterationDesign: "",
        iterationDev: "",
        iterationTest: "",
        iterationPres: "",
        totalColor: "red",
      },
      {
        personName: "Моисеев Денис Александрович",
        identify: "2",
        iteration: "",
        allIteration: "",
        coefficient: "",
        comission: "",
        total: "0",
        iterationAnalyze: "",
        iterationDesign: "",
        iterationDev: "",
        iterationTest: "",
        iterationPres: "",
        totalColor: "red",
      },
      {
        personName: "Несмелов Павел Евгеньевич",
        identify: "3",
        iteration: "",
        allIteration: "",
        coefficient: "",
        comission: "",
        total: "0",
        iterationAnalyze: "",
        iterationDesign: "",
        iterationDev: "",
        iterationTest: "",
        iterationPres: "",
        totalColor: "red",
      },
      {
        personName: "Соколов Михаил Иванович",
        identify: "4",
        iteration: "",
        allIteration: "",
        coefficient: "",
        comission: "",
        total: "0",
        iterationAnalyze: "",
        iterationDesign: "",
        iterationDev: "",
        iterationTest: "",
        iterationPres: "",
        totalColor: "red",
      },
      {
        personName: "Фокин Богдан Сергеевич",
        identify: "5",
        iteration: "",
        allIteration: "",
        coefficient: "",
        comission: "",
        total: "0",
        iterationAnalyze: "",
        iterationDesign: "",
        iterationDev: "",
        iterationTest: "",
        iterationPres: "",
        totalColor: "red",
      },
])
  switch(page){
    case "calculates":
      return(
        <>
          <div className='wrapper'>
            <NavbarLeft page={page} setPage={setPage}/>
            <div className='wrapper__content'>
              <Header />
              <div className="wrapper__inner-content">
                <p><a href="#" className='inner-content__link'>Список проектов</a> {'>'}  21/ЛКП-1579-2022. Создание калькулятора оценок в Teamproject 2  (2)</p>
                <div className='header-message'>
                <div className='flag'></div>
                  <h2 className='header-message__body'>Баллы куратора не учитываются при формировании коэффициента участия</h2>
                <div className='flag'></div>
                </div>
                <Calculate dataInCalculate={dataInCalculate} setDataInCalculate={setDataInCalculate}/>
                <Analyzer dataInCalculate={dataInCalculate} setDataInCalculate={setDataInCalculate}/>
              </div>
            </div>
          </div>
        </>
      )
    case "faq":
      return (
        <>
          <div className='wrapper'>
            <NavbarLeft page={page} setPage={setPage}/>
            <div className='wrapper__content'>
              <Header />
              <div className="wrapper__inner-content">
                <Faq />
              </div>
            </div>
          </div>
        </>
      )
  }
}

export const pages = (page, setPage) => {
  setPage(page)
}

export default App;
