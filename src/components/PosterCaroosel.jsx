import { useState } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions';

import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'; import 'swiper/css';
import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import PlayBtn from './UI/PlayBtn';

import { getFilmPath } from './Routes'

function PosterCaroosel({ films }) {
    let [selectedFilm, setSelectedFilm] = useState(films[0])
    let [list, setlist] = useState(films)

    const theme = useTheme()
    const { width } = useWindowDimensions()
    const countOfElements = width / 150

    const filmHandler = (e, film) => {
        setSelectedFilm(film)
    }

    return (
        <>
            <Box sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: { xs: 'center', sm: 'stretch' },
                padding: { xs: '0 0 0 0', sm: '0 20% 0 10%' },
                height: { xs: '250px', sm: '320px', md: '450px' }
            }}>
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    userSelect: 'none',
                }}>
                    <img
                        style={{
                            width: '100%',
                            height: '100%',
                            pointerEvents: 'none',
                            objectFit: 'cover',
                        }}
                        src={selectedFilm.posterUrl}
                        alt="постер!" />
                </Box>
                <Box
                    sx={{
                        position: 'relative',
                        zIndex: '2',
                        display: "inline-flex",
                        flexDirection: 'column',
                        padding: '5% 30px',
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'black',
                            opacity: '0.3',
                            boxShadow: '0px 0px 100px 0px black',
                            zIndex: '-1',
                        }}
                    >
                    </Box>
                    <Typography
                        variant='h1'
                        sx={{
                            fontSize: { xs: '50px', md: '70px' },
                            color: "#ffffff",

                        }}
                    >
                        {selectedFilm.nameRu}

                    </Typography>
                    <Box >

                        <Link to={getFilmPath(selectedFilm.filmId)}>
                            <PlayBtn>
                                play
                            </PlayBtn>
                        </Link>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    position: 'relative',
                    top: { xs: '-50px', md: '-100px' },
                    zIndex: '50',
                }}
            >
                <Swiper
                    loop={true}
                    spaceBetween={0}
                    slidesPerView={countOfElements}
                    //onSlideChange={() => console.log('slide change')}
                    //onSwiper={(swiper) => console.log()}
                    style={{
                        cursor: 'pointer',
                        userSelect: 'none',
                    }}
                >
                    {list.map(
                        film =>
                            <SwiperSlide
                                key={film.filmId}
                            >
                                <Box
                                    sx={{
                                        padding: '5px 10px',
                                        height: '200px',
                                    }}
                                >
                                    <img
                                        alt='постер'
                                        onClick={(e) => filmHandler(e, film)}
                                        src={film.posterUrlPreview}
                                        style={{
                                            height: "100%",
                                            width: '100%',
                                            ...(film.filmId == selectedFilm.filmId ? {
                                                boxShadow: `5px 0px 10px ${theme.palette.third.main}`
                                            } : {})
                                        }}
                                    />
                                </Box>
                            </SwiperSlide>
                    )}
                </Swiper>
            </Box>
        </>
    )
}

export default PosterCaroosel