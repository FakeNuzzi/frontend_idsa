
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import { createAppuntamento, getAppuntamento, updateAppuntamento } from '../../services/AppuntamentiService'
import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'


/**
*questa e la pagina in cui compaiono le informazioni dell utente viene acceduta sia dalutente che dagli admin
 */

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function AppuntamentoForm() {
    const [agreed, setAgreed] = useState(false)

    // appuntamento: pagato, paziente,medico, visita, slot

    const [pagato, setPagato] = useState(false)
    const [paziente, setPaziente] = useState('')
    const [medico, setMedico] = useState('')
    const [visita, setVisita] = useState('')
    const [slot, setSlot] = useState('')

    const {id_app} = useParams();

    const [errors, setErrors] = useState({
        pagato: '',
        paziente: '',
        medico: '',
        visita: '',
        slot: ''
    })

    const navigator = useNavigate();

    useEffect(() => {
        if (id_app) {
            getAppuntamento(id_app).then((response) => {
                setPagato(response.data.pagato)
                setPaziente(response.data.paziente)
                setMedico(response.data.medico)
                setVisita(response.data.visita)
                setSlot(response.data.slot)
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id_app])

    function saveOrUpdatePaziente() {
        //e.preventDefault();

        if (validateForm()) {
            const appuntamento = {
                pagato, paziente, medico, visita, slot}
            console.log(appuntamento)
            if (id_app) {
                updateAppuntamento(id_app, appuntamento).then((response) => {
                    console.log(response.data)
                    
                }).catch(error => {
                    console.error(error);
                })
            }
            else {
                createAppuntamento(appuntamento).then((response) => {
                    response.data
                    console.log(response.data);
                    
                }).catch(error => {
                    console.error(error);
                })
            }

        }
        navigator(`/appuntamentiHr`)
    }

    function validateForm() {
        let valid = true;
        const errorsCopy = { ...errors }

        if (paziente.trim()) {
            errorsCopy.paziente = '';
        }
        else {
            errorsCopy.paziente = 'Inserire paziente';
            valid = false;
        }

        if (medico.trim()) {
            errorsCopy.medico = '';
        }
        else {
            errorsCopy.medico = 'Inserire medico';
            valid = false;
        }

        if (visita.trim()) {
            errorsCopy.visita = '';
        }
        else {
            errorsCopy.visita = 'Inserire visita';
            valid = false;
        }

        if (slot.trim()) {
            errorsCopy.slot = '';
        }
        else {
            errorsCopy.slot = 'Inserire slot';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    function pageTitle() {
        if (id_app) {
            return 'Update Appuntamento';
        }
        else {
            return 'Add Appuntamento';
        }
    }

    function tornaIndietro() {
        navigator(`/appuntamentiAppuntamento`)
    }

    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                aria-hidden="true"
            >
                <div
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {
                        pageTitle()
                    }
                </h2>
            </div>
            <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="paziente" className="block text-sm font-semibold leading-6 text-gray-900">
                            Paziente
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="paziente"
                                id="paziente"
                                autoComplete="paziente"
                                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 form-control ${errors.visita ? 'is-invalid' : ''}`}
                                value={paziente}
                                onChange={(e) => setPaziente(e.target.value)}

                            />
                            {errors.paziente && <div className='invalid-feedback'> {errors.paziente}</div>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="medico" className="block text-sm font-semibold leading-6 text-gray-900">
                            Medico
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="medico"
                                id="medico"
                                autoComplete="medico"
                                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 form-control ${errors.visita ? 'is-invalid' : ''}`}
                                value={medico}
                                onChange={(e) => setMedico(e.target.value)}
                            />
                            {errors.medico && <div className='invalid-feedback'> {errors.medico}</div>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="visita" className="block text-sm font-semibold leading-6 text-gray-900">
                            Visita
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="visita"
                                id="visita"
                                autoComplete="visita"
                                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 form-control ${errors.visita ? 'is-invalid' : ''}`}
                                value={visita}
                                onChange={(e) => setVisita(e.target.value)}
                            />
                            {errors.visita && <div className='invalid-feedback'> {errors.visita}</div>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="slot" className="block text-sm font-semibold leading-6 text-gray-900">
                            Slot
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="slot"
                                id="slot"
                                autoComplete="slot"
                                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 form-control ${errors.visita ? 'is-invalid' : ''}`}
                                value={slot}
                                onChange={(e) => setSlot(e.target.value)}
                            />
                            {errors.slot && <div className='invalid-feedback'> {errors.slot}</div>}
                        </div>
                    </div>

                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => saveOrUpdatePaziente()}
                    >
                        Modifica
                    </button>
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 mt-5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => window.history.back()}
                    >
                        Torna indietro
                    </button>
                </div>
            </form>
        </div>
    )
}
