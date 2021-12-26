import "./listItem.css";

export default function ListItem({ todo, checkTodo, removeTodo }) {

  let claz = "";
  if (todo.completed) {
    claz = "completed";
  }

  return (
    <>
      <li key={todo.id} className="listItem">
        <label className={claz}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={checkTodo}
          />
          {todo.todo}
        </label>
        <a className="listItem__del" onClick={() => removeTodo(todo.id)}>
          {" "}
          X
        </a>
      </li>
    </>
  );
}
