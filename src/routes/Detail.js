import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail(){
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(null);
    const {id} = useParams();
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setLoading(false);
        setMovie(json);
    }
    useEffect(() => {
        getMovie();
    },[])
    return (
        <div>
            {loading ? (<h1>...Loading</h1>) : (
                <div>
                    <h1>
                        Detail
                    </h1>
                    <h3><Link to="/">Home</Link></h3>
                    <div>
                        <img src={movie.data.movie.medium_cover_image}></img>
                        <div>
                            <h2>{movie.data.movie.title}</h2>
                            <br/>
                            <span>{movie.data.movie.description_full}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Detail;