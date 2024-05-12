import { useState } from "react";
import Header from "./components/Header.jsx";
import Create from "./components/Create.jsx";
import Show from "./components/Show.jsx";





function App() {
  const [task, settask] = useState("");
  const [taskList, settaskList] = useState(
      JSON.parse(localStorage.getItem("taskList")) || []
  );

  return (
    <div className='w-full h-[100vh] bg-black text-white flex items-center justify-center'>
      <div className='w-[30vw] h-[85vh] border-2 border-zinc-600 overflow-hidden rounded-3xl'>
        {/* / */}
        <Header taskList={taskList} />
        {/* / */}
        <Create taskList={taskList} settaskList={settaskList} task={task} settask={settask}/>
        {/* / */}
        <Show taskList={taskList} settaskList={settaskList}/>
        {/* / */}
      </div>
    </div>
  )
}

export default App