import React from "react";
import TodoList from "@/src/components/TodoList";
import Navigation from "@/src/components/Navigation";

const TodoPage: React.FC = () => {
    return (
      <div>
        <Navigation />
        <TodoList />
      </div>
    );
  };
  
  export default TodoPage;