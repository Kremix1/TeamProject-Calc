import {React, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../null.scss'
import './Calculate.scss'

const IterationOutput = ({name, row}) => {
    if(name === 'total')
        return <div className={'table__total ' + row.totalColor}>{row[name]}</div>
    return <div className={'table__output '}>{row[name]}</div>
}

const validateData = (dataItem) => {
    return ((dataItem.iterationAnalyze <= 100 && dataItem.iterationAnalyze >= 0 && (Number.isInteger(parseInt(dataItem.iterationAnalyze, 10)) || dataItem.iterationAnalyze == "")) &&
    (dataItem.iterationDesign <= 100 && dataItem.iterationDesign >= 0 && (Number.isInteger(parseInt(dataItem.iterationDesign, 10)) || dataItem.iterationDesign == "")) &&
    (dataItem.iterationDev <= 100 && dataItem.iterationDev >= 0 && (Number.isInteger(parseInt(dataItem.iterationDev, 10)) || dataItem.iterationDev == "")) &&
    (dataItem.iterationTest <= 100 && dataItem.iterationTest >= 0 && (Number.isInteger(parseInt(dataItem.iterationTest, 10)) || dataItem.iterationTest == "")) &&
    (dataItem.iterationPres <= 100 && dataItem.iterationPres >= 0 && (Number.isInteger(parseInt(dataItem.iterationPres, 10)) || dataItem.iterationPres == ""))) ? true : false;
}

const Advise = (data, setErrClass, setAdvise, setAdviseClass, setNoneClass) => {
    let maxSum = 0;
    for (var i = 0; i < data.length; i++) {
        if(!validateData(data[i])){
            setErrClass('err')
            setAdviseClass('advise-hide')
            return false;
        }
        setAdviseClass('advise')
        setErrClass('err-hide')
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
        console.log('1')
        setNoneClass('advise')
        setAdviseClass('advise-hide')
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
}

const handleSubmit = (e) =>{
    e.preventDefault()
}
let adviseString = []
export const AnalyzeTable = (props) => {
    const [noneClass, setNoneClass] = useState('advise-hide');
    const [adviseNone, setAdviseNone] = useState('Ничего уже не изменить, нужно было думать раньше!');
    const [advise, setAdvise] = useState('');
    const [err, setErr] = useState('Вводите в таблицу итераций Целые числа! (от 0 до 100)');
    const [errClass, setErrClass] = useState('err-hide')
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
                            <IterationOutput name='allIteration' row={row}/>
                        </form>
                </td>
                <td className="center">
                    <div className="table__input-place">
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <IterationOutput name='coefficient' row={row}/>
                        </form>
                    </div>
                </td>
                </tr>
            )}
        <div className="table-wrapper__button" onClick={() => Advise(props.dataInCalculate, setErrClass, setAdvise, setAdviseClass, setNoneClass)}>Получить совет</div>
        <div className={adviseClass}>
            {adviseString.map(row =>
                <div key={row}>{row}</div>
            )}
        </div>
        <div className={noneClass}>{adviseNone}</div>
        <div className={errClass}>{err}</div>
        </>
    );
}