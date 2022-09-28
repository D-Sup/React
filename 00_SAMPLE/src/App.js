import { useEffect, useState } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const json =  await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
                )
            ).json();
        // const json = await response.json(); 
        setMovies(json.data.movies); 
        setLoading(false);
    }
    useEffect(() => {
        getMovies();
        // fetch(
        //     `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
        // )
        //     .then((response) => response.json())
        //     .then((json) => {   
        //         setMovies(json.data.movies); 
        //         setLoading(false);
        //     });

    }, []);
    console.log(movies);
    // map을 쓸 때마다 꼭 key를 element에 줘야함 
    // State로 부터 받은 data를 보여준 것 
    // State는 그 data를 API로부터 받아옴
    // loding이 되었을 때 setLoading을 false로 바꿔주고
    // movie를 받아오면 API로부터 얻은 data로 State를 변경 
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {movies.map(movie => (
                    <div key={movie.id}>
                        <img src={movie.medium_cover_image}/>
                        <h2>{movie.title}</h2>
                        <p>{movie.summary}</p>
                        <ul>
                            {movie.genres.map((g) => (
                            <li key={g}>{g}</li>
                            ))}
                        </ul>
                    </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;