import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import AppuntamentiCardMedico from './AppuntamentiCardMedico'
import { listAppuntamentiMedico } from '../../services/AppuntamentiService'
import { useNavigate } from 'react-router-dom'



const AppuntamentiMedico = () => {
    const orderStatus = [
        { lable: "categoria uno", value: "uno" },
        { lable: "categoria due", value: "due" },
        { lable: "categoria tre", value: "tre" },
        { lable: "categoria quattro", value: "quattro" },
    ]

    const [appuntamentiMedico, setAppuntamentiMedico] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllAppuntamentiMedico(1);
    }, [])

    function getAllAppuntamentiMedico(id_medico) {
        listAppuntamentiMedico(id_medico).then((response) => {
                setAppuntamentiMedico(response.data);
                console.log(response.data); // This will print the response data to the console
        }).catch(error => {
            console.error(error);
        })
    }

    function visualizzaProfilo() {
        navigator(`/edit-medico/1`)
    }

    return (
        <div>
            <Grid container sx={{ justifyContent: "space-between" }}>
                <Grid item xs={2.5}>
                    <div className='h-auto shadow-lg bg-white p-5 sticky top-5'>
                        <h1 className='font-bold text-lg'>Filter</h1>

                        <div className='spacy-y-4 mt-10'>
                            <h1 className='font-semibold text-lg'>I TUOI APPUNTAMENTI</h1>
                            
                 
                            <button className='btn btn-info space-y-15 mt-2' onClick={() => visualizzaProfilo()}>visualizza profilo</button>
                        </div>

                    </div>
                </Grid>
                <Grid item xs={9}>
                    <div className='space-y-5'>
                        {appuntamentiMedico.map((item) => <AppuntamentiCardMedico key={item} id_paziente={item.id_paziente} id_visita={item.id_visita} id_slot={item.id_slot } />)}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default AppuntamentiMedico