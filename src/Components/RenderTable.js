import React, {useState} from "react";
import '../null.scss';
import './RenderTable.scss'

const IterationInput = ({name, row, onChange}) => {
    return <input onSubmit={(e) => handleSubmit(e)} name={name} value={row[name]} onChange={(e) => onChange(e, row.identify)}/>
}

const TotalButton = (data, setData) => {
    setData(
        data.map((row) =>{
            //СЮДА ПИХАЕМ-С ФОРМУЛУ КАЛЬКУЛЯТОРА (ВМЕСТО СТРОКИ 15) |||||||
            
            
            row.total = Number(row.iteration) + Number(row.allIteration) + Number(row.coefficient) + Number(row.comission);
            
            
            if(row.total > 79)
                return({ ...row, totalColor: 'green'})
            if((40 < row.total) && (row.total < 61))
                return({ ...row, totalColor: 'yellow'})
            return({ ...row, totalColor: 'red'})
        })
    )
    console.log(data);
}

const IterationTableClose = () => {
    document.getElementById('itTable').classList.toggle('show');
}

const handleSubmit = (e) =>{
    e.preventDefault()
}

export const RenderTable = (props) => {

    const onChange = (e, rowId) => {
        const {name, value} = e.target
        props.setData(
            props.data.map((row)=>
                row.identify !== rowId ? row : { ...row, [name]: value }
            )
        );
    };
    if(props.isCalculate){
        return(
            <>
                {props.data.map(row => 
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
                    <td className="center">
                        <div className="table__input-place">
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <IterationInput name='comission' onChange={(e) => onChange(e, row.identify)} row={row} /> 
                            </form>
                        </div>
                    </td>
                    <td className="center">
                        <div className="table__input-place">
                            <div className={'table__total ' + row.totalColor}>{row.total}</div>
                        </div>
                    </td>
                </tr>
                )}
                <div className="table-wrapper__button" onClick={() => TotalButton(props.data, props.setData)}>Рассчитать</div>
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