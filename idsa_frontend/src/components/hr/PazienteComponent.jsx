import React, {useEffect, useState} from 'react'
import { createPaziente, getPaziente, updatePaziente } from '../../hrServices/PazienteService'
import { useNavigate, useParams } from 'react-router-dom'

const PazienteComponent = () => {
    const [nome, setNome] = useState('')
    const [cognome, setCognome] = useState('')
    const [data_n, setDataNascita] = useState('')
    const [cf, setCodiceFiscale] = useState('')

    const {id_paziente} = useParams();

    const [errors, setErrors] = useState({
        nome: '',
        cognome: '',
        data_n: '',
        cf: '',
    })

    const navigator = useNavigate();

    useEffect(() => {
        if(id_paziente){
            getPaziente(id_paziente).then((response) => {
                setNome(response.data.nome);
                setCognome(response.data.cognome);
                setDataNascita(response.data.data_n);
                setCodiceFiscale(response.data.cf);
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id_paziente])

    function saveOrUpdatePaziente(e){
        e.preventDefault();
    
        if(validateForm()){
            const paziente = {nome,cognome,data_n,cf}
            console.log(paziente)
            if(id_paziente){
                updatePaziente(id_paziente, paziente).then((response) => {
                    console.log(response.data)
                    navigator('/pazienti');
                }).catch(error => {
                    console.error(error);
                })
            }
            else {
                createPaziente(paziente).then((response) => {
                    console.log(response.data);
                    navigator('/pazienti')
                }).catch(error => {
                    console.error(error);
                })
            }
            
        }
    }

    function validateForm(){
        let valid = true;
        const errorsCopy = {... errors}
        
        if(nome.trim()){
            errorsCopy.nome = '';
        }
        else {
            errorsCopy.nome = 'Inserire nome';
            valid = false;
        }
        
        if(cognome.trim()){
            errorsCopy.cognome = '';
        }
        else {
            errorsCopy.cognome = 'Inserire cognome';
            valid = false;
        }
        
        if(data_n.trim()){
            errorsCopy.data_n = '';
        }
        else {
            errorsCopy.data_n = 'Inserire data di nascita';
            valid = false;
        }

        if(cf.trim()){
            errorsCopy.cf = '';
        } else {
            errorsCopy.cf = 'Inserire codice fiscale';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    function pageTitle(){
        if(id_paziente){
            return <h2 className='text-center'>Update Paziente</h2>
        }
        else {
            return <h2 className='text-center'>Add Paziente</h2>
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    { 
                        pageTitle()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Nome</label>
                                <input
                                    type='text'
                                    placeholder='Inserire nome paziente'
                                    name='Nome'
                                    value={nome}
                                    className={`form-control ${ errors.nome ? 'is-invalid': '' }`}
                                    onChange={(e) => setNome(e.target.value)}
                                >
                                </input>
                                { errors.nome && <div className='invalid-feedback'> { errors.nome }</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Cognome</label>
                                <input
                                    type='text'
                                    placeholder='Inserire cognome paziente'
                                    name='Cognome'
                                    value={cognome}
                                    className={`form-control ${ errors.cognome ? 'is-invalid': '' }`}
                                    onChange={(e) => setCognome(e.target.value)}
                                >
                                </input>
                                { errors.cognome && <div className='invalid-feedback'> { errors.cognome }</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Data di Nascita</label>
                                <input
                                    type='date'
                                    placeholder='Inserire data di nascita paziente'
                                    name='Data_n'
                                    value={data_n}
                                    className={`form-control ${ errors.data_n ? 'is-invalid': '' }`}
                                    onChange={(e) => setDataNascita(e.target.value)}
                                >
                                </input>
                                { errors.data_n && <div className='invalid-feedback'> { errors.data_n }</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Codice Fiscale</label>
                                <input
                                    type='text'
                                    placeholder='Inserire codice fiscale paziente'
                                    name='Cf'
                                    value={cf}
                                    className={`form-control ${ errors.cf ? 'is-invalid': '' }`}
                                    onChange={(e) => setCodiceFiscale(e.target.value)}
                                >
                                </input>
                                { errors.cf && <div className='invalid-feedback'> { errors.cf }</div>}
                            </div>
                            <button className='btn btn-success' onClick={saveOrUpdatePaziente} >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PazienteComponent