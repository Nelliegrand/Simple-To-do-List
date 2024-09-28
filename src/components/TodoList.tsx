import React, {useState} from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css"

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<string[]>([]);

    const addTodo = (todo: string) => {
        setTodos((prevTodos) => [todo, ...prevTodos]);

    };

    const removeTodo = (index: number) => {
        setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index))
    }
    return (
        <div className={styles.todolistcontainer}>
            <h2 className={styles.todotitle}>Lägg till i listan</h2>
            <AddTodo onAdd={addTodo} />
      <ul className={styles.todolist}>
        {todos.map((todo, index) => (
            <li className={styles.todolistItem} key={todo + index}>
            <TodoItem
            todo={todo}
            onDelete={() => removeTodo(index)} />
            </li>
        ))}
      </ul>
        </div>
    )
}

export default TodoList;