import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { updateAppuntamento } from '../../services/AppuntamentiService'
import { getVisita } from '../../services/VisiteService'
import { getSlot } from '../../services/SlotService'



const AppuntamentiCard = ({ appuntamento }) => {

    const [tipoVis, setTipoVisita] = useState('')
    const [dataOra, setDataOra] = useState('')

    useEffect(() => {
        
        getVisita(appuntamento.appuntamento.tipo_visita).then((response) => {
            setTipoVisita(response.data.tipoVis);
        }).catch(error => {
            console.error(error);
        })

        getSlot(appuntamento.appuntamento.slot).then((response) => {
            setDataOra(response.data.DataOraSlot);
        }).catch(error => {
            console.error(error);
        })

    }, [appuntamento.appuntamento.tipo_visita, apputamento.appuntamento.slot])

    function visualizzaMedico(id_medico) {
        navigator(`/visualizzaMedico/${id_medico}`)
    }


    function updateAppuntamento(pagato, id_paziente, id_medico, id_risultato, tipoVis, dataOra, id_app)
    {
       
        const appuntamento = {
            pagato, id_paziente, id_medico, id_risultato, tipoVis, dataOra
        }
        console.log(appuntamento)
            
        updateAppuntamento(id_app, appuntamento.then((response) => {
            console.log(response.data)
            navigator('/appuntamentiPaziente');
        }).catch(error => {
            console.error(error);
        }))
    }

    function pagamento() {
        if (appuntamento.appuntamento.pagato == false) {
            <p>
                <span>
                    <button className='btn btn-info space-y-15 mt-2' onClick={() => updateAppuntamento(true, appuntamento.appuntamento.id_paziente, appuntamento.appuntamento.id_medico, appuntamento.appuntamento.id_risultato, tipoVis, dataOra, appuntamento.appuntamento.id_app)}>paga</button>
                </span>
            </p>
        }
        
    }

    return (
        <div className='p-5 shadow-md shadow-black hover:shadow-2x1 border'>
            <Grid container spacing={2} sx={{justifyContent:"space-between"} }>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <div className='ml-5 space-y-2'>
                            <p className=''>{tipoVis}</p>
                            <p className='opacity-50 text-xs font-semibold'>{dataOra}</p>
                            
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>

                    <p>
                        <span>

                            stato pagamento {appuntamento.appuntamento.pagato}
                        </span>
                    </p>
                    {pagamento()}
                    <p>
                        <span>
                            <button className='btn btn-info space-y-15 mt-2' onClick={() => visualizzaMedico(appuntamento.appuntamento.id_medico)}>visualizza medico</button>
                        </span>
                    </p>
                </Grid>
            </Grid>
        </div>
    )
}

export default AppuntamentiCard