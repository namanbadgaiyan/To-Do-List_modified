import { useState } from "react";
import { nanoid } from "nanoid";
import { FaCirclePlus } from "react-icons/fa6";
import { IoCloseCircleSharp } from "react-icons/io5";



function App() {

  const [taskList, settaskList] = useState(
    JSON.parse(localStorage.getItem("taskList")) || []
  );
  
  const [task, settask] = useState("");
  

  const submitHandler = (e) => {
    e.preventDefault()
    
    const taskingen = {id: nanoid(), task, completed: false};
    console.log(taskingen);
    
    settaskList([...taskList, taskingen]);
    settask("");
    localStorage.setItem("taskList", JSON.stringify([...taskList, taskingen]));
    
  }
  console.log(taskList);
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
    <div className='w-full h-[100vh] bg-black text-white flex items-center justify-center'>
      <div className='w-[30vw] h-[85vh] border-2 border-zinc-600 overflow-hidden rounded-3xl'>
        <div className='w-full bg-black h-[32vh] flex items-center justify-center gap-[3vw] border-b-2 border-zinc-600'>
            <h1 className='text-[1.8vw] font-semibold'>To-Do-List</h1>
            <div className='w-[12vw] h-[12vw] rounded-[50%] flex items-center justify-center bg-orange-500'>
                <h3 className='text-[3vw] font-bold -translate-y-5'>{taskList.filter((t)=> t.completed === true).length}</h3>
                <h3 className='text-[5vw] font-thin'>/</h3>
                <h3 className='text-[3vw] font-bold translate-y-5'>{taskList.length}</h3>
            </div>
        </div>
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
      </div>
    </div>
  )
}

export default App