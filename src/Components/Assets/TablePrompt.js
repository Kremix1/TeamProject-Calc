import {React} from "react";
import '../../null.scss';
import '../Prompt.scss';
import './TablePrompt.scss'

export default function TablePrompt(isCalculate){
    const closePrompt = () => {
        document.querySelectorAll('#title').forEach((title)=>{
            title.classList.toggle('title-index')
        })

        document.querySelectorAll('#prompt').forEach((title)=>{
            title.classList.toggle('show-prompt')
        })
        document.querySelector('.prompt-wrapper').classList.toggle('visibility-prompt');
    }
    if(isCalculate)
    return(
        <div className='prompt-wrapper'>
            <div className='prompt-wrapper__content'>
                <div className='content__prompt prompt-first'>
                    <div className='prompt__arrow'></div>
                    <div className='prompt__body'>Это калькулятор итоговой оценки, в него можно внести предпологаемые вводные данные оценок по Итерациям, Коэффициент участия, Сводную оценку комиссии и посмотреть, что будет в итоге</div>
                </div>
                <div className='content__prompt prompt-second'>
                    <div className='prompt__arrow'></div>
                    <div className='prompt__body'></div>
                </div>
                <div className='content__close' onClick={closePrompt}>Понятно/Далее</div>
            </div>
        </div>
    )
    else{
        <div className='prompt-wrapper'>
            <div className='prompt-wrapper__content'>
                <div className='content__prompt prompt-first'>
                    <div className='prompt__arrow'></div>
                    <div className='prompt__body'>Это калькулятор итоговой оценки, в него можно внести предпологаемые вводные данные оценок по Итерациям, Коэффициент участия, Сводную оценку комиссии и посмотреть, что будет в итоге</div>
                </div>
                <div className='content__prompt prompt-second'>
                    <div className='prompt__arrow'></div>
                    <div className='prompt__body'></div>
                </div>
                <div className='content__close' onClick={closePrompt}>Понятно/Далее</div>
            </div>
        </div>
    }
}