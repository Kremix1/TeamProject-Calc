import { React, useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import '../null.scss';
import './RenderTable.scss'

const IterationInput = ({name, row, onChange}) => {
    return <input placeholder="0" onSubmit={(e) => handleSubmit(e)} name={name} value={row[name]} onChange={(e) => onChange(e, row.identify)}/>
}

const IterationOutput = ({name, row}) => {
    if(name === 'total')
        return <div className={'table__total ' + row.totalColor}>{row[name]}</div>
    return <div className={'table__output '}>{row[name]}</div>
}

const validateData = (dataItem) => {
    return ((dataItem.allIteration <= 500 && dataItem.allIteration >= 0 && (dataItem.allIteration.indexOf('.') == -1) && (!dataItem.allIteration == "")) &&
        (dataItem.comission <= 100 && dataItem.comission >= 0 && (dataItem.comission.indexOf('.') == -1)  || (!dataItem.comission == ""))) ? true : false;
}

const TotalButton = (data, setData, setErrClass) => {
    var maxIteration = 0;
    for (var i = 0; i < data.length; i++) {
        if(!validateData(data[i])){
            setErrClass('err')
            return false;
        }
        setErrClass('err-hide')
        maxIteration = Math.max(maxIteration, data[i].allIteration)
    }
    setData(
        data.map((row) =>{
            row.coefficient = (row.allIteration / maxIteration).toFixed(2)
            row.total = Math.round(row.comission * row.coefficient)
            if(row.total >= 80)
                return({ ...row, totalColor: 'green'})
            else if ((row.total >= 60) && (row.total < 80))
                return({ ...row, totalColor: 'yellow'})
            else if ((row.total >= 40) && (row.total < 60))
                return({ ...row, totalColor: 'red'})
            else
                return({ ...row, totalColor: 'gray'})
        })
    )
}

const IterationTableClose = () => {
    document.getElementById('itTable').classList.toggle('show');
}

const handleSubmit = (e) =>{
    e.preventDefault()
}

export const RenderTable = (props) => {
    const [err, setErr] = useState('Вводите в таблицу Целые Числа! (от 0 до 100). "По всем итерациям" - вводите от 0 до 500')
    const [errClass, setErrClass] = useState('err-hide');
    const onChange = (e, rowId) => {
        const {name, value} = e.target
        props.setData(
            props.data.map((row)=>
                row.identify !== rowId ? row : { ...row, [name]: value }
            )
        );
    };
    const changeComission = (e) => {
        props.setComission(e.target.value)
        const {name, value} = e.target
        props.setData(
            props.data.map((row) =>
                row = {...row, [name]: value}
            )
        );
    }
    if(props.isCalculate){
        return(
            <>
                {props.data.map(row => 
                <tr key={row.identify}>
                    <td>{row.personName}</td>
                    <td className="center">
                            <form onSubmit={(e) => handleSubmit(e)} className="table__input-place">
                                <IterationInput name='allIteration' onChange={(e) => onChange(e, row.identify)} row={row} />
                            </form>
                    </td>
                    <td className="center">
                        <div className="table__input-place">
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <IterationOutput name='coefficient' row={row}/>
                            </form>
                        </div>
                    </td>
                    <td className="center">
                        <div className="table__input-place">
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <input placeholder="0" onSubmit={(e) => handleSubmit(e)} name={'comission'} value={props.comission} onChange={(e) => changeComission(e)}/>
                            </form>
                        </div>
                    </td>
                    <td className="center">
                        <div className="table__input-place">
                            <IterationOutput name='total' row={row}/>
                        </div>
                    </td>
                </tr>
                )}
                <div className="table-wrapper__button" onClick={() => TotalButton(props.data, props.setData, setErrClass)}>Рассчитать</div>
                <div className={errClass}>{err}</div>
            </>
        );
    }
    else{
        return(
            <>
                {props.data.map(row => 
                    <tr key={row.identify}>
                    <td>{row.personName}</td>
                    <td className="center">
                        <div className="table__input-place">
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <IterationInput name='iterationAnalyze' onChange={(e) => onChange(e, row.identify)} row={row} /> 
                            </form>
                        </div>
                    </td>
                    <td className="center">
                            <form onSubmit={(e) => handleSubmit(e)} className="table__input-place">
                                <IterationInput name='iterationDesign' onChange={(e) => onChange(e, row.identify)} row={row} /> 
                            </form>
                    </td>
                    <td className="center">
                        <div className="table__input-place">
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <IterationInput name='iterationDev' onChange={(e) => onChange(e, row.identify)} row={row} /> 
                            </form>
                        </div>
                    </td>
                    <td className="center">
                        <div className="table__input-place">
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <IterationInput name='iterationTest' onChange={(e) => onChange(e, row.identify)} row={row} /> 
                            </form>
                        </div>
                    </td>
                    <td className="center">
                        <div className="table__input-place">
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <IterationInput name='iterationPres' onChange={(e) => onChange(e, row.identify)} row={row} /> 
                            </form>
                        </div>
                    </td>
                    </tr>
                )}
                <div className="table-wrapper__button save-button" onClick={() => IterationTableClose()}>Запомнить</div>
            </>
        )
    }
}