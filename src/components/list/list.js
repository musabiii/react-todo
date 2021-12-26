import ListItem from "../listItem";
import "./list.css";

export default function List({ todos, checkTodo, removeTodo }) {
  const listArr = todos.map((todo, index) => {
    // return <li key={index}> {todo.todo} </li>;
    return (
      <ListItem
        todo={todo}
        checkTodo={() => checkTodo(todo.id)}
        removeTodo={removeTodo}
      />
    );
  });
  return (
    <div className="list">
      <ul>{listArr}</ul>
    </div>
  );
}
