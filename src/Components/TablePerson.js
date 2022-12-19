import {React, useState} from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const IterationInput = ({name, row, onChange}) => {
    return <input name={name} value={row[name]} onChange={(e) => onChange(e, row.identify)}/>
}

const TotalButtonEl = (data, setData) => {
    return <div className="table-wrapper__button" onClick={() => TotalButton(data, setData)}>Рассчитать</div>
}

const TotalButton = (data, setData) => {
    console.log(data)
    data.map((item) =>{
        item.total = 100;
        console.log(item.total)
    })
}

const Advise = (data, setAdvise, setAdviseClass) => {
    //Сюда пихаем формулу для таблицы
    if(data[0].iteration == 1){
        console.log(data[0])
        setAdvise('На вот, посмотри')
        setAdviseClass('advise')
    }
    else{
        setAdviseClass('advise-hide')
    }
    
}

const TablePerson = ({isCalculate}) => {
    const [advise, setAdvise] = useState('');
    const [adviseClass, setAdviseClass] = useState('');

    const [dataInCalculate, setDataInCalculate] = useState([
        {
            personName: "Клок Тимофей Алексеевич",
            identify: "1",
            iteration: "0",
            allIteration: "0",
            coefficient: "0",
            comission: "0",
            total: "0",
          },
          {
            personName: "Моисеев Денис Александрович",
            identify: "2",
            iteration: "0",
            allIteration: "0",
            coefficient: "0",
            comission: "0",
            total: "0",
          },
          {
            personName: "Несмелов Павел Евгеньевич",
            identify: "3",
            iteration: "0",
            allIteration: "0",
            coefficient: "0",
            comission: "0",
            total: "0",
          },
          {
            personName: "Соколов Михаил Иванович",
            identify: "4",
            iteration: "0",
            allIteration: "0",
            coefficient: "0",
            comission: "0",
            total: "0",
          },
          {
            personName: "Фокин Богдан Сергеевич",
            identify: "5",
            iteration: "0",
            allIteration: "0",
            coefficient: "0",
            comission: "0",
            total: "0",
          },
    ])
    const [data, setData] = useState(dataInCalculate);
    
      
    const onChange = (e, rowId) => {
        const {name, value} = e.target
        setData(
            data.map((row)=>
                row.identify !== rowId ? row : { ...row, [name]: value }
            )
        );
    };

    const arrayName = [
        'Клок Тимофей Алексеевич',
        'Моисеев Денис Александрович',
        'Несмелов Павел Евгеньевич',
        'Соколов Михаил Иванович',
        'Фокин Богдан Сергеевич',
    ]

    if(isCalculate){
        return(
            <>
                {data.map(row => 
                <tr key={row.identify}>
                    <td>{row.personName}</td>
                    <td className="center">
                        <div className="table__input-place">
                            <form>
                                <IterationInput name='iteration' onChange={(e) => onChange(e, row.identify)} row={row} />
                            </form>
                        </div>
                    </td>
                    <td className="center">
                            <form className="table__input-place">
                                <IterationInput name='allIteration' onChange={(e) => onChange(e, row.identify)} row={row} />
                            </form>
                    </td>
                    <td className="center">
                        <div className="table__input-place">
                            <form>
                                <IterationInput name='coefficient' onChange={(e) => onChange(e, row.identify)} row={row} /> 
                            </form>
                        </div>
                    </td>
                    <td className="center">
                        <div className="table__input-place">
                            <form>
                                <IterationInput name='comission' onChange={(e) => onChange(e, row.identify)} row={row} /> 
                            </form>
                        </div>
                    </td>
                    <td className="center">
                        <div className="table__input-place">
                            <div className="table__total">{row.total}</div>
                        </div>
                    </td>
                </tr>
                )}
                <div className="table-wrapper__button" onClick={() => TotalButton(data, setData)}>Рассчитать</div>
            </>
        );
    }
    else{
        return(
            <>
                {data.map(row => 
                <tr key={row.identify}>
                <td>{row.personName}</td>
                <td className="center">
                    <div className="table__input-place">
                        <form>
                            <IterationInput name='iteration' onChange={(e) => onChange(e, row.identify)} row={row} /> 
                        </form>
                    </div>
                </td>
                <td className="center">
                        <form className="table__input-place">
                            <IterationInput name='allIteration' onChange={(e) => onChange(e, row.identify)} row={row} /> 
                        </form>
                </td>
                <td className="center">
                    <div className="table__input-place">
                        <form>
                            <IterationInput name='coefficient' onChange={(e) => onChange(e, row.identify)} row={row} /> 
                        </form>
                    </div>
                </td>
            </tr>)}
            <div className="table-wrapper__button" onClick={() => Advise(data, setAdvise, setAdviseClass)}>Получить совет</div>
            <div className={adviseClass}>{advise}</div>
            </>
        );
    }
}

export {TablePerson, TotalButton, TotalButtonEl}