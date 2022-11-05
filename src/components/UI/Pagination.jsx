import React from 'react'
import { Pagination as MuiPagination } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Pagination({
  count,
  page,
  onChange
}) {
  const theme = useTheme()
  console.log(page)
  return (
    <MuiPagination
      sx={{
        margin: '30px 0',
        "button": {
          boxShadow: "1px 1px 10px" + theme.palette.third.main,
        },
        "& .MuiPaginationItem-root": {
          color: theme.palette.fourth.main
        },
        "& .Mui-selected": {
          background: theme.palette.third.main,
          opacity: 0.95,
        }
      }}
      count={count}
      page={page}
      onChange={onChange}
    >
    </MuiPagination>
  )
}

export default Pagination