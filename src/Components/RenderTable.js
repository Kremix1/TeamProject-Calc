import React from "react";
import '../null.scss';
import './RenderTable.scss'

const IterationInput = ({name, row, onChange}) => {
    return <input onSubmit={(e) => handleSubmit(e)} name={name} value={row[name]} onChange={(e) => onChange(e, row.identify)}/>
}

const TotalButton = (props) => {
    console.log(props.data)
    props.data.map((item) =>{
        item.total = 100;
        console.log(item.total)
    })
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
                            <div className="table__total">{row.total}</div>
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
                <div className="table-wrapper__button" onClick={() => TotalButton(props.data, props.setData)}>Рассчитать</div>
            </>
        )
    }
}