import  {React} from "react";
import '../../null.scss';
import './Question.scss'
import TablePrompt from "./TablePrompt";

//ToDo: Разобраться, почему не возвращает компонент, но возвращает лог
export default function Question(isCalculate){
    if(isCalculate){
        return(
            <div className="question" onClick={()=>{console.log('111')}}>
                <div className="question__inner"></div>
            </div>
        )
    }
    else{
        return(
            <div className="question" onClick={()=>{console.log('222');return(<TablePrompt isCalculate={isCalculate}/>)}}>
                <div className="question__inner"></div>
            </div>
        )
    }
}