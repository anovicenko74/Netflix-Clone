import PosterCaroosel from '../components/PosterCaroosel'
import Loader from '../components/UI/Loader'
import { useState, useEffect } from 'react'
import useFetching from '../hooks/useFetching'
import FilmsService from '../API/FilmsService';
import FilmSwitcher from '../components/FilmSwitcher'
function Homepage() {
    let [films, setFilms] = useState([])

    let [fetchActual, isLoading, loadingError] = useFetching(async () => {
        const data = await FilmsService.getTop(3)
        setFilms(data.films)
    })

    useEffect(() => {
        fetchActual()
    }, [])

    if (loadingError) {
        throw new Error(loadingError);
    }

    return (
        <>
            {isLoading
                ? <Loader></Loader>
                : <div>
                    <PosterCaroosel films={films}></PosterCaroosel>
                    <FilmSwitcher></FilmSwitcher>
                </div>

            }
        </>
    )
}

export default Homepage