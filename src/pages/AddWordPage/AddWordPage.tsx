import {FC, useRef, useState} from 'react';
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../redux/store.ts";
import {addWord} from "../../redux/word.slice.ts";

const AddWordPage: FC = () => {
    const [original, setOriginal] = useState<string>('')
    const [translation, setTranslation] = useState<string>('')
    const [error, setError] = useState<boolean | string>(false)
    const originalInputRef = useRef<any>()

    const dispatch = useAppDispatch()

    const onFinish = () => {
        if (!original || !translation) return setError('Please enter all required field!')
        dispatch(addWord({original, translation}))
        setOriginal('')
        setTranslation('')
        originalInputRef.current.focus()
    };

    return (
        <div className=' h-[100vh] md:w-1/2 mx-auto flex flex-col gap-4 justify-center items-center'>
            <NavLink className='mx-10 p-2 rounded shadow max-h-min bg-amber-400'
                     to='/'
            >Go home
            </NavLink>
            <h1 className='text-4xl py-4 font-bold italic'>Add a new word!</h1>
            <label htmlFor="original">
                <div>Original:</div>
                <input ref={originalInputRef} className='border border-black p-2 rounded'
                       type="text" name='original' placeholder='Enter word' required value={original}
                       onChange={(e) => {
                           setOriginal(e.target.value)
                           setError(false)
                       }}/>
            </label>
            <label>
                <div>Translation:</div>
                <input className='border border-black p-2 rounded'
                       type="text" name='translation' placeholder='Enter translation' required value={translation}
                       onChange={(e) => {
                           setTranslation(e.target.value)
                           setError(false)
                       }}/>
            </label>
            <button className='bg-emerald-700 p-3 text-zinc-100 rounded-md transition hover:scale-105'
                    onClick={onFinish}>Add
            </button>
            {error && <div className='text-red-600 text-xl'>{error}</div>}
        </div>
    )
}
export default AddWordPage;