import {React, useState} from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'; 
//import Person from './Person';

export default function TablePerson({isCalculate}) {
    const [persons, setTest] = useState([
        {personName: 'Клок Тимофей Алексеевич', id:1, iteration:'', allIteration:'', coefficient:'', comission:'', total:''},
        {personName: 'Моисеев Денис Александрович', id:2, iteration:'', allIteration:'', coefficient:'', comission:'', total:''},
        {personName: 'Несмелов Павел Евгеньевич', id:3, iteration:'', allIteration:'', coefficient:'', comission:'', total:''},
        {personName: 'Соколов Михаил Иванович', id:4, iteration:'', allIteration:'', coefficient:'', comission:'', total:''},
        {personName: 'Фокин Богдан Сергеевич', id:5, iteration:'', allIteration:'', coefficient:'', comission:'', total:''},
    ])


    //ToDo: Реализовать сложение массива(Чтобы впечатываемый текст добавлялся к имеющемуся)
    const handleChange = (event) =>{
        console.log(event.target.value)
    }

    if(isCalculate){
        return(
            <>
                {persons.map(item => 
                <>
                <tr>
                <td>{item.personName}</td>
                <td className="center">
                    <div className="table__input-place">
                        <form>
                            <input value={item.iteration} onInput={handleChange}></input>
                        </form>
                    </div>
                </td>
                <td className="center">
                        <form className="table__input-place">
                            <input value={item.allIteration} onChange={handleChange}></input>
                        </form>
                </td>
                <td className="center">
                    <div className="table__input-place">
                        <form>
                            <input value={item.coefficient} onChange={handleChange}></input>
                        </form>
                    </div>
                </td>
                <td className="center">
                    <div className="table__input-place">
                        <form>
                            <input value={item.comission} onChange={handleChange}></input>
                        </form>
                    </div>
                </td>
                <td className="center">
                    <div className="table__input-place">
                        <div className="table__total"></div>
                    </div>
                </td>
            </tr>
                </>)}
            </>
        );
    }
    else{
        return(
            <>
                {persons.map(item => 
                <>
                <tr>
                <td>{item.personName}</td>
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
            </tr>
                </>)}
            </>
        );
    }
}