import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { getVisita } from '../../services/VisiteService'
import { getSlot } from '../../services/SlotService'

const AppuntamentiCardMedico = ({ id_paziente, id_visita, id_slot  }) => {

    const navigator = useNavigate();

    const [tipoVis, setTipoVisita] = useState('')
    const [dataOra, setDataOra] = useState('')

    function getInfo(id_visita, id_slot) {

        getVisita(id_visita).then((response) => {
            setTipoVisita(response.data.tipoVis);
        }).catch(error => {
            console.error(error);
        })

        getSlot(id_slot).then((response) => {
            console.log(response.data);
            setDataOra(response.data.dataOraSlot);
        }).catch(error => {
            console.error(error);
        })
    }

    function visualizzaPaziente(id_paziente) {
        navigator(`/visualizzaPaziente/${id_paziente}`)
    }

    function visualizzaCartella() {
        navigator(`/visualizzaCartella/1`)
    }

    return (
        <div className='p-5 shadow-md shadow-black hover:shadow-2x1 border'>
            {getInfo(id_visita, id_slot)}
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
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
                            <button className='btn btn-info space-y-15 mt-2' onClick={() => visualizzaCartella()}>visualizza cartella</button>
                        </span>
                    </p>
                    <p>
                        <span>
                            <button className='btn btn-info space-y-15 mt-2' onClick={() => visualizzaPaziente(id_paziente)}>visualizza paziente</button>
                        </span>
                    </p>

                </Grid>
            </Grid>
        </div>
    )
}

export default AppuntamentiCardMedico