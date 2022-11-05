import { useState, useEffect } from 'react'
import useFetching from '../hooks/useFetching';
import { useSearchParams } from 'react-router-dom';

import FilmItem from '../components/FilmItem'
import Loader from '../components/UI/Loader'
import Pagination from '../components/UI/Pagination'

import {
  Box,
  Container,
} from '@mui/material';


import FilmsService from '../API/FilmsService';

function Moviespage() {

  const [searchParams, setSearchParams] = useSearchParams()
  const pageQuery = +searchParams.get('page') || 1

  const [films, setFilms] = useState([])
  const [totalPages, setTotalPages] = useState(0)

  const [fetchFilms, isLoading, loadingError] = useFetching(async () => {
    const data = await FilmsService.getTop(pageQuery)
    if (!data.films.length) {
      throw new Error('Такой страницы не существует')
    }
    setTotalPages(data.pagesCount)
    setFilms(data.films)
  })

  const handleChangePage = (event, newPage) => {
    if (newPage == pageQuery) return

    setSearchParams({
      page: newPage
    })
  }
  useEffect(() => {
    fetchFilms()
  }, [pageQuery])

  if (loadingError) {
    throw loadingError
  }

  return (
    <>
      <Container>
        {
          isLoading
            ? <Loader></Loader>
            :
            <Box
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  margin: { sm: '0 -7px', md: '0 -10px', }
                }}>
                {films.map((film) =>
                  <Box
                    key={film.filmId}
                    sx={{
                      flex: { xs: '0 0 100%', sm: '0 0 50%', md: '0 0 33.333%' },
                      padding: { xs: '5px 0', sm: '7px', md: '7px 10px', }
                    }}>
                    <FilmItem
                      film={film}
                      style={{ height: '100%' }}
                    />
                  </Box>
                )}
              </Box>
              <Pagination
                count={totalPages}
                page={pageQuery}
                onChange={handleChangePage}
              >

              </Pagination>
            </Box>
        }
      </Container>
    </>

  )
}

export default Moviespage