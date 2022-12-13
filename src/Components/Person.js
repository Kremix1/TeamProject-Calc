import React from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function Person(personName) {
    return(
        <tr>
            <td>{personName}</td>
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
    )    
}