import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

class Subscribe extends React.Component {
    render() {
        return (
            <div className='main'>
                <h2>Subscribe</h2>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="filled-basic" label="Name" variant="filled" />
                    <TextField id="filled-basic" label="email" variant="filled" />
                </Box>
            </div>
        )
    }
}
export default Subscribe;