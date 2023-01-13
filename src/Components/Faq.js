import { React, useState } from 'react';
import '../null.scss';
import './Faq.scss';

export const Faq = () => {
    const [questions, setQuestions] = useState([
        {
            question: 'Когда нужно использовать калькулятор, а когда анализатор?',
            answer: 'Калькулятор используется для предварительного представления оценки до защиты у комисси. <br/>Анализатор же используется с целью улучшить общую картину оценок, выставляемых внутри команды',
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
    return (
        <div className="wrapper">
            <div className="faq">
                <h1 className="faq__title">Это раздел FAQ</h1>
                <h2 className="faq__about">В данном разделе собраны наиболее задаваемые вопросы.</h2>
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
                    <div className="question-list__cases">Частые ситуации:</div>
                </div>
            </div>
        </div>
    )
}