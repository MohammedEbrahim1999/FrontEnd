import React from 'react'
import { Fab, Zoom } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import useScrollTrigger from '@mui/material/useScrollTrigger';

const ScrollToTop = () => {
    return (
        <Zoom in={useScrollTrigger({ threshold: 50 })}>
            <Fab
                onClick={() => {
                    window.scrollTo(0,0)
                }
                }
                size='small' variant="extended" color="primary" aria-label="add" sx={{
                    position: 'fixed',
                    bottom: 33,
                    right: 33,
                }}>
                <KeyboardArrowUp fontSize='medium' />
            </Fab>
        </Zoom>
    )
}

export default ScrollToTop
