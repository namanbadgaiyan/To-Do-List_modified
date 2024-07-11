import { useContext } from "react"
import { bhenjneWalaData } from "../context/DataContext"

function Header() {
    const {taskList} = useContext(bhenjneWalaData)
    return (
        <div className='w-full bg-black h-[32vh] flex items-center justify-center gap-[3vw] border-b-2 border-zinc-600'>
            <h1 className='text-[1.8vw] font-semibold'>To-Do-List</h1>
            <div className='w-[12vw] h-[12vw] rounded-[50%] flex items-center justify-center relative'>
                <h3 className='text-[3vw] font-bold -translate-y-5'>{taskList.filter((t)=> t.completed === true).length}</h3>
                <h3 className='text-[5vw] font-thin'>/</h3>
                <h3 className='text-[3vw] font-bold translate-y-5'>{taskList.length}</h3>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" className='absolute'>
                <defs>
                    <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#270ec6" />
                    <stop offset="50%" stopColor="#1099ae" />
                    <stop offset="100%" stopColor="#0debe0" />
                    </linearGradient>
                </defs>
                <circle cx="93" cy="90" r="75" fill="none" stroke="url(#GradientColor)" strokeWidth="20px" strokeLinecap="round" strokeDasharray={472} strokeDashoffset={472-(((taskList.filter((t)=> t.completed === true).length/taskList.length)*100)*4.72)} />
            </svg>
            </div>
        </div>
    )
}

export default Header