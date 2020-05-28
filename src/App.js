import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({ movies: movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;

    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map((moive) => {
              return (
                <Movie
                  id={moive.id}
                  year={moive.year}
                  title={moive.title}
                  summary={moive.summary}
                  poster={moive.poster}
                ></Movie>
              );
            })}
      </div>
    );
  }
}

export default App;
