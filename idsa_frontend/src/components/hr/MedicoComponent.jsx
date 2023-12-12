import React, {useEffect, useState} from 'react'
import { createMedico, getMedico, updateMedico } from '../../hrServices/MedicoService'
import { useNavigate, useParams } from 'react-router-dom'

const MedicoComponent = () => {
    const [nome, setNome] = useState('')
    const [cognome, setCognome] = useState('')
    const [data_n, setDataNascita] = useState('')
    const [cf, setCodiceFiscale] = useState('')
    const [stipendio, setStipendio] = useState('')
    const [specializ, setSpecializ] = useState('')

    const {id_medico} = useParams();

    const [errors, setErrors] = useState({
        nome: '',
        cognome: '',
        data_n: '',
        cf: '',
        stipendio: '',
        specializ: '',
    })

    const navigator = useNavigate();

    useEffect(() => {
        if(id_medico){
            getMedico(id_medico).then((response) => {
                setNome(response.data.nome);
                setCognome(response.data.cognome);
                setDataNascita(response.data.data_n);
                setCodiceFiscale(response.data.cf);
                setStipendio(response.data.stipendio);
                setSpecializ(response.data.specializ);
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id_medico])

    function saveOrUpdateMedico(e){
        e.preventDefault();
    
        if(validateForm()){
            const medico = {nome,cognome,data_n,cf,stipendio,specializ}
            console.log(medico)
            if(id_medico){
                updateMedico(id_medico, medico).then((response) => {
                    console.log(response.data)
                    navigator('/medici');
                }).catch(error => {
                    console.error(error);
                })
            }
            else {
                createMedico(medico).then((response) => {
                    console.log(response.data);
                    navigator('/medici')
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

        if(String(stipendio).trim()){
            errorsCopy.stipendio = '';
        } else {
            errorsCopy.stipendio = 'Inserire stipendio';
            valid = false;
        }

        if(specializ.trim()){
            errorsCopy.specializ = '';
        } else {
            errorsCopy.specializ = 'Inserire specializzazione';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    function pageTitle(){
        if(id_medico){
            return <h2 className='text-center'>Update Medico</h2>
        }
        else {
            return <h2 className='text-center'>Add Medico</h2>
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
                                    placeholder='Inserire nome medico'
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
                                    placeholder='Inserire cognome medico'
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
                                    placeholder='Inserire data di nascita medico'
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
                                    placeholder='Inserire codice fiscale medico'
                                    name='Cf'
                                    value={cf}
                                    className={`form-control ${ errors.cf ? 'is-invalid': '' }`}
                                    onChange={(e) => setCodiceFiscale(e.target.value)}
                                >
                                </input>
                                { errors.cf && <div className='invalid-feedback'> { errors.cf }</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Stipendio</label>
                                <input
                                    type='text'
                                    placeholder='Inserire stipendio medico'
                                    name='Stipendio'
                                    value={stipendio}
                                    className={`form-control ${ errors.stipendio ? 'is-invalid': '' }`}
                                    onChange={(e) => setStipendio(e.target.value)}
                                >
                                </input>
                                { errors.stipendio && <div className='invalid-feedback'> { errors.stipendio }</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Specializzazione</label>
                                <input
                                    type='text'
                                    placeholder='Inserire codice fiscale medico'
                                    name='Specializ'
                                    value={specializ}
                                    className={`form-control ${ errors.specializ ? 'is-invalid': '' }`}
                                    onChange={(e) => setSpecializ(e.target.value)}
                                >
                                </input>
                                { errors.specializ && <div className='invalid-feedback'> { errors.specializ }</div>}
                            </div>
                            <button className='btn btn-success' onClick={saveOrUpdateMedico} >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MedicoComponent