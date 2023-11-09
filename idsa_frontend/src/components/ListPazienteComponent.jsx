import React, {useEffect, useState} from 'react'
import { listAppuntamenti } from '../services/PazienteService'


const ListPazienteComponent = () => {

    const [pazienti, setPazienti] = useState([])
    
    useEffect(() => {
        listAppuntamenti().then((response) => {
            setPazienti(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

    return (
        <div className='container'>
            <h2 className='text-center'>Lista di Pazienti</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Cognome</th>
                        <th>Data di Nascita</th>
                        <th>Codice Fiscale</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pazienti.map(paziente =>
                            <tr key={paziente.id}>
                                <td>{paziente.id}</td>
                                <td>{paziente.Nome}</td>
                                <td>{paziente.Cognome}</td>
                                <td>{paziente.DataNascita}</td>
                                <td>{paziente.CodiceFiscale}</td>
                            </tr>)
}
                </tbody>
            </table>
        </div>
    )
}

export default ListPazienteComponent