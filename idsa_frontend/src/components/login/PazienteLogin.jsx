import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { pazienteByEmail } from '../../adminServices/PazienteService'

export default function PazienteLogin(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    const navigator = useNavigate();

    function validateForm() {
        let valid = true;
        const errorsCopy = { ...errors }

        if (email === '') {
            errorsCopy.email = 'Campo obbligatorio';
            valid = false;
        }

        if (password === '') {
            errorsCopy.password = 'Campo obbligatorio';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    function tornaIndietro() {
        navigator(`/`)
    }

    function loginPazienteEvaluation(email, password, e) {
        e.preventDefault();

        if (validateForm()) {
            pazienteByEmail(email).then((response) => {
                if (response.data.password === password) {
                    navigator(`/appuntamentiPaziente/1`)
                }
            }).catch(error => {
                console.error(error);
            })
        }
    }

    return (
        <div className='container'>
            <br /> <br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'> { 'Login Paziente' }
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label htmlFor='email'>Email:</label>
                                <input
                                    id='email'
                                    type='text'
                                    className='form-control'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label htmlFor='password'>Password:</label>
                                <input
                                    id='password'
                                    type='password'
                                    className='form-control'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button className='btn btn-danger' onClick={tornaIndietro} >Go Back</button>
                            <button className='btn btn-success' onClick={(e) => loginPazienteEvaluation(email, password, e)} >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}