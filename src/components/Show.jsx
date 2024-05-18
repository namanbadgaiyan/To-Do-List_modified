import { useContext } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { bhenjneWalaData } from "../context/DataContext";

function Show() {
    const {taskList, settaskList} = useContext(bhenjneWalaData)

    const DeleteHandler = (id) => {
        settaskList(taskList.filter((t)=> t.id !== id))
        localStorage.setItem("taskList", JSON.stringify(taskList.filter((t)=> t.id !== id)))
    }
    
    const CompleteHandler = (index) => {
        console.log(index);
        const newtaskList = [...taskList];
        newtaskList[index].completed = !newtaskList[index].completed;
        settaskList(newtaskList);
        localStorage.setItem("taskList", JSON.stringify(newtaskList));
    }
    
    return (
        <div className='flex flex-col px-5 py-8 h-[34vh] overflow-auto scrollbar-hide'>
            {taskList.length > 0 ? (
                taskList.map((tasking,index) => {
                
                return (
                    <div key={tasking.id} className='flex items-center justify-between gap-5 px-8 py-5 border-2 rounded-[1vw] flex-shrink-0 mb-5 border-zinc-800'>
                    <div className='flex items-center gap-5'>
                        <div 
                        onClick={()=>{CompleteHandler(index)}}
                        className={`${tasking.completed ? "bg-green-600" : "border"} 
                        rounded-full w-[2vw] h-[2vw] border-orange-600`}
                        
                        ></div>
                        <h1 className={`${tasking.completed ? "line-through" : ""}
                        text-[1.5vw] font-bold`}>{tasking.task}</h1>
                    </div>
                    <IoCloseCircleSharp className='text-[1.8vw] text-red-500' onClick={()=>{DeleteHandler(tasking.id)}} />
                    </div>  
                )
                
            }))
            :  (<h1 className='text-white font-semibold text-[1.5vw] text-center'>No Task Pending</h1>)
            }


        </div>
    )
}

export default Show