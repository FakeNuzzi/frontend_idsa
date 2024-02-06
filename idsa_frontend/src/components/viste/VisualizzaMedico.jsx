import React from 'react'

import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { createMedico, getMedico, updateMedico } from '../../adminServices/MedicoService'

const VisualizzaMedico = () => {

    const [nome, setNome] = useState('')
    const [cognome, setCognome] = useState('')
    const [data_n, setDataNascita] = useState('')
    const [cf, setCodiceFiscale] = useState('')
    const [email, setEmail] = useState('')
    const [stipendio, setStipendio] = useState('')
    const [specializ, setSpecializ] = useState('')

    const {id_medico } = useParams();

    useEffect(() => {
        if (id_utente) {
            getMedico(id_utente).then((response) => {
                setNome(response.data.nome);
                setCognome(response.data.cognome);
                setDataNascita(response.data.data_n);
                setCodiceFiscale(response.data.cf);
                setEmail(response.data.email);
                setStipendio(response.data.stipendio);
                setSpecializ(response.data.specializ);
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id_utente])


    return (
        <div className="bg-white">
            <div className="pt-6">



                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{nome} {cognome}</h1>
                    </div>

                    <div className="py-10 lg:col-span-2 lg:col-start-1  lg:pb-16 lg:pr-8 lg:pt-6">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{specializ}</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">                              
                                    <li className="text-gray-400">
                                        <span className="text-gray-600">{data_n}</span>
                                    </li>
                                    <li className="text-gray-400">
                                        <span className="text-gray-600">{cf}</span>
                                    </li>
                                    <li className="text-gray-400">
                                        <span className="text-gray-600">{email}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-sm font-medium text-gray-900">Details</h2>

                            <div className="mt-4 space-y-6">
                                <p className="text-sm text-gray-600">{stipendio}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VisualizzaMedico