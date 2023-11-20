import React from 'react'
import { useState } from 'react'
import { registerAPICall } from '../services/Authservice'

const RegisterComponent = () => {

    const [nome, setName] = useState(' ')
    const [cognome, setSurname] = useState(' ')
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ') 
    const [cf, setCf] = useState(' ')
    const [compleanno, setCompleanno] = useState(' ')


   
    function handleRegistrationForm(e) {
        e.preventDefault();

        const register = {
            nome, cognome, email, password, cf, compleanno, };
        console.log(register);
        registerAPICall(register).then((response) => {
            console.log(response.data);
        }).catch(error => {
            console.error(error);
        })
    }
    return (
        <div className= 'container'>
            <br /><br />
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='card'>
                        <div className='card-header'>
                            <h2 className='text-center'>Form di registrazione</h2>
                        </div>

                        <div className='card-body'>
                            <form>
                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'> Nome</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='nome'
                                            className='form-control'
                                            placeholder='nome'
                                            value={nome}
                                            onChange={(e) => setName(e.target.value)}
                                        ></input>
                                        
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'> Cognome</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='cognome'
                                            className='form-control'
                                            placeholder='cognome'
                                            value={cognome}
                                            onChange={(e) => setSurname(e.target.value)}
                                        ></input>

                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'> Email</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='email'
                                            className='form-control'
                                            placeholder='email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        ></input>

                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'> Password</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='password'
                                            className='form-control'
                                            placeholder='password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        ></input>

                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'> Codice fiscale</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='cf'
                                            className='form-control'
                                            placeholder='cf'
                                            value={cf}
                                            onChange={(e) => setCf(e.target.value)}
                                        ></input>

                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'> Data di nascita</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='compleanno'
                                            className='form-control'
                                            placeholder='data'
                                            value={compleanno}
                                            onChange={(e) => setCompleanno(e.target.value)}
                                        ></input>

                                    </div>
                                </div>

                                <div className='form-group mb-3'>
                                    <button className='btn btn-primary' onClick={ (e)=> handleRegistrationForm(e) }>registrati</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterComponent