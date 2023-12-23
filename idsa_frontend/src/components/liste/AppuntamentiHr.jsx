import React, { useEffect, useState } from 'react'
import { listMedici, deleteMedico } from '../../adminServices/MedicoService'
import { useNavigate } from 'react-router-dom'


const AppuntamentiHr = () => {

    const [medici, setMedici] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllMedici();
    }, [])

    function getAllMedici() {
        listMedici().then((response) => {
            setMedici(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewMedico() {
        navigator('/add-medico')
    }

    function updateMedico(id_medico) {
        navigator(`/edit-medico/${id_medico}`)
    }

    function back2Menu() {
        navigator('/MenuComponent')
    }

    function removeMedico(id_medico) {
        console.log(id_medico);
        deleteMedico(id_medico).then((response) => {
            getAllMedici();
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <div className='container'>
            <h2 className='text-center'>Lista di Tutti gli Appuntamenti</h2>
            <button className='btn btn-primary mb-2' onClick={addNewMedico}>aggiungi appuntamento</button>
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
                        medici.map(medico =>
                            <tr key={medico.id_medico}>
                                <td>{medico.id_medico}</td>
                                <td>{medico.nome}</td>
                                <td>{medico.cognome}</td>
                                <td>{medico.data_n}</td>
                                <td>{medico.cf}</td>
                                <td>{medico.stipendio}</td>
                                <td>{medico.specializ}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => removeMedico(medico.id_medico)}>Delete</button>
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