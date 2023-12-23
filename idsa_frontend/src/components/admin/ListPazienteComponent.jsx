import React, {useEffect, useState} from 'react'
import { listPazienti, deletePaziente } from '../../adminServices/PazienteService'
import { useNavigate } from 'react-router-dom'


const ListPazienteComponent = () => {

    const [pazienti, setPazienti] = useState([])

    const navigator = useNavigate();
    
    useEffect(() => {
        getAllPazienti();
    }, [])

    function getAllPazienti(){
        listPazienti().then((response) => {
            setPazienti(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewPaziente(){
        navigator('/add-paziente')
    }

    function updatePaziente(id_paziente){
        navigator(`/edit-paziente/${id_paziente}`)
    }

    function back2Menu(){
        navigator('/MenuComponent')
    }

    function removePaziente(id_paziente){
        console.log(id_paziente);
        deletePaziente(id_paziente).then((response) => {
            getAllPazienti();
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <div className='container'>
            <h2 className='text-center'>Lista di Pazienti</h2>
            <button className='btn btn-primary mb-2' onClick={addNewPaziente}>Add Paziente</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Cognome</th>
                        <th>Data di Nascita</th>
                        <th>Codice Fiscale</th>
                        <th>Azioni</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pazienti.map(paziente =>
                            <tr key={paziente.id_paziente}>
                                <td>{paziente.id_paziente}</td>
                                <td>{paziente.nome}</td>
                                <td>{paziente.cognome}</td>
                                <td>{paziente.data_n}</td>
                                <td>{paziente.cf}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updatePaziente(paziente.id_paziente)}>Update</button>
                                    <button className='btn btn-danger' onClick={() => removePaziente(paziente.id_paziente)}>Delete</button>
                                    <button className='btn btn-success' onClick={() => updatePaziente(paziente.id_paziente)}>Cartella</button>
                                </td>
                            </tr>)
                    }
                </tbody>
                <button className='btn btn-primary mb-2' onClick={back2Menu}>Torna al Menu</button>
            </table>
        </div>
    )
}

export default ListPazienteComponent