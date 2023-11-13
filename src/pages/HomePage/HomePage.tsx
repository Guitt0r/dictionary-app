import {useAppSelector} from "../../redux/store.ts";
import {selectWords} from "../../redux/word.slice.ts";
import {NavLink} from "react-router-dom";

const HomePage = () => {
    const words = useAppSelector(selectWords)
    if (!words) return <div>Loading...</div>
    return (
        <div className='flex flex-col justify-center items-center md:w-1/2 mx-auto h-[100vh] gap-8 font-bold'>
            <h1 className='md:text-5xl text-xl'>(-_-) DictionaryApp (-_-)</h1>
            <ul className='border border-black text-4xl md:w-full w-3/4  text-center max-h-96 overflow-auto'>
                {words.map((word, index) => (
                    <li key={index}
                        className='p-2 border-b border-b-black shadow-md'>{word.original} - {word.translation}</li>
                ))}
            </ul>
            <div className='transition hover:scale-105'>
                <NavLink className='bg-emerald-700 p-3 text-zinc-100 rounded-md ' to='/add-word'>Add Word</NavLink>
            </div>
            <div className='transition hover:scale-105'>
                <NavLink className='bg-emerald-700 p-3 text-zinc-100 rounded-md hover:scale-105' to='/test'>Complete
                    Test</NavLink>
            </div>
            <div className='transition hover:scale-105'>
                <NavLink className='bg-emerald-700 p-3 text-zinc-100 rounded-md hover:scale-105' to='/completed-tests'>My
                    completed tests</NavLink>
            </div>
        </div>
    )
}
export default HomePage