import React from 'react'
import { createPaziente, getPaziente, updatePaziente } from '../../adminServices/PazienteService'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const VisualizzaPaziente = () => {

    const navigator = useNavigate();

    function apricartella() {
        navigator('/visualizzaCartella')
    }

    const [nome, setNome] = useState('')
    const [cognome, setCognome] = useState('')
    const [data_n, setDataNascita] = useState('')
    const [cf, setCodiceFiscale] = useState('')
    const { id_paziente } = useParams();

    useEffect(() => {
        if (id_paziente) {
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

    return (
        <div className="bg-white">
            <div className="pt-6">
               
                

                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{nome} {cognome}</h1>
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                       
                        <form className="mt-10">
                          
                            <button
                                type="submit"
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                onClick={apricartella}
                            >
                                Visualizza cartella
                            </button>
                        </form>
                    </div>

                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{cf}</p>
                            </div>
                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{data_n}</p>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VisualizzaPaziente