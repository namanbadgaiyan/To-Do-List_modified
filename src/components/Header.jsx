
function Header(prop) {
    const {taskList} = prop
    return (
        <div className='w-full bg-black h-[32vh] flex items-center justify-center gap-[3vw] border-b-2 border-zinc-600'>
            <h1 className='text-[1.8vw] font-semibold'>To-Do-List</h1>
            <div className='w-[12vw] h-[12vw] rounded-[50%] flex items-center justify-center bg-orange-500'>
                <h3 className='text-[3vw] font-bold -translate-y-5'>{taskList.filter((t)=> t.completed === true).length}</h3>
                <h3 className='text-[5vw] font-thin'>/</h3>
                <h3 className='text-[3vw] font-bold translate-y-5'>{taskList.length}</h3>
            </div>
        </div>
    )
}

export default Header