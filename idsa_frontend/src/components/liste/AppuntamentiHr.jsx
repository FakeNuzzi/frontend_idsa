import React, { useEffect, useState } from 'react'
import { listAppuntamentiMedico, deleteAppuntamentoMedico } from '../../services/AppuntamentiMedicoService'
import { useNavigate } from 'react-router-dom'


const AppuntamentiHr = () => {

    const [appuntamenti, setAppuntamneti] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllAppuntamenti();
    }, [])

    function getAllAppuntamenti() {
        listAppuntamentiMedico().then((response) => {
            setAppuntamneti(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewAppuntamento() {
        navigator('/add-appuntamnetoMedico')
    }

    function updateAppuntamento(id_appuntamento) {
        navigator(`/edit-appuntamentoMedico/${id_appuntamentoMedico}`)
    }

    function back2Menu() {
        navigator('/MenuComponent')
    }

    function removeAppntamentoMedico(id_appuntamento) {
        console.log(id_appuntamento);
        deleteAppuntamentoMedico(id_appuntamento).then((response) => {
            getAllAppuntamentiMedico();
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <div className='container'>
            <h2 className='text-center'>Lista di Tutti gli Appuntamenti</h2>
            <button className='btn btn-primary mb-2' onClick={addNewAppuntamento}>aggiungi appuntamento</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>tipo</th>
                        <th>giorno</th>
                        <th>ora</th>
                        <th>pazinete</th>
                        <th>medico</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appuntamenti.map(appuntamento =>
                            <tr key={appuntamento.tipo_visita}>
                                <td>{appuntamento.giorno}</td>
                                <td>{appuntamento.ora}</td>
                                <td>{appuntamento.paziente}</td>
                                <td>{appuntamento.medico}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => removeAppuntamentoMedico(appuntamento.id_appuntamneto)}>Delete</button>
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