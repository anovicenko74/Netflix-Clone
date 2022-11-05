import { Button } from '@mui/material'
import { useTheme } from '@emotion/react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function PlayBtn({ children, ...props }) {
    const theme = useTheme()
    return (
        <Button

            sx={{
                color: "#0A0909FF",
                backgroundColor: "#fff",
                padding: '2px 40px 2px 30px',
                fontSize: "18px",
                display: 'inline-flex',
                ':hover': {
                    backgroundColor: theme.palette.secondary.main,
                }
            }}
            color="secondary"
            variant="contained"
            {...props}
        >
            <PlayArrowIcon
                sx={{
                    fz: 'large',
                    ml: '-2px'
                }}
            ></PlayArrowIcon>
            {children}
        </Button>
    )
}

export default PlayBtn