import {React, useState} from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'; 
//import Person from './Person';

export default function TablePerson(isCalculate) {
    const [persons, setTest] = useState([
        {personName: 'Клок Тимофей Алексеевич'},
        {personName: 'Моисеев Денис Александрович'},
        {personName: 'Несмелов Павел Евгеньевич'},
        {personName: 'Соколов Михаил Иванович'},
        {personName: 'Фокин Богдан Сергеевич'},
    ])
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
                <td className="center">
                    <div className="table__input-place">
                        <form>
                            <input></input>
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