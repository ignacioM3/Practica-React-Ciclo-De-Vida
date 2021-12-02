import React, { Component } from 'react';
import Genre from './Genre';

/* let genres = [
    { genre: 'Acción' },
    { genre: 'Animación' },
    { genre: 'Aventura' },
    { genre: 'Ciencia Ficción' },
    { genre: 'Comedia' },
    { genre: 'Documental' },
    { genre: 'Drama' },
    { genre: 'Fantasia' },
    { genre: 'Infantiles' },
    { genre: 'Musical' }
] */


class GenresInDb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genresList:[]
        }
    }
    
    componentDidMount() { 
        fetch('http://localhost:3001/api/genres')
        .then(res =>res.json())
        .then(genres =>{this.setState({genresList: genres.data})})  
        .catch(error => console.log(error))
    }

    cambiarFondo(){
        document.querySelector('.practica').classList.add('bg-secondary')
    }
    sacarFondo(){
        document.querySelector('.practica').classList.remove('bg-secondary')
    }
    render() {
        return (
            <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 onMouseOver={ this.cambiarFondo} onMouseOut={()=>this.sacarFondo()} className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h6>
                        </div>
                        <div className="card-body practica">
                            <div className="row">
                                {
                                    this.state.genresList.map((genre, index) => {
                                        return <Genre  {...genre} key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )

    }
}
export default GenresInDb;