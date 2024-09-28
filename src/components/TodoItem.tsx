import React from "react";
import styles from "./TodoItem.module.css"


interface TodoItemsProps {
    todo: string;
    onDelete: () => void;
}

const TodoItem: React.FC<TodoItemsProps> = ({ todo, onDelete }) => {
    return (
        <li className={styles.todoitem}>
<span className={styles.span}>{todo}</span>
<button className={styles.itembutton} onClick={onDelete}>Ta bort syssla</button>
        </li>
    )
}

export default TodoItem;