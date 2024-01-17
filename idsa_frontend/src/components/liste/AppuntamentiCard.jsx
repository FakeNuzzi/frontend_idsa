import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { updateAppuntamento } from '../../services/AppuntamentiService'
import { getVisita } from '../../services/VisiteService'
import { getSlot } from '../../services/SlotService'



const AppuntamentiCard = ({ pagato, medico, paziente, id_app, id_visita, id_paziente, id_slot }) => {

    const [tipoVis, setTipoVisita] = useState('')
    const [dataOra, setDataOra] = useState('')
    setTipoVisita("provvisorio");
    setDataOra("slot orario")
    
    function visualizzaMedico(id_medico) {
        navigator(`/visualizzaMedico/${id_medico}`)
    }

    function getInfo(id_slot, id_visita) {

        getVisita(id_visita).then((response) => {
            setTipoVisita(response.data.tipoVis);
        }).catch(error => {
            console.error(error);
        })

        getSlot(id_slot).then((response) => {
            setDataOra(response.data.DataOraSlot);
        }).catch(error => {
            console.error(error);
        })
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
        getInfo(id_slot, id_visita)
        if (! pagato) {
            <p>
                <span>
                    <button className='btn btn-info space-y-15 mt-2' onClick={() => updateAppuntamento(true, paziente, medico, tipoVis, dataOra, id_app)}>paga</button>
                </span>
            </p>
        }
        else { <p> pagato </p> }
        
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

                            stato pagamento
                        </span>
                    </p>
                    {pagamento()}
                    <p>
                        <span>
                            <button className='btn btn-info space-y-15 mt-2' onClick={() => visualizzaMedico(medico)}>visualizza medico</button>
                        </span>
                    </p>
                </Grid>
            </Grid>
        </div>
    )
}

export default AppuntamentiCard