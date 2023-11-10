import React, { useState } from 'react';

const Sidenav = () => {
    const [activePage, setActivePage] = useState('home');

    const handlePageChange = (page) => {
        setActivePage(page);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-white text-lg font-semibold">Your Logo</div>
                <div className="space-x-4">
                    <button
                        onClick={() => handlePageChange('home')}
                        className={`text-white ${activePage === 'home' ? 'font-bold' : ''}`}
                    >
                        Home
                    </button>
                    <button
                        onClick={() => handlePageChange('about')}
                        className={`text-white ${activePage === 'about' ? 'font-bold' : ''}`}
                    >
                        About
                    </button>
                    <button
                        onClick={() => handlePageChange('contact')}
                        className={`text-white ${activePage === 'contact' ? 'font-bold' : ''}`}
                    >
                        Contact
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Sidenav;