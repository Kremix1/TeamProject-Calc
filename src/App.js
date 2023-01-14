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
  const [key, setKey] = useState('');
  const [comission, setComission] = useState('');
  const [dataInCalculate, setDataInCalculate] = useState([
    {
        personName: "Студент 1",
        identify: "1",
        iteration: "",
        allIteration: "",
        coefficient: "",
        comission: comission,
        total: "0",
        iterationAnalyze: "",
        iterationDesign: "",
        iterationDev: "",
        iterationTest: "",
        iterationPres: "",
        totalColor: "red",
      },
      {
        personName: "Студент 2",
        identify: "2",
        iteration: "",
        allIteration: "",
        coefficient: "",
        comission: comission,
        total: "0",
        iterationAnalyze: "",
        iterationDesign: "",
        iterationDev: "",
        iterationTest: "",
        iterationPres: "",
        totalColor: "red",
      },
      {
        personName: "Студент 3",
        identify: "3",
        iteration: "",
        allIteration: "",
        coefficient: "",
        comission: comission,
        total: "0",
        iterationAnalyze: "",
        iterationDesign: "",
        iterationDev: "",
        iterationTest: "",
        iterationPres: "",
        totalColor: "red",
      },
      {
        personName: "Студент 4",
        identify: "4",
        iteration: "",
        allIteration: "",
        coefficient: "",
        comission: comission,
        total: "0",
        iterationAnalyze: "",
        iterationDesign: "",
        iterationDev: "",
        iterationTest: "",
        iterationPres: "",
        totalColor: "red",
      },
      {
        personName: "Студент 5",
        identify: "5",
        iteration: "",
        allIteration: "",
        coefficient: "",
        comission: comission,
        total: "0",
        iterationAnalyze: "",
        iterationDesign: "",
        iterationDev: "",
        iterationTest: "",
        iterationPres: "",
        totalColor: "red",
      },
  ])
  const addStudent = (dataInCalculate, setDataInCalculate) => {
    let id = dataInCalculate.length + 1;
    if(id > 10)
      return (alert('В вашей команде не может быть больше 10 человек'));
    setDataInCalculate([...dataInCalculate, {
      personName: "Студент " + id,
      identify: id.toString(),
      iteration: "",
      allIteration: "",
      coefficient: "",
      comission: comission,
      total: "0",
      iterationAnalyze: "",
      iterationDesign: "",
      iterationDev: "",
      iterationTest: "",
      iterationPres: "",
      totalColor: "red",
    }]);
    setKey(Math.random());
  }
  const removeStudent = (dataInCalculate, setDataInCalculate) => {
    let id = dataInCalculate.length;
    if(id < 2)
      return (alert('В вашей команде не может быть меньше 1 человека'));
    setDataInCalculate(dataInCalculate.slice(0, dataInCalculate.length - 1));
    setKey(Math.random());
  }
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
                <div className="add-student" onClick={() => addStudent(dataInCalculate, setDataInCalculate)}>Добавить студента</div>
                <div className="remove-student" onClick={() => removeStudent(dataInCalculate, setDataInCalculate)}>Удалить студента</div>
                <Calculate key={key} dataInCalculate={dataInCalculate} setDataInCalculate={setDataInCalculate} comission={comission} setComission={setComission}/>
                <div className='header-message'>
                  <div className='flag'></div>
                    <h2 className='header-message__body'>"Анализатор" используется, если ещё остались неоцененные итерации</h2>
                  <div className='flag'></div>
                </div>
                <Analyzer key={key + 1} dataInCalculate={dataInCalculate} setDataInCalculate={setDataInCalculate}/>
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

export const pages = (page, setPage, toggleNavbar) => {
  setPage(page)
  toggleNavbar();
}

export default App;
