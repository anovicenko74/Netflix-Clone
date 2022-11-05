import {
    TextField,
    Box,
    Menu,
    MenuItem,
    Typography
} from '@mui/material';

import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material/styles';
import { useState, useCallback } from 'react';
import useFetching from '../hooks/useFetching'
import { getFilmPath } from './Routes'

import FilmsService from '../API/FilmsService';
import debounce from '../utils/debounce';

function Serch(...props) {
    const theme = useTheme();
    let [value, setValue] = useState()
    let [searchList, setSearchList] = useState([])
    let [isMenuOpen, setIsMenuOpen] = useState(false)
    let [anchorElMenu, setAnchorElMenu] = useState(null)
    let [fetchFilms, isLoading, loadingError] = useFetching(async (word) => {
        if (!word) return
        setIsMenuOpen(true)
        const res = await FilmsService.getFilmByWord(word)
        setSearchList(res.items)
    })

    let debounceGetFilms = useCallback(debounce(async (word) => {
        fetchFilms(word)
    }, 1500), []) // same debounce func must be called every render (use UseCallback)

    const inputHandler = async (e) => {
        setValue(e.target.value)
        setAnchorElMenu(e.target)
        debounceGetFilms(e.target.value)
    }

    const keyDownHandler = async (e) => {
        if (e.keyCode !== 13) return

        setIsMenuOpen(true)
        setAnchorElMenu(e.target)
        const res = await fetchFilms()
        setSearchList(res.items)
    }

    const handleCloseMenu = () => {
        setIsMenuOpen(null);
    };

    const handleFocus = () => {
        console.log('focus')
        if (isMenuOpen) return
        
        setIsMenuOpen(true)
    }

    const handleBlur = () => {
        console.log('blur')

    }

    return (
        <Box>
            <TextField
                onKeyDown={keyDownHandler}
                value={value}
                onInput={inputHandler}
                onFocus={handleFocus}
                onBlur={handleBlur}
                sx={{
                    'input': {
                        color: theme.palette.secondary.main,
                        borderRadius: '1px',
                    },
                    '& .MuiInputBase-input': {
                    },
                    'fieldset': {
                        borderColor: theme.palette.secondary.main,
                        borderRadius: '50px',
                    },
                    'fieldset:hover': {
                        borderColor: theme.palette.third.main,
                    },
                    'label': {
                        color: theme.palette.secondary.main,
                    },
                    '& label.Mui-focused': {
                        color: theme.palette.secondary.main,
                    },
                    '& .MuiInputBase-root.Mui-focused > fieldset': {
                        borderColor: theme.palette.third.main,
                    },

                }}
                label="search"
                variant="outlined"
                size="small"
                {...props}
            />
            <Menu
                id="menu-appbar"
                open={isMenuOpen}
                anchorEl={anchorElMenu}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                onClose={handleCloseMenu}
                sx={{
                    margin: '50px 0 0 0'
                }}
            >
                {
                    loadingError
                        ? <Typography sx={{ padding: '15px' }}> Ошибка загрузки</Typography>
                        : isLoading
                            ? <Typography sx={{ padding: '15px' }}> Загрузка...</Typography>
                            : !searchList?.length
                                ? <Typography sx={{ padding: '15px' }} > Ничего не найдено</Typography>
                                : searchList.map((film) =>
                                    <Link to={getFilmPath(film.kinopoiskId)}>
                                        <MenuItem
                                            onClick={handleCloseMenu}
                                        >
                                            <Typography>{film.nameRu}</Typography>
                                            <Typography> {film.year}</Typography>
                                        </MenuItem>
                                    </Link>
                                )
                }

            </Menu>
        </Box>
    )
}

export default Serch