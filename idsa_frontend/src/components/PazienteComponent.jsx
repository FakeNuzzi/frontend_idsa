import React, {useState} from 'react'
import { createPaziente } from '../services/PazienteService'
import { useNavigate } from 'react-router-dom'

const PazienteComponent = () => {
    const [nome, setNome] = useState('')
    const [cognome, setCognome] = useState('')
    const [data_n, setDataNascita] = useState('')
    const [cf, setCodiceFiscale] = useState('')

    const navigator = useNavigate();

    function savePaziente(e){
        e.preventDefault();
        const paziente = {nome,cognome,data_n,cf}
        console.log(paziente)

        createPaziente(paziente).then((response) => {
            console.log(response.data);
            navigator('/pazienti')
        })
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>Add Paziente</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Nome</label>
                                <input
                                    type='text'
                                    placeholder='Inserire nome paziente'
                                    name='Nome'
                                    value={nome}
                                    className='form-control'
                                    onChange={(e) => setNome(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Cognome</label>
                                <input
                                    type='text'
                                    placeholder='Inserire cognome paziente'
                                    name='Cognome'
                                    value={cognome}
                                    className='form-control'
                                    onChange={(e) => setCognome(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Data di Nascita</label>
                                <input
                                    type='date'
                                    placeholder='Inserire data di nascita paziente'
                                    name='Data_n'
                                    value={data_n}
                                    className='form-control'
                                    onChange={(e) => setDataNascita(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Codice Fiscale</label>
                                <input
                                    type='text'
                                    placeholder='Inserire codice fiscale paziente'
                                    name='Cf'
                                    value={cf}
                                    className='form-control'
                                    onChange={(e) => setCodiceFiscale(e.target.value)}
                                >
                                </input>
                            </div>
                            <button className='btn btn-success' onClick={savePaziente} >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PazienteComponent