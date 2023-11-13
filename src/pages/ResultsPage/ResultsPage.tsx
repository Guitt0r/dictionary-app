import {NavLink, useLocation} from "react-router-dom";
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ResultsPage = () => {
    const location = useLocation()
    const {score, questionsQty} = location.state
    return (
        <div className='md:w-1/2 h-[100vh] mx-auto flex flex-col justify-center items-center gap-4'>
            <NavLink className='mx-10 p-2 rounded shadow  max-h-min bg-amber-400' to='/'>Go home</NavLink>
            <h1 className='text-4xl'>Your result is: {score}/{questionsQty}</h1>
            <div className='max-w-96 p-4'>
                <CircularProgressbar styles={buildStyles({
                    strokeLinecap: 'butt',
                    pathColor: '#16a34a',
                    textColor: '#16a34a',
                    trailColor: '#e5e5e5',
                })} value={score / questionsQty} maxValue={1}
                                     text={`${((score / questionsQty) * 100).toFixed(2)}%`}/>

            </div>
            <NavLink className='md:w-2/5 bg-emerald-700 mx-2 p-3 text-zinc-100 text-center rounded-md hover:scale-105'
                     to='/test'>Start over</NavLink>
        </div>
    )
}
export default ResultsPage