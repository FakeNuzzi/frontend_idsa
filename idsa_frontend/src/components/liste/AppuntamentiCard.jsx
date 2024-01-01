import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { updateAppuntamento } from '../../services/AppuntamentiService'



const AppuntamentiCard = ({ appuntamento }) => {

    function visualizzaMedico(id_medico) {
        navigator(`/visualizzaMedico/${id_medico}`)
    }

    function updateAppuntamento(pagato, id_paziente, id_medico, id_risultato, tipo_visita, dataOraSlot, id_app) {
       
        const appuntamento = {
            pagato, id_paziente, id_medico, id_risultato, tipo_visita, dataOraSlot
            }
        console.log(appuntamento)
            
        updateAppuntamento(id_app, appuntamento.then((response) => {
            console.log(response.data)
            navigator('/appuntamentiPaziente');
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <div className='p-5 shadow-md shadow-black hover:shadow-2x1 border'>
            <Grid container spacing={2} sx={{justifyContent:"space-between"} }>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <div className='ml-5 space-y-2'>
                            <p className=''>{appuntamento.tipo_visita}</p>
                            <p className='opacity-50 text-xs font-semibold'>{appuntamento.dataOraSlot}</p>
                            
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>

                    <p>
                        <span>

                            stato pagamento {appuntamento.pagato}
                        </span>
                    </p>
                    <p>
                        
                        <span>
                            <button className='btn btn-info space-y-15 mt-2' onClick={() => updateAppuntamento(true, appuntamento.id_paziente, appuntamento.id_medico, appuntamento.id_risultato, appuntamento.tipo_visita, appuntamento.dataOraSlot, appuntamento.id_app)}>paga</button>
                        </span>
                    </p>
                    <p>
                        <span>
                            <button className='btn btn-info space-y-15 mt-2' onClick={() => visualizzaMedico(appuntamento.id_medico)}>visualizza medico</button>
                        </span>
                    </p>
                </Grid>
            </Grid>
        </div>
    )
}

export default AppuntamentiCard