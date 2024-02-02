
import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import AppuntamentiCard from './AppuntamentiCard'
import { listAppuntamenti} from '../../services/AppuntamentiService'
import { useNavigate } from 'react-router-dom'

/*
questa � la homepage del utente base , al momento contiene un filtro per gli appuntamenti
la lista degli appuntamenti futuri e una serie di pulsanti che vanno alle altre pagine accessibili dal utente 
*/

const AppuntamentiPaziente = () => {
    const orderStatus = [
        { lable: "categoria uno", value: "uno" },
        { lable: "categoria due", value: "due" },
        { lable: "categoria tre", value: "tre" },
        { lable: "categoria quattro", value: "quattro" },
    ]

    const [appuntamenti, setAppuntamenti] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllAppuntamenti();
    }, [])

    function getAllAppuntamenti() {
        listAppuntamenti().then((response) => {
            setAppuntamenti(response.data);
            console.log(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function prenotaVisita() {
        navigator(`/menuVisite`)
    }

    function visualizzaReferti() {
        navigator(`/visualizzaCartella`)
    }

    function visualizzaProfilo() {
        navigator(`/edit-paziente/1`)
    }

    return (
        <div>
            <Grid container sx={{justifyContent: "space-between"} }>
                <Grid item xs={2.5}>
                    <div className='h-auto shadow-lg bg-white p-5 sticky top-5'>
                        <h1 className='font-bold text-lg'>Filter</h1>
    
                        <div className='spacy-y-4 mt-10'>
                            <h1 className='font-semibold text-lg'>I TUOI APPUNTAMENTI</h1>
                            
                            <button className='btn btn-info space-y-15 mt-10' onClick={() => prenotaVisita()}>prenota visita</button>
                            <button className='btn btn-info space-y-15 mt-2' onClick={() => visualizzaReferti()}>visualizza referti</button>
                            <button className='btn btn-info space-y-15 mt-2' onClick={() => visualizzaProfilo()}>visualizza profilo</button>
                        </div>
                    </div>
                </Grid>
                    <Grid item xs={9}>
                        <table className='table table-striped table-bordered'>
                            <thead>
                                <tr>
                                        <th>Pagato</th>
                                        <th>Medico</th>
                                        <th>Visita</th>
                                        <th>Slot</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {
                                        appuntamenti.map(appuntamento =>
                                            <tr key={appuntamento.id_app}>
                                                <td>{appuntamento.pagato}</td>
                                                <td>{appuntamento.id_medico}</td>
                                                <td>{appuntamento.id_visita}</td>
                                                <td>{appuntamento.id_slot}</td>
                                            </tr>
                                        )
                                    }
                            </tbody>
                        </table>
                </Grid>
            </Grid>
            
        

        </div>
    )
}

export default AppuntamentiPaziente