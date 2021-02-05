import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

class FilmRow extends Component {
    handleDetailsClick = (film) => {
        console.log(`fetching details for ${film.title}`);
    }

    render() {
        const posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`
        const splitYear = this.props.film.release_date.split('-')
        console.log(splitYear[0]);
        return (
            <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film)}>
                <FilmPoster posterUrl={posterUrl} />
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{splitYear[0]}</p>
                </div>
                <Fave />
            </div>
        )
    }
}

export default FilmRow;