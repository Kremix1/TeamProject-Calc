import {React, useState} from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { RenderTable } from "./RenderTable";

const IterationInput = ({name, row, onChange}) => {
    return <input placeholder="0" name={name} value={row[name]} onChange={(e) => onChange(e, row.identify)}/>
}

const Advise = (data, setAdvise, setAdviseClass) => {
    console.log(data)
    //Сюда пихаем формулу для таблицы ||||||||||||


    if(data[0].iteration == 1){
        console.log(data[0])
        setAdvise('На вот, посмотри')
        
        setAdviseClass('advise')
    }
    else{
        setAdviseClass('advise-hide')
    }
    
}

const handleSubmit = (e) =>{
    e.preventDefault()
}

export const TablePerson = (props) => {
    const [advise, setAdvise] = useState('');
    const [adviseClass, setAdviseClass] = useState('');

    
    //const [data, setData] = useState(props.dataInCalculate);
    
      
    const onChange = (e, rowId) => {
        const {name, value} = e.target
        props.setDataInCalculate(
            props.dataInCalculate.map((row)=>
                row.identify !== rowId ? row : { ...row, [name]: value }
            )
        );
        e.preventDefault()
    };

    return(
        <>
            {props.dataInCalculate.map(row => 
                <tr key={row.identify}>
                <td>{row.personName}</td>
                <td className="center">
                    <div className="table__input-place">
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <IterationInput name='iteration' onChange={(e) => onChange(e, row.identify)} row={row} /> 
                        </form>
                    </div>
                </td>
                <td className="center">
                        <form onSubmit={(e) => handleSubmit(e)} className="table__input-place">
                            <IterationInput name='allIteration' onChange={(e) => onChange(e, row.identify)} row={row} /> 
                        </form>
                </td>
                <td className="center">
                    <div className="table__input-place">
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <IterationInput name='coefficient' onChange={(e) => onChange(e, row.identify)} row={row} /> 
                        </form>
                    </div>
                </td>
                </tr>
            )}
        <div className="table-wrapper__button" onClick={() => Advise(props.dataInCalculate, setAdvise, setAdviseClass)}>Получить совет</div>
        <div className={adviseClass}>{advise}</div>
        </>
    );
}