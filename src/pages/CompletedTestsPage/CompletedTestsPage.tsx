import {useAppSelector} from "../../redux/store.ts";
import {selectAveragePerformance, selectTests} from "../../redux/test.slice.ts";
import CompletedTestItem from "../../components/CompletedTestItem/CompletedTestItem.tsx";
import {useState} from "react";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import {NavLink} from "react-router-dom";

const CompletedTestsPage = () => {
    const [activeTest, setActiveTest] = useState<number | null>()
    const tests = useAppSelector(selectTests)
    const {score, questionsQty} = useAppSelector(selectAveragePerformance)
    return (
        <div className='text-center'>
            <h1 className='text-5xl  font-black my-10'>Completed tests</h1>
            <div className='md:w-1/2 w-3/4 mx-auto md:grid md:grid-cols-2 md:gap-4 md:justify-center'>
                <div className='flex flex-col items-center gap-4'>
                    {tests.map((test, index) => (
                        <div key={index}>
                            <button onClick={() => {
                                if (activeTest === index) setActiveTest(null)
                                else setActiveTest(index)
                            }} className='text-5xl px-4 rounded border shadow-md '>
                                Test#{index}
                            </button>
                            {index === activeTest && <CompletedTestItem score={test.score} questions={test.questions}/>}
                        </div>
                    ))}
                </div>
                <div>
                    <h3 className='text-2xl'>
                        Average Performance: {score} / {questionsQty}
                    </h3>
                    <div className='max-w-96 p-4 '>
                        <CircularProgressbar styles={buildStyles({
                            strokeLinecap: 'butt',
                            pathColor: '#16a34a',
                            textColor: '#16a34a',
                            trailColor: '#e5e5e5',
                        })} value={score / questionsQty} maxValue={1}
                                             text={`${((score / questionsQty) * 100).toFixed(2)}%`}/>

                    </div>
                    <NavLink className='self-start mx-10 p-2 my-4 rounded shadow  max-h-min bg-amber-400' to='/'>Go
                        home</NavLink>
                </div>
            </div>
        </div>
    )
}
export default CompletedTestsPage