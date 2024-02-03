
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import { createPaziente, getPaziente, updatePaziente } from '../../adminServices/PazienteService'
import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProfiloUtente() {
    const [agreed, setAgreed] = useState(false)

    const [nome, setNome] = useState('')
    const [cognome, setCognome] = useState('')
    const [data_n, setDataNascita] = useState('')
    const [cf, setCodiceFiscale] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { id_paziente } = useParams();

    const [errors, setErrors] = useState({
        nome: '',
        cognome: '',
        data_n: '',
        cf: '',
        email:'',
        password: ''
    })

    const navigator = useNavigate();

    useEffect(() => {
        if (id_paziente) {
            getPaziente(id_paziente).then((response) => {
                setNome(response.data.nome);
                setCognome(response.data.cognome);
                setDataNascita(response.data.data_n);
                setCodiceFiscale(response.data.cf);
                setEmail(response.data.email);
                setPassword(response.data.password);
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id_paziente])

    function saveOrUpdatePaziente(e) {
        console.log('form is valid')
        e.preventDefault();
        console.log('form is valid')
        if (validateForm()) {
            
            const paziente = { nome, cognome, data_n, cf, email, password }
            console.log(paziente)
            if (id_paziente) {
                updatePaziente(id_paziente, paziente).then((response) => {
                    console.log(response.data)
                    navigator(`/pazienti`)
                }).catch(error => {
                    console.error(error);
                })
            }
            else {
                createPaziente(paziente).then((response) => {
                    console.log(response.data);
                    navigator(`/pazienti`)
                }).catch(error => {
                    console.error(error);
                })
            }

        }
        navigator(`/pazienti`)
    }

    function validateForm() {
        let valid = true;
        const errorsCopy = { ...errors }

        if (nome.trim()) {
            errorsCopy.nome = '';
        }
        else {
            errorsCopy.nome = 'Inserire nome';
            valid = false;
        }

        if (cognome.trim()) {
            errorsCopy.cognome = '';
        }
        else {
            errorsCopy.cognome = 'Inserire cognome';
            valid = false;
        }

        if (data_n.trim()) {
            errorsCopy.data_n = '';
        }
        else {
            errorsCopy.data_n = 'Inserire data di nascita';
            valid = false;
        }

        if (cf.trim()) {
            errorsCopy.cf = '';
        } else {
            errorsCopy.cf = 'Inserire codice fiscale';
            valid = false;
        }

        if (email.trim()) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Inserire email';
            valid = false;
        }

        if (password.trim()) {
            errorsCopy.password = '';
        } else {
            errorsCopy.password = 'Inserire password';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    function pageTitle() {
        if (id_paziente) {
            return <h2 className='text-center'>Update Paziente</h2>
        }
        else {
            return <h2 className='text-center'>Add Paziente</h2>
        }
    }

    function tornaIndietro() {
        navigator(`/pazienti`)
    }

    return (
        <div className='container'>
            <br /> <br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                   {
                        pageTitle()
                   }
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name:</label>
                                    <input
                                        type='text'
                                        placeholder='Inserire nome'
                                        name='nome'
                                        value={nome}
                                        className={`form-control ${ errors.nome ? 'is-invalid': '' }`}
                                        onChange={(e) => setNome(e.target.value)}
                                    >
                                    </input>
                                { errors.nome && <div className='invalid-feedback'> { errors.nome} </div> }
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name:</label>
                                    <input
                                        type='text'
                                        placeholder='Inserire cognome'
                                        name='cognome'
                                        value={cognome}
                                        className={`form-control ${ errors.cognome ? 'is-invalid': '' }`}
                                        onChange={(e) => setCognome(e.target.value)}
                                    >
                                    </input>
                                { errors.cognome && <div className='invalid-feedback'> { errors.cognome} </div> }
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Date of Birth:</label>
                                    <input
                                        type='date'
                                        placeholder='Inserire data di nascita'
                                        name='data_n'
                                        value={data_n}
                                        className={`form-control ${ errors.data_n ? 'is-invalid': '' }`}
                                        onChange={(e) => setDataNascita(e.target.value)}
                                    >
                                    </input>
                                { errors.data_n && <div className='invalid-feedback'> { errors.data_n} </div> }
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Codice Fiscale:</label>
                                    <input
                                        type='text'
                                        placeholder='Inserire codice fiscale'
                                        name='cf'
                                        value={cf}
                                        className={`form-control ${ errors.cf ? 'is-invalid': '' }`}
                                        onChange={(e) => setCodiceFiscale(e.target.value)}
                                    >
                                    </input>
                                { errors.cf && <div className='invalid-feedback'> { errors.cf} </div> }
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Email:</label>
                                    <input
                                        type='email'
                                        placeholder='Inserire email'
                                        name='email'
                                        value={email}
                                        className={`form-control ${ errors.email ? 'is-invalid': '' }`}
                                        onChange={(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                { errors.email && <div className='invalid-feedback'> { errors.email} </div> }
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Password:</label>
                                    <input
                                        type='password'
                                        placeholder='Inserire password'
                                        name='password'
                                        value={password}
                                        className={`form-control ${ errors.password ? 'is-invalid': '' }`}
                                        onChange={(e) => setPassword(e.target.value)}
                                    >
                                    </input>
                                { errors.password && <div className='invalid-feedback'> { errors.password} </div> }
                            </div>

                            <button className='btn btn-danger' onClick={tornaIndietro} >Go Back</button>
    
                            <button className='btn btn-success' onClick={saveOrUpdatePaziente} >Submit</button>
                        </form>
    
                    </div>
                </div>
    
            </div>
    
        </div>
      )
}
