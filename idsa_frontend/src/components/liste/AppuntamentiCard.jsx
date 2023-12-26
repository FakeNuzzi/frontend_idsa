import React, { useEffect, useState } from 'react'
import { getAppuntamento } from '../../services/AppuntamentiUtenteService'
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'



const AppuntamentiCard = ({ appuntamento }) => {

    function visualizzaMedico(id_medico) {
        navigator(`/visualizzaMedico/${id_medico}`)
    }

    return (
        <div className='p-5 shadow-md shadow-black hover:shadow-2x1 border'>
            <Grid container spacing={2} sx={{justifyContent:"space-between"} }>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <div className='ml-5 space-y-2'>
                            <p className=''>{appuntamento.tipo_visita}</p>
                            <p className='opacity-50 text-xs font-semibold'>{appuntamento.giorno}</p>
                            <p className='opacity-50 text-xs font-semibold'>{appuntamento.ora}</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <p>
                        <span>
                            {appuntamento.stato}
                        </span>
                    </p>
                    <p>
                        <span>
                            <button className='btn btn-info space-y-15 mt-2' onClick={() => visualizzaMedico(appuntamento.medico)}>paga</button>
                        </span>
                    </p>
                    <p>
                        <span>
                            <button className='btn btn-info space-y-15 mt-2' onClick={() => visualizzaMedico(appuntamento.medico)}>visualizza medico</button>
                        </span>
                    </p>
                </Grid>
            </Grid>
        </div>
    )
}

export default AppuntamentiCard