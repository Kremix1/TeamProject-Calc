import {React, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../null.scss'
import './Calculate.scss'
import { IterationTable } from "./IterationTable";


const IterationInput = ({name, row, onChange}) => {
    return <input placeholder="0" name={name} value={row[name]} onChange={(e) => onChange(e, row.identify)}/>
}

const Advise = (data, setAdvise, setAdviseClass) => {
    let maxSum = 0;
    for (var i = 0; i < data.length; i++) {
        let iterationsSum = Number(data[i].iterationAnalyze)
        + Number(data[i].iterationDesign)
        + Number(data[i].iterationDev)
        + Number(data[i].iterationTest)
        + Number(data[i].iterationPres);
        data[i].allIteration = Math.round(iterationsSum);
        maxSum = Math.max(maxSum, iterationsSum);
    }
    let isTableFilled = false
    if (data[0].iterationPres != "") {
        setAdvise('Ничего уже не изменить, нужно было думать раньше!')
        setAdviseClass('advise')
        isTableFilled = true
    }
    else if (data[0].iterationDesign == "") {
        for (var i = 0; i < data.length; i++) {
            let predict =  ((maxSum - data[i].allIteration) / (data.length - 1)).toFixed(2);
            if (predict > 30) {
                data[i].iterationDesign = 30;
                data[i].iterationDev = 30;
                data[i].iterationTest = 30;
                data[i].iterationPres = 30;
            }
            else {
                data[i].iterationDesign = predict;
                data[i].iterationDev = predict;
                data[i].iterationTest = predict;
                data[i].iterationPres = predict;
            }
        }
    }
    else if (data[0].iterationDev == "") {
        for (var i = 0; i < data.length; i++) {
            let predict = ((maxSum - data[i].allIteration) / (data.length - 2)).toFixed(2);
            if (predict > 30) {
                data[i].iterationDev = 30;
                data[i].iterationTest = 30;
                data[i].iterationPres = 30;
            } else {
                data[i].iterationDev = predict;
                data[i].iterationTest = predict;
                data[i].iterationPres = predict;
            }
        }
    }
    else if (data[0].iterationTest == "") {
        for (var i = 0; i < data.length; i++) {
            let predict =  ((maxSum - data[i].allIteration) / (data.length - 3)).toFixed(2);
            if (predict > 30) {
                data[i].iterationTest = 30;
                data[i].iterationPres = 30;
            }
            else {
                data[i].iterationTest = predict;
                data[i].iterationPres = predict;
            }
        }
    }
    else if (data[0].iterationPres == "") {
        for (var i = 0; i < data.length; i++) {
            let predict =  ((maxSum - data[i].allIteration) / (data.length - 4)).toFixed(2);
            if (predict > 30) {
                data[i].iterationPres = 30;
            }
            else {
                data[i].iterationPres = predict;
            }

        }
    }

    if (!isTableFilled) {
        for (var i = 0; i < data.length; i++) {
            adviseString.push("Студента " + data[i].personName + " нужно оценить всем на " + Math.round(data[i].iterationPres / 0.3) + " баллов в неоцененных итерациях.")
        }
        setAdvise(adviseString)
        setAdviseClass('advise')
    }



    for (var i = 0; i < data.length; i++) {
        data[i].allIteration = Math.round(Number(data[i].iterationAnalyze)
        + Number(data[i].iterationDesign)
        + Number(data[i].iterationDev)
        + Number(data[i].iterationTest)
        + Number(data[i].iterationPres));
        data[i].coefficient = (data[i].allIteration / maxSum).toFixed(2);
    }

    // if(data[0].iteration == 1){
    //     setAdvise('На вот, посмотри')
    //     setAdviseClass('advise')
    // }
    // else{
    //     setAdviseClass('advise-hide')
    // }

}

const handleSubmit = (e) =>{
    e.preventDefault()
}
let adviseString = []
export const AnalyzeTable = (props) => {
    const [advise, setAdvise] = useState('');
    const [adviseClass, setAdviseClass] = useState('');
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
                    <div className="table__input-place disable"></div>
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
        <div className={adviseClass}>
            {adviseString.map(row =>
                <div key={row}>{row}</div>
                )}
        </div>
        </>
    );
}