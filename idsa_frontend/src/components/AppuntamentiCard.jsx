import React from 'react'
import {Grid } from '@mui/material'

const AppuntamentiCard = () => {
    return (
        <div className='p-5 shadow-lg hover:shadow-2x1 border'>
            <Grid container spacing={2} sx={{justifyContent:"space-between"} }>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <div className='ml-5 space-y-2'>
                            <p className=''>nome casuale visita</p>
                            <p className='opacity-50 text-xs font-semibold'>giorno</p>
                            <p className='opacity-50 text-xs font-semibold'>ora</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <p>
                        <span>
                            pagato
                        </span>
                    </p>

                </Grid>
            </Grid>
        </div>
    )
}

export default AppuntamentiCard