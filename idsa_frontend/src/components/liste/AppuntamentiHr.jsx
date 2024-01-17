import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getVisita } from '../../services/VisiteService'
import { getSlot } from '../../services/SlotService'
import { listAppuntamenti, deleteAppuntamento } from '../../services/AppuntamentiService'



const AppuntamentiHr = () => {

    const [appuntamenti, setAppuntamneti] = useState([])
    const [tipoVis, setTipoVisita] = useState('')
    const [dataOra, setDataOra] = useState('')

    const navigator = useNavigate();

    useEffect(() => {
        getAllAppuntamenti();
        
    }, [])

    function getAllAppuntamenti() {
        listAppuntamenti().then((response) => {
            setAppuntamneti(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function getSpecifiche(id_slot,id_visita)
    {

        getVisita(id_visita).then((response) => {
            setTipoVisita(response.data.tipoVis);
        }).catch(error => {
            console.error(error);
        })

        getSlot(id_slot).then((response) => {
            setDataOra(response.data.DataOraslot);
        }).catch(error => {
            console.error(error);
        })
    }

    function back2Menu() {
        navigator('/MenuComponent')
    }

    function removeAppuntamento(id_appuntamento) {
        console.log(id_appuntamento);
        deleteAppuntamento(id_appuntamento).then((response) => {
            getAllAppuntamenti();
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <div className='container'>
            <h2 className='text-center'>Lista di Tutti gli Appuntamenti</h2>
            <button className='btn btn-primary mb-2'>aggiungi appuntamento</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>tipo</th>
                        <th>slot</th>
                        <th>pazinete</th>
                        <th>medico</th>
                        <th>azioni</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appuntamenti.map(appuntamento =>
                            
                            <tr key={appuntamento.id_slot}>
                                <td>{appuntamento.id_visita}</td>
                                <td>{appuntamento.id_slot}</td>
                                <td>{appuntamento.id_paziente}</td>
                                <td>{appuntamento.id_medico}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => removeAppuntamento(appuntamento.id_app)}>Delete</button>
                                </td>
                            </tr>)
                    }
                </tbody>
                <button className='btn btn-primary mb-2' onClick={back2Menu}>Torna al Menu</button>
            </table>
        </div>
    )
}

export default AppuntamentiHr