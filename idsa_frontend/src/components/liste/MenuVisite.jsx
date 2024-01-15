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
                                <p className="text-body-color text-base dark:text-dark-6">
                                    tutte le visite vengono svolte da personale specializzato pronto a venire in contro ad gni esigenza del cliente
                                </p>
                            </div>
                        </div>
                    </div>

                    
                    <div className="flex flex-wrap -mx-4">
                        {visite.map((item) => <PortfolioCard
                            key={item}                            
                            title={item.tipoVis }
                            prezzo={item.prezzo}
                            button="View Details"
                            id={item.id_vis}
                        />)}
                        
                    </div>
                </div>
            </section>
        </>
    );
};

export default MenuVisite;

const PortfolioCard = ({
    
    title,
    prezzo,
    button,
    id
    
}) => {

    const navigator = useNavigate();

    function visualizzaVisita(id) {
        navigator(`/visualizzaVisita/${id}`)
    }

    return (
        <>
            <div
                className={`w-full px-4 md:w-1/2 xl:w-1/3
                        
                    `}
            >
                <div className="relative mb-12">
                    
                    <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
                        <span className="text-primary mb-2 block text-sm font-medium">
                            
                        </span>
                        <h3 className="text-dark dark:text-white mb-5 text-xl font-bold">{title}</h3>
                        <a
                            onClick={() => visualizzaVisita({ id })}
                            className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
                        >
                            {button}
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
