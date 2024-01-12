import React, {useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { listAppuntamenti } from '../../services/AppuntamentiService'

const MenuVisite = () => {
    const [showCard, setShowCard] = useState("all");

    const [appuntamenti, setAppuntamenti] = useState([])

    const handleProject = (category) => {
        setShowCard(category);
    };

    useEffect(() => {
        getAllAppuntamenti();
    }, [])

    function getAllAppuntamenti() {
        listAppuntamenti().then((response) => {
            setAppuntamenti(response.data);
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
                                <span className="text-primary mb-2 block text-lg font-semibold">
                                    Our Portfolio
                                </span>
                                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                                    Our Recent Projects
                                </h2>
                                <p className="text-body-color text-base dark:text-dark-6">
                                    There are many variations of passages of Lorem Ipsum available
                                    but the majority have suffered alteration in some form.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-wrap justify-center -mx-4">
                        <div className="w-full px-4">
                            <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("all")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "all"
                                                ? "activeClasses bg-primary text-white"
                                                : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                                            }`}
                                    >
                                        All Projects
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("branding")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "branding"
                                                ? "activeClasses bg-primary text-white"
                                                : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                                            }`}
                                    >
                                        Branding
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("design")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "design"
                                                ? "activeClasses bg-primary text-white"
                                                : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                                            }`}
                                    >
                                        Design
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("marketing")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "marketing"
                                                ? "activeClasses bg-primary text-white"
                                                : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                                            }`}
                                    >
                                        Marketing
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("development")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "development"
                                                ? "activeClasses bg-primary text-white"
                                                : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                                            }`}
                                    >
                                        Development
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        {appuntamenti.map((item) => <PortfolioCard
                            key={item}                            
                            title={item.tipo_visita }
                            button="View Details"
                            data={item.dataOraSlot }
                            showCard={showCard}
                        />)}
                        
                    </div>
                </div>
            </section>
        </>
    );
};

export default MenuVisite;

const PortfolioCard = ({
    showCard,
    data,
    title,
    button,
    buttonHref,
    
}) => {

    const navigator = useNavigate();

    function visualizzaVisita(id_visita) {
        navigator(`/visualizzaVisita/${id_visita}`)
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
                            onClick={() => visualizzaVisita({ title })}
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
