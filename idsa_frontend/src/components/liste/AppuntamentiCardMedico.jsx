import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { getVisita } from '../../services/VisitaService'
import { getSlot } from '../../services/SlotService'

const AppuntamentiCardMedico = ({ appuntamento }) => {

    const navigator = useNavigate();

    const [tipoVis, setTipoVisita] = useState('')
    const [dataOra, setDataOra] = useState('')

    useEffect(() => {

        getVisita(appuntamento.tipo_visita).then((response) => {
            setTipoVisita(response.data.tipoVis);
        }).catch(error => {
            console.error(error);
        })

        getSlot(appuntamento.slot).then((response) => {
            setDataOra(response.data.DataOraSlot);
        }).catch(error => {
            console.error(error);
        })

    }, [appuntamento.tipo_visita, appuntamento.slot])

    function visualizzaPaziente(id_paziente) {
        navigator(`/visualizzaPaziente/${id_paziente}`)
    }

    function visualizzaCartella() {
        navigator(`/visualizzaCartella`)
    }

    return (
        <div className='p-5 shadow-md shadow-black hover:shadow-2x1 border'>
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
                            <button className='btn btn-info space-y-15 mt-2' onClick={() => visualizzaPaziente(appuntamento.id_paziente)}>visualizza paziente</button>
                        </span>
                    </p>

                </Grid>
            </Grid>
        </div>
    )
}

export default AppuntamentiCardMedico