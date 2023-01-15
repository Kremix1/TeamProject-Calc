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
    return ((dataItem.iterationAnalyze <= 100 && dataItem.iterationAnalyze >= 0 && (((dataItem.iterationAnalyze.indexOf('.') == -1)) || dataItem.iterationAnalyze == "")) &&
    (dataItem.iterationDesign <= 100 && dataItem.iterationDesign >= 0 && (((dataItem.iterationDesign.indexOf('.') == -1)) || dataItem.iterationDesign == "")) &&
    (dataItem.iterationDev <= 100 && dataItem.iterationDev >= 0 && (((dataItem.iterationDev.indexOf('.') == -1)) || dataItem.iterationDev == "")) &&
    (dataItem.iterationTest <= 100 && dataItem.iterationTest >= 0 && (((dataItem.iterationTest.indexOf('.') == -1)) || dataItem.iterationTest == "")) &&
    (dataItem.iterationPres <= 100 && dataItem.iterationPres >= 0 && (((dataItem.iterationPres.indexOf('.') == -1)) || dataItem.iterationPres == ""))) ? true : false;
}

const Advise = (data, setErrClass, setAdvise, setAdviseClass, setNoneClass, setAdviseNone) => {
    let maxSum = 0;
    for (var i = 0; i < data.length; i++) {
        if(!validateData(data[i])){
            setErrClass('err')
            setNoneClass('advise-hide')
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
        data[i].allIterationAnalyze = Math.round(iterationsSum);
        data[i].allIterationAnalyze = data[i].allIterationAnalyze === NaN ?  0 : data[i].allIterationAnalyze;

        maxSum = Math.max(maxSum, iterationsSum);
    }
    let isTableFilled = false
    if (data[0].iterationPres != "") {
        setNoneClass('advise')
        setAdviseClass('advise-hide')
        isTableFilled = true
    }
    else if (data[0].iterationDesign == "") {
        for (var i = 0; i < data.length; i++) {
            let predict =  ((maxSum - data[i].allIterationAnalyze) / (5 - 1)).toFixed(2);
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
            let predict = ((maxSum - data[i].allIterationAnalyze) / (5 - 2)).toFixed(2);
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
            let predict =  ((maxSum - data[i].allIterationAnalyze) / (5 - 3)).toFixed(2);
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
            let predict =  ((maxSum - data[i].allIterationAnalyze) / (5 - 4)).toFixed(2);
            if (predict > 30) {
                data[i].iterationPres = 30;
            }
            else {
                data[i].iterationPres = predict;
            }

        }
    }

    if (!isTableFilled) {
        adviseString = []
        for (var i = 0; i < data.length; i++) {
            adviseString.push("Студента " + data[i].personName + " нужно оценить всем на " + Math.round(data[i].iterationPres / 0.3) + " баллов в неоцененных итерациях.")
        }
        setAdviseClass('advise')
    }



    for (var i = 0; i < data.length; i++) {
        data[i].allIterationAnalyze = Math.round(Number(data[i].iterationAnalyze)
        + Number(data[i].iterationDesign)
        + Number(data[i].iterationDev)
        + Number(data[i].iterationTest)
        + Number(data[i].iterationPres));
        data[i].allIterationAnalyze = data[i].allIterationAnalyze === NaN ?  0 : data[i].allIterationAnalyze;
        data[i].coefficientAnalyze = (data[i].allIterationAnalyze / maxSum).toFixed(2);
        data[i].coefficientAnalyze = data[i].coefficientAnalyze === NaN ?  0 : data[i].coefficientAnalyze;
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
                            <IterationOutput name='allIterationAnalyze' row={row}/>
                        </form>
                </td>
                <td className="center">
                    <div className="table__input-place">
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <IterationOutput name='coefficientAnalyze' row={row}/>
                        </form>
                    </div>
                </td>
                </tr>
            )}
        <div className="table-wrapper__button" onClick={() => Advise(props.dataInCalculate, setErrClass, setAdvise, setAdviseClass, setNoneClass, setAdviseNone)}>Получить совет</div>
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