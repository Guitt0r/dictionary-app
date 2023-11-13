import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {selectWords} from "../../redux/word.slice.ts";
import {useNavigate} from "react-router-dom";
import {useMemo, useState} from "react";
import {getQuestions} from "../../utils/getQuestions.ts";
import {addTest} from "../../redux/test.slice.ts";
import {AnsweredQuestionType} from "../../types/types.ts";


const TestPage = () => {

    const words = useAppSelector(selectWords)
    const questions = useMemo(() => getQuestions(words), [words])

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
    const [score, setScore] = useState<number>(0)
    const [answeredQuestions, setAnsweredQuestions] = useState<AnsweredQuestionType[]>([])
    const [isAnswered, setIsAnswered] = useState<boolean>(false)
    const [chosenAnswer, setChosenAnswer] = useState<string>('')

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const handleCheck = () => {
        setIsAnswered(true)
        setAnsweredQuestions([...answeredQuestions, {...questions[currentQuestionIndex], userAnswer: chosenAnswer}])
        if (questions[currentQuestionIndex].correctAnswer === chosenAnswer) {
            setScore(score + 1)
        }
    }
    const handleNext = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setIsAnswered(false)
        setChosenAnswer('')
    }

    const handleFinish = () => {
        dispatch(addTest({
            score,
            questions: answeredQuestions
        }))
        navigate('/result', {state: {score, questionsQty: questions.length}})
    }

    return (
        <div className='h-[100vh] md:w-1/2 mx-auto flex flex-col gap-4 justify-center items-center'>
            <button onClick={() => {
                let isConfirm = confirm('Are you sure?')
                if (!isConfirm) return;
                navigate('/')
            }} className='self-start mx-10 p-2 rounded shadow  max-h-min bg-amber-400'
            >
                Go home
            </button>
            <h1 className='text-5xl'>{questions[currentQuestionIndex].word}</h1>
            <div className='py-10 md:w-2/5 w-3/4 text-center'>
                {questions[currentQuestionIndex].answers.map(answer => (
                    <label key={answer} className={
                        ` p-2 m-2 rounded border border-black w-full block
                        ${isAnswered
                            ? answer === questions[currentQuestionIndex].correctAnswer
                                ? 'bg-green-700 text-white border-0'
                                : answer === chosenAnswer ? 'bg-red-700 text-white border-0' : undefined
                            : undefined}
                        ${!isAnswered && chosenAnswer === answer && 'bg-blue-700 text-white'}
                            `
                    } htmlFor={answer}>
                        <input
                            id={answer}
                            type='radio'
                            name='answers'
                            className='opacity-0'
                            disabled={isAnswered}
                            value={answer}
                            onChange={(e) => setChosenAnswer(e.target.value)}
                        />
                        {answer}

                    </label>

                ))}
            </div>
            <div className='w-2/5'>
                {
                    isAnswered
                        ? currentQuestionIndex === questions.length - 1
                            ? <button className='w-full bg-emerald-700 mx-2 p-3 text-zinc-100 rounded-md hover:scale-105'
                                      onClick={handleFinish}>Finish</button>
                            : <button className='w-full bg-emerald-700 mx-2 p-3 text-zinc-100 rounded-md hover:scale-105'
                                      onClick={handleNext}>Next</button>

                        : <button disabled={!chosenAnswer}
                                  className='w-full bg-emerald-700 mx-2 p-3 text-zinc-100 rounded-md hover:scale-105'
                                  onClick={handleCheck}>Check</button>
                }
            </div>
        </div>
    )
}
export default TestPage