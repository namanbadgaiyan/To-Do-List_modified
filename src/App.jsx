import Header from "./components/Header.jsx";
import Create from "./components/Create.jsx";
import Show from "./components/Show.jsx";

function App() {

  return (
    <div className='w-full h-[100vh] bg-black text-white flex items-center justify-center'>
      <div className='w-[30vw] h-[85vh] border-2 border-zinc-600 overflow-hidden rounded-3xl'>
        {/* / */}
        <Header />
        {/* / */}
        <Create />
        {/* / */}
        <Show />
        {/* / */}
      </div>
    </div>
  )
}

export default App