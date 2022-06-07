import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { MOVIE_BY_ID } from '../../graphql/Movies';
import { AlertsMessage } from '../Alerts/AlertsMessage';
import { CounterInput } from '../Items/CounterInput';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const MoviesDetails = () => {

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    
    let {id: _id} = useParams();
    const [movie, setMovie] = useState()
    const [tikets, setTikets] = useState({
        adult: 0,
        child: 0,
        old: 0,
    })

    const {
        data,
        loading,
        error,
    } = useQuery(MOVIE_BY_ID, {
        variables: {
            movieId: parseInt(_id),
        }
    })

    useEffect(() => {
        try {
            if (error) {
                throw new Error(error)
            }
            if (data && !loading) {
                const startsItems = [];
                for (let i = 1; i < 11; i++) {
                    if ( i <= data.movie.vote_average) {
                        startsItems.push(<i className="fa-solid fa-star start-active" />)
                    } else {
                        startsItems.push(<i className="fa-solid fa-star start" />)
                    }
                }
                setMovie({...data.movie, starts: startsItems})
            }
        } catch (error) {
            
        }
    }, [data, loading, error])

    const handelPlus = (key) => setTikets({...tikets, [key]: tikets[key] + 1})
    const handelMinus = (key) => (tikets[key] > 0) ? setTikets({...tikets, [key]: tikets[key] - 1}) : setTikets({...tikets, [key]: 0})

    const handelConfirm = () => {
        try {
            if ( !tikets.adult && !tikets.child && !tikets.old ) {
                throw new Error("Ingresado boletos para contiuar")
            }

            Toast.fire({
                icon: 'success',
                title: "Boletos reservados"
            })
        } catch (error) {
            Toast.fire({
                icon: 'error',
                title: error.message
            })
        }
    }

    return (
        <>
            { movie &&
                <div className='row movie-conteiner'>
                    <div className='col-5 text-center'>
                        <img 
                            className='movie-img'
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_src}`} 
                            alt="" 
                        />
                    </div>
                    <div className='col-7'>
                        <h1>{ movie.title }</h1>
                        <p>{ movie.overview }</p>
                        <span>{ movie.starts }</span>
                        <div className='my-4'>
                            <h3>Seleccionar boletos</h3>
                            <div className='d-flex my-3'>
                                <span className='h5 w-25'>Adulto  $75</span>
                                <CounterInput 
                                    value={"adult"}
                                    count={tikets} 
                                    setCount={setTikets}
                                />
                            </div>
                            <div className='d-flex my-3'>
                                <span className='h5 w-25'>Niño  $58</span>
                                <CounterInput 
                                    value={"child"}
                                    count={tikets} 
                                    setCount={setTikets}
                                />
                            </div>
                            <div className='d-flex my-3'>
                                <span className='h5 w-25'>3 era edad  $58</span>
                                <CounterInput 
                                    value={"old"}
                                    count={tikets} 
                                    setCount={setTikets}
                                />
                            </div>
                        </div>
                        <div>
                            <button 
                                onClick={()=>handelConfirm()}
                                type="button" 
                                className="btn btn-green px-5 rounded-pill"
                            >
                                Reservar
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
