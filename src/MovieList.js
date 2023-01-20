import React from "react";

const MovieList = () => {
  const [todos, setTodos] = useState();

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL).then((res) => {
      const responseTodos = res.data;
      let todosArray = Object.entries(responseTodos);
      setTodos(todosArray);
    });
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      {todos &&
        todos.slice(0, 10).forEach(([key, value]) => {
          console.log(key);
          console.log(value);
        })}
    </div>
  );
};

export default MovieList;
