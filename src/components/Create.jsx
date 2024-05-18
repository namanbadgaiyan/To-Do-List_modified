import { FaCirclePlus } from "react-icons/fa6";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { bhenjneWalaData } from "../context/DataContext";


function Create() {
    const {taskList, settaskList, task, settask} = useContext(bhenjneWalaData)
    
    const submitHandler = (e) => {
        e.preventDefault()
        
        const taskingen = {id: nanoid(), task, completed: false};
        settaskList([...taskList, taskingen]);
        settask("");
        localStorage.setItem("taskList", JSON.stringify([...taskList, taskingen]));
        
    }

    return (
        <div className='flex items-center justify-around w-full px-4 py-9'>
            <form onSubmit={submitHandler}>
                <input 
                type="text"
                placeholder='Enter Task'
                className='px-2 py-2 text-black rounded-md'
                value={task}
                onChange={(e)=>{settask(e.target.value)}}
                />
            </form>
            <FaCirclePlus className='text-[2vw] text-orange-500' onClick={(e)=> submitHandler(e)}/>
        </div>
    )
}

export default Create