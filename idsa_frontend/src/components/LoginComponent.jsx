import React from 'react'
import { useState } from 'react'
import { loginAPICall, storeTokn } from '../services/Authservice'
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigator = useNavigate();

    function handleLoginForm(e) {

        e.preventDefault();

        const loginObj = { email, password }

        console.log(loginObj);

        const token = 'basic' + window.btoa(email + ':' + password);
        storeTokn(token);

        navigator("/")
        loginAPICall(email, password).then((response) => {
    console.log(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <div className='container'>
            <br /><br />
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='card'>
                        <div className='card-header'>
                            <h2 className='text-center'>Form di login</h2>
                        </div>

                        <div className='card-body'>
                            <form>
                                
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

                                

                                <div className='form-group mb-3'>
                                    <button className='btn btn-primary' onClick={(e) => handleLoginForm(e)}>accedi</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default LoginComponent