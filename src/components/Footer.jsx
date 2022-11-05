import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@emotion/react'
import useSettings from '../hooks/useSettings'
function Footer() {
    const theme = useTheme()
    const { toggleTheme } = useSettings()
    return (
        <footer>
            <Box
                sx={{
                    height: { xs: '100px', md: '150px' },
                    background: theme.palette.primary.main,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Typography
                    variant='h3'
                    sx={{
                        color: theme.palette.secondary.main,
                        fontSize: { xs: '20px', }
                    }}
                >
                    Netflix Clone, 2022
                </Typography>

            </Box>
        </footer>
    )
}

export default Footer