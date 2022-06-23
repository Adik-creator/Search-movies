import {Movie} from "./Movie";

function Movies(props) {

    const {movies = []} = props

    return (
        <>
            <div className="movies">
                {movies.length ? movies.map(movie => (
                    <Movie key={movie.imdbID} {...movie}/>
                )) : <h4 style={{marginTop: 20, textAlign: "center"}}>404 not found</h4>
                }
            </div>
        </>
    )
}

export {Movies}