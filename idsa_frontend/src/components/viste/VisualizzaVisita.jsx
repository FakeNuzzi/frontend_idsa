
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { createAppuntamento } from '../../services/AppuntamentiService'
import { getAppuntamento } from '../../services/VisitaService'




function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const VisualizzaVisita = () => {

    const [tipo_visita, setTipoVisita] = useState('')
    const [descrizione, setDescrizione] = useState('')
    const [prezzo, setPrezzo] = useState('')


    useEffect(() => {
        if (tipo_visita) {
            getAppuntamento(tipo_visita).then((response) => {
                setTipoVisita(response.data.tipo_visita);
                setDescrizione(response.data.descrizione);
                setPrezzo(response.data.prezzo);
            }).catch(error => {
                console.error(error);
            })
        }
          
    }, [tipo_visita])

    function prenota(e) {
        e.preventDefault();

        
        const appuntamento = { tipo_visita, descrizione, prezzo}
        console.log(appuntamento),
            
           
        createAppuntamento(appuntamento).then((response) => {
            console.log(response.data);
            navigator('/')
        }).catch(error => {
            console.error(error);
        })
            

    }

    return (
        <div className="bg-white">
            <div className="pt-6">
             
                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{tipo_visita}</h1>
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl tracking-tight text-gray-900">{prezzo}</p>


                        <form className="mt-10">
                            {/* Colors */}
                            <div>
                                <h3 className="text-sm font-medium text-gray-900">giorno</h3>

                               
                            </div>

                            {/* Sizes */}
                            <div className="mt-10">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-medium text-gray-900">ora</h3>
                                    
                                </div>

                               
                            </div>

                            <button
                                type="submit"
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                onClick={prenota}
                            >
                                prenota
                            </button>
                        </form>
                    </div>

                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{descrizione}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisualizzaVisita
