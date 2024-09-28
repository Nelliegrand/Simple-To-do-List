import React, {useState} from "react";
import styles from "./AddTodo.module.css"

interface AddTodoProps {
    onAdd: (todo: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
    const [inputValue, setInputValue] = useState("");


const handleAddItem = () => {
    if (inputValue.trim() !== "") {
        onAdd(inputValue);
        setInputValue("");
    }
};

return (
    <div className={styles.container}>
        <input className={styles.input} type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
        <button className={styles.button} onClick={handleAddItem}>Lägg till syssla</button>
    </div>
)
}

export default AddTodo;