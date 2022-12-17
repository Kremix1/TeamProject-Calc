import {React, useState} from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'; 
//import Person from './Person';

const IterationInput = ({identify, inputKey, onChange, dataRow}) => {
    return <input value={dataRow[inputKey]} onChange={onChange} name={inputKey} identify={identify}/>
}

export default function TablePerson({isCalculate}) {
    const [dataRow, setDataRow] = useState({personName: '', identify: '', iteration: '', allIteration: '',
    coefficient: '', comission: '', total: '',})
    
      
    const onChange = (e) => {
        const {name, value} = e.target 
        setDataRow({[name]: value})
    }

    //<input name={item.identify} value={item.comission} onChange={console.log(1)}></input>






    const arrayName = [
        'Клок Тимофей Алексеевич',
        'Моисеев Денис Александрович',
        'Несмелов Павел Евгеньевич',
        'Соколов Михаил Иванович',
        'Фокин Богдан Сергеевич',
    ]

    const persons = [];
    for(let i = 0; i < arrayName.length; i++){
        let copy = Object.assign([], dataRow)
        copy.personName = arrayName[i]
        copy.identify = i;
        persons.push(copy)
    }




    //ToDo: Реализовать сложение массива(Чтобы впечатываемый текст добавлялся к имеющемуся)
    //const [test, setTest] = useState('')


    //ПЕРЕДАТЬ ПАРАМЕТР В ФУНКЦИЮ С ИВЕНТОМ .................................................................


    const arrayOfVariables = [
        {personName:'', identify:'', iteration:'', allIteration:'', coefficient:'', comission:''},
        {personName:'', identify:'', iteration:'', allIteration:'', coefficient:'', comission:''},
        {personName:'', identify:'', iteration:'', allIteration:'', coefficient:'', comission:''},
        {personName:'', identify:'', iteration:'', allIteration:'', coefficient:'', comission:''},
        {personName:'', identify:'', iteration:'', allIteration:'', coefficient:'', comission:''},
    ]

    const handleIteration = (value) => (event) =>{

        arrayOfVariables[0].iteration = event.target.value
        
        console.log(arrayOfVariables[0].iteration)
        //console.log(arrayOfVariables[identify])
    }

    if(isCalculate){
        return(
            <>
                {persons.map(item => 
                <tr key={item.identify}>
                <td>{item.personName}</td>
                <td className="center">
                    <div className="table__input-place">
                        <form>
                            <IterationInput identify={item.id} inputKey='iteration' onChange={onChange} dataRow={dataRow} />
                        </form>
                    </div>
                </td>
                <td className="center">
                        <form className="table__input-place">
                            <IterationInput inputKey='allIteration' onChange={onChange} dataRow={dataRow} />
                        </form>
                </td>
                <td className="center">
                    <div className="table__input-place">
                        <form>
                            <IterationInput inputKey='coefficient' onChange={onChange} dataRow={dataRow} />
                        </form>
                    </div>
                </td>
                <td className="center">
                    <div className="table__input-place">
                        <form>
                            <IterationInput inputKey='comission' onChange={onChange} dataRow={dataRow} />
                        </form>
                    </div>
                </td>
                <td className="center">
                    <div className="table__input-place">
                        <div className="table__total">

                        </div>
                    </div>
                </td>
            </tr>
            )}
            </>
        );
    }
    else{
        return(
            <>
                {persons.map(item => 
                <tr key={item.identify}>
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
            </tr>)}
            </>
        );
    }
}