import "./App.css";
import Header from "./components/header";
import AddLine from "./components/addLine";
import List from "./components/list";
import { useState } from "react";
import Filter from "./components/filter";

function App() {
  //define some initial value
  const startArr = [
    {
      todo: "buy bread",
      completed: false,
      id: +new Date(),
    },
  ];

  //useState
  const [todos, setTodos] = useState(startArr);
  const [filter, setFilter] = useState("");
  const [filterCompleted, setFilterCompleted] = useState(false);

  //handle func
  const addLine = (title) => {

    let newId = +new Date();

    const nTodo = {
      todo: title,
      completed: false,
      id: newId,
    };

    setTodos((todos) => {
      return [...todos, nTodo];
    });
  };

  const checkTodo = (id) => {
    const index = todos.findIndex((el) => el.id === id);

    setTodos((prev) => {
      // const prev = [...todos];
      const before = prev.slice(0, index);
      const after = prev.slice(index + 1);
      const old = prev[index];

      const changedTodo = {
        todo: old.todo,
        completed: !old.completed,
        id: id,
      };
      return [...before, changedTodo, ...after];
    });
  };

  const removeTodo = (id) => {
    const index = todos.findIndex((el) => el.id === id);

    setTodos((prev) => {
      // const prev = [...todos];
      const before = prev.slice(0, index);
      const after = prev.slice(index + 1);

      return [...before, ...after];
    });
  };

  const handleFilterCompleted = () => {
    setFilterCompleted((prev) => !prev);
  };

  //filters

  const applyFilterType = (arr) => {
    if (!filterCompleted) {
      return arr;
    }

    return arr.filter((el) => !el.completed);
  };

  const applyFilter = (arr) => {
    // return arr;

    if (filter === "") {
      return arr;
    }

    return arr.filter((el) => el.todo.indexOf(filter) >= 0);
  };

  const filterTodos = applyFilter(applyFilterType(todos));

  const handleFilter = (title) => {
    setFilter(title);
  };

  return (
    <div className="App">
      <Header />
      <Filter
        handleFilterCompleted={handleFilterCompleted}
        filterCompleted={filterCompleted}
        handleFilter={handleFilter}
        filter={filter}
      />
      <List todos={filterTodos} checkTodo={checkTodo} removeTodo={removeTodo} />
      <AddLine addLine={addLine} />
    </div>
  );
}

export default App;
