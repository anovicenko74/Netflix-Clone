import React from 'react'
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
} from '@mui/material'
import { useTheme } from '@emotion/react';

import { Link } from 'react-router-dom'
import { getFilmPath } from '../components/Routes';

function FilmItem({ film, ...props }) {
    const theme = useTheme()
    return (
        <Card  {...props} sx={{
            boxShadow: '5px 0px 10px 1px' + theme.palette.third.main
        }}>
            <Link to={getFilmPath(film.filmId)}>
                <CardActionArea
                    sx={{
                        height: '100%',
                    }}
                    component='div'
                >
                    <CardMedia
                        component="img"
                        height="140"
                        image={film.posterUrlPreview}
                        alt={film.nameRu}
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color={theme.palette.primary.main}>
                            {film.nameRu}
                        </Typography>
                        <Typography color={theme.palette.primary.main}>{film.rating}</Typography>
                        <Typography>{film.year}</Typography>
                        <Typography variant="body2" color={theme.palette.secondary.main}>
                            {film.genres.map(genre => genre.genre).join(' | ')}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card >
    )
}

export default FilmItem