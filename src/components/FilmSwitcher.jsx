import { useState, useEffect } from 'react'
import Loader from './UI/Loader'
import useFetching from '../hooks/useFetching'
import { Button, Box } from '@mui/material';
import FilmsService from '../API/FilmsService';
import { sample } from "lodash";

// Возвращаем промис, который резолвится через случайный timeout
export const delayRandomly = () => {
  const timeout = sample([0, 200, 500, 700, 1000, 3000]);
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

// Дергаем ошибку случайным образом, эмулирую проблему с приходом запроса
// (вдруг, скажем, сеть отвалилась). Шанс 1 к 4.
export const throwRandomly = () => {
  const shouldThrow = sample([false, false, false, false]);
  if (shouldThrow) throw new Error("Симулированная проблема с сетью");
};

function FilmSwitcher() {
  const [film, setFilm] = useState(null)
  const [id, setId] = useState(300)
  const [fetchFilm, isLoading, loadingError] = useFetching(async () => {
    const res = await FilmsService.getFilmById(id)
    await delayRandomly()
    throwRandomly()
    setFilm(res)
  })

  useEffect(() => {
    setFilm(null)
    const abortController = new AbortController()

    fetchFilm()
  }, [id])

  const handleClickInc = () => {
    setId(id => ++id)
  }
  const handleClickDec = () => {
    setId(id => --id)
  }

  if (loadingError) {
    console.log(loadingError)
    if (loadingError.request.status !== 404)
      throw loadingError
  }

  return (
    <>
      <Box
        sx={{
          color: 'red'
        }}
      >
        <Button
          sx={{
            color: 'red',
            border: '1px solid red',
          }}
          onClick={handleClickDec}
        >
          past
        </Button>
        <Button
          sx={{
            color: 'red',
            border: '1px solid red',
          }}
          onClick={handleClickInc}
        >
          next
        </Button>
        <h3>{id}</h3>
        {
        loadingError
          ? 'Фильм с таким id не найден'
          : isLoading
            ? <Loader></Loader>
            : <Box>
              <h2>{film.nameRu}</h2>
              <h3>{film.kinopoiskId}</h3>
            </Box>
        }
      </Box>


    </>
  )
}

export default FilmSwitcher