
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import { createPaziente, getPaziente, updatePaziente } from '../../adminServices/PazienteService'
import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'


/**
*questa e la pagina in cui compaiono le informazioni dell utente viene acceduta sia dalutente che dagli admin
 */

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

    const { id_paziente } = useParams();

    const [errors, setErrors] = useState({
        nome: '',
        cognome: '',
        data_n: '',
        cf: '',
        email:'',
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
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id_paziente])

    function saveOrUpdatePaziente(e) {
        e.preventDefault();

        if (validateForm()) {
            const paziente = { nome, cognome, data_n, cf,email }
            console.log(paziente)
            if (id_paziente) {
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
        navigator(`/appuntamentiPaziente`)
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
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                            First name
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 form-control ${errors.nome ? 'is-invalid' : ''}"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}

                            />
                            {errors.nome && <div className='invalid-feedback'> {errors.nome}</div>}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                            Last name
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 form-control ${errors.cognome ? 'is-invalid' : ''}"
                                value={cognome}
                                onChange={(e) => setCognome(e.target.value)}
                            />
                            {errors.cognome && <div className='invalid-feedback'> {errors.cognome}</div>}
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                            Data di Nascita
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="date"
                                name="company"
                                id="company"
                                autoComplete="organization"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 form-control ${errors.data_n ? 'is-invalid' : ''}"
                                value={data_n}
                                onChange={(e) => setDataNascita(e.target.value)}
                            />
                            {errors.data_n && <div className='invalid-feedback'> {errors.data_n}</div>}
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}

                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                            Codice Fiscale
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="cf"
                                id=""
                                autoComplete="email"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={cf}
                                onChange={(e) => setCodiceFiscale(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <Switch
                                checked={agreed}
                                onChange={setAgreed}
                                className={classNames(
                                    agreed ? 'bg-indigo-600' : 'bg-gray-200',
                                    'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                )}
                            >
                                <span className="sr-only">Agree to policies</span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        agreed ? 'translate-x-3.5' : 'translate-x-0',
                                        'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                    )}
                                />
                            </Switch>
                        </div>
                        <Switch.Label className="text-sm leading-6 text-gray-600">
                            By selecting this, you agree to our{' '}
                            <a href="#" className="font-semibold text-indigo-600">
                                privacy&nbsp;policy
                            </a>
                            .
                        </Switch.Label>
                    </Switch.Group>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={saveOrUpdatePaziente}
                    >
                        Modifica
                    </button>
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 mt-5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => tornaIndietro()}
                    >
                        torna indietro
                    </button>
                </div>
            </form>
        </div>
    )
}
