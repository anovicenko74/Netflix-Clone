import React from 'react'
import { CircularProgress } from '@mui/material'
import { useTheme } from '@mui/material/styles'

function Loader() {
    const theme = useTheme()
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <CircularProgress
                color='third'
            >
            </CircularProgress>
        </div>
    )
}

export default Loader