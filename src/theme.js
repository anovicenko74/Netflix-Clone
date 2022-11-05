import { createTheme as createMuiTheme } from '@mui/material'

export const themes = {
    'dark': {
        palette: {
            primary: {
                main: "#0A0909FF", // black
            },
            secondary: {
                main: "#B8B8B8FF" // grey
            },
            third: {
                main: "#E50914" // red
            },
            fourth: {
                main: "#fff"
            }
        }
    },
    'light': {
        palette: {
            primary: {
                main: "#ECEABEFF", // grey
            },
            secondary: {
                main: "#2F4F4FFF" // grey
            },
            third: {
                main: "#003153FF" // red
            },
            fourth: {
                main: "#0A0909FF"
            }
        }
    }
}

const general = {
    typography: {
        fontFamily: 'Helvetica'
    }
}

export const createTheme = (name) => {
    return createMuiTheme({ ...themes[name], ...general })
}