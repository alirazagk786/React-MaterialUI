import React from 'react'
import { Box } from '@mui/material'


const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{
        display:{xs : "none" , md : "block"}
    }}>Rightbar</Box>

  )
}

export default Rightbar