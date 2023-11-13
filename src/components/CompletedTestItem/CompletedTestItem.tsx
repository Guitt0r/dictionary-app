import {FC, useState} from "react";
import {TestType} from "../../types/types.ts";

type Props = TestType

const CompletedTestItem: FC<Props> = ({score, questions}) => {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
    const handleNext = () => {
        if (currentQuestionIndex === questions.length - 1) setCurrentQuestionIndex(0)
        else setCurrentQuestionIndex(currentQuestionIndex + 1)
    }

    return (
        <div className='mx-auto '>
            <h1 className='text-5xl font-black text-center'>Test Score: {score}</h1>
            <div className='text-center'>
                <h1 className='text-5xl'>{questions[currentQuestionIndex].word}</h1>
                <div className=''>
                    {questions[currentQuestionIndex].answers.map(answer => (
                        <div key={answer} className={`
                        p-2 m-2 rounded border border-black w-full block
                        ${
                            questions[currentQuestionIndex].correctAnswer === answer
                                ? 'bg-green-700 text-white border-0'
                                : answer === questions[currentQuestionIndex].userAnswer ? 'bg-red-700 text-white border-0' : undefined
                        }
                        `}>
                            {answer}
                        </div>
                    ))}
                </div>
                <button className='w-full bg-emerald-700 mx-2 p-3 text-zinc-100 rounded-md hover:scale-105'
                        onClick={handleNext}>{currentQuestionIndex===(questions.length-1) ? 'Watch again' : 'Next'}
                </button>
            </div>
        </div>
    )
}
export default CompletedTestItem