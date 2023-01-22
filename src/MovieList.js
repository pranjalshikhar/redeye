import React from "react";

const MovieList = () => {
  const [todos, setTodos] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/550?api_key=ed6d6a1005f39467d292d967980f2f11"
      )
      .then((res) => {
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
