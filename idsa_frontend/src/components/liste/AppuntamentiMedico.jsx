import React from 'react'
import { Grid } from '@mui/material'
import AppuntamentiCardMedico from './AppuntamentiCardMedico'
import { useNavigate } from 'react-router-dom'



const AppuntamentiMedico = () => {
    const orderStatus = [
        { lable: "in arrivo", value: "inArrivo" },
        { lable: "spedito", value: "spedito" },
        { lable: "cancellato", value: "cancellato" },
        { lable: "ritornato", value: "ritornato" },
    ]

    const navigator = useNavigate();


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
                            {orderStatus.map((option) => <div key={option.lable} className='flex items-center'>
                                <input defaultValue={option.value} type="checkbox" className='h-4 w-4 border-grey-300 text-indigo-600 focus:ring-indigo-500' />

                                <label className='ml-3 text-sm text-gray-600' htmlFor={option.value}>
                                    {option.lable}
                                </label>
                            </div>)}
                 
                            <button className='btn btn-info space-y-15 mt-2' onClick={() => visualizzaProfilo()}>visualizza profilo</button>
                        </div>

                    </div>
                </Grid>
                <Grid item xs={9}>
                    <div className='space-y-5'>
                        {[1, 1, 1, 1, 1].map((item) => <AppuntamentiCardMedico key={item} />)}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default AppuntamentiMedico