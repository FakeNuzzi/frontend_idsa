import React from 'react'
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const AppuntamentiCardMedico = () => {

    const navigator = useNavigate();

    function visualizzaPaziente(id_paziente) {
        navigator(`/visualizzaPaziente/${id_paziente}`)
    }

    function visualizzaCartella() {
        navigator(`/visualizzaMedico`)
    }
    

    return (
        <div className='p-5 shadow-md shadow-black hover:shadow-2x1 border'>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
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
                            <button className='btn btn-info space-y-15 mt-2' onClick={() => visualizzaCartella()}>visualizza cartella</button>
                        </span>
                    </p>
                    <p>
                        <span>
                            <button className='btn btn-info space-y-15 mt-2' onClick={() => visualizzaPaziente(1)}>visualizza paziente</button>
                        </span>
                    </p>

                </Grid>
            </Grid>
        </div>
    )
}

export default AppuntamentiCardMedico