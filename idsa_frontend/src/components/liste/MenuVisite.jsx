import React, {useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { listVisite } from '../../services/VisiteService'

const MenuVisite = () => {
    
    const [visite, setVisite] = useState([])

    const handleProject = (category) => {
        setShowCard(category);
    };

    useEffect(() => {
        getAllVisite();
    }, [])

    function getAllVisite() {
        listVisite().then((response) => {
            setVisite(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <>
            <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
                <div className="container mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                                
                                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                                    Prenota qui le tue visite
                                </h2>
                                <h2 className="text-body-color text-base dark:text-dark-6">
                                    tutte le visite vengono svolte da personale specializzato pronto a venire in contro ad ogni esigenza del cliente
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tipo</th>
                        <th>Descrizione</th>
                        <th>Prezzo</th>
                    </tr>
                </thead>
                <tbody>
                    {visite.map((visita) => (
                        <tr key={visita.id_vis}>
                            <td>{visita.id_vis}</td>
                            <td>{visita.tipoVis}</td>
                            <td>{visita.descr}</td>
                            <td>{visita.prezzo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default MenuVisite;
