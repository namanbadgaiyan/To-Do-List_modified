import { createContext, useState } from "react"

export const bhenjneWalaData = createContext(null)
function DataContext(props) {
    const [task, settask] = useState("");
    const [taskList, settaskList] = useState(
        JSON.parse(localStorage.getItem("taskList")) || []
    );
    return (
        <bhenjneWalaData.Provider value={{ task, settask, taskList, settaskList }}>
            {props.children}
        </bhenjneWalaData.Provider>
    )
}

export default DataContext