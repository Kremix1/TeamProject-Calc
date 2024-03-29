import { React, useState } from 'react';
import '../null.scss';
import './Faq.scss';

export const Faq = () => {
    const [questions, setQuestions] = useState([
        {
            question: 'Как пользоваться Калькулятором промежуточной оценки?',
            answer: <p>1)Проверить, остались ли ещё неоцененные итерации. <br/> 2)Ввести !ТОЛЬКО! имеющиеся баллы за пройденные итерации (Если стоят нули - пишем нули). <br/> 3)Оставить пустые поля в непройденных итерациях. <br/> 4)Нажать "Получить совет" и воспользоваться им</p>,
        },
        {
            question: 'Когда нужно использовать калькулятор, а когда анализатор?',
            answer: 'Калькулятор используется для предварительного представления оценки до защиты у комисси. Анализатор же используется с целью улучшить общую картину оценок, выставляемых внутри команды',
        },
        {
            question: 'Я пропустил оценку пары итераций, как узнать, как меня нужно оценивать?',
            answer: 'Воспользуйтесь Анализатором("Калькулятором промежуточной оценки") во вкладке "Калькуляторы"',
        },
        {
            question: 'Зачем нужен калькулятор?',
            answer: 'Калькулятор используется для того, чтобы была возможность предварительно представить оценку, с учетом оценивания комиссии, до защиты',
        },
        {
            question: 'Зачем нужен анализатор?',
            answer: 'Анализатор подскажет вам, как улучшить, либо исправить ситуацию, в которой не были оценены один или несколько членов команды за какие-либо итерации',
        },
        {
            question: 'Почему "Калькулятор промежуточной оценки" выдаёт максимальное оценивание студента в 30 баллов?',
            answer: 'Потому что максимальная взаимная оценка студентов = 30 баллам. Калькулятор даёт совет только для студентов, так как на мнение куратора мы не имеем право влиять',
        },
    ])
    
    const [cases, setCases] = useState([
        {
            case: 'Один или несколько студентов пропустили оценивание одной или нескольких итераций и хотят улучшить своё положение.',
            solution: 'Если ещё есть не оцененные итерации, то воспользоваться «Калькулятором промежуточной оценки» (он же «Анализатор) и следовать шагам из совета. Иначе – уже ничего не исправить.',
        },
        {
            case: 'Оценивание по всем итерациям закончилось и хотелось бы узнать сколько баллов выйдет у каждого студента в зависимости от оценки экспертной комиссии.',
            solution: 'Воспользоваться «Калькулятором итоговой оценки».',
        },
    ])

    return (
        <div className="wrapper">
            <div className="faq">
                <h1 className="faq__title">Это раздел FAQ</h1>
                <h2 className="faq__about">В данном разделе собраны наиболее задаваемые вопросы и ситуации.</h2>
                <div className="question-list">
                    {questions.map(item =>
                        <div key={item.id} className="question-list__item">
                            <div className="item__question">
                                <div className="question__img"></div>
                                <div className="question__body">{item.question}</div>
                            </div>
                            <div className="item__answer">{item.answer}</div>
                        </div>
                    )}
                </div>
                <div className="cases-list">
                    <div className="cases-list__title">Возможные ситуации:</div>
                    {cases.map(item =>
                        <div key={item.id} className='cases-list__item'>
                            <div className="item__case">
                                <div></div>
                                <div>{item.case}</div>
                            </div>
                            <div className="item__arrow"></div>
                            <div className="item__solution">{item.solution}</div>
                        </div>    
                    )}
                </div>
                    
            </div>
        </div>
    )
}