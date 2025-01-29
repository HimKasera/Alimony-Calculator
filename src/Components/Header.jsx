import React from 'react';

const Header = () => {
    return (
        <header className="fixed top-0 w-full border-b-4 border-black bg-yellow-100 z-50">
            <style>
                {`
                    @keyframes moveRightToLeft {
                        0% {
                            transform: translateX(100%);
                        }
                        100% {
                            transform: translateX(-100%);
                        }
                    }
                    .animate-marquee {
                        animation: moveRightToLeft 30s linear infinite;
                    }
                    .disclaimer-bg {
                        background-color: red;
                        width: 100%;
                    }
                `}
            </style>
            <div className="overflow-hidden whitespace-nowrap">
                <div className="animate-marquee inline-block py-2 text-sm font-medium">
                    <span className="text-red-1000%"></span>
                    <span className="ml-2 inline-block">
                       <pre className='font-bold text-red-600 disclaimer-bg' style={{ fontSize: '1.25rem' }}>⚠️Disclaimer: This Alimony Calculator provides information, not legal advice. Results may be inaccurate. Consult a lawyer.</pre>
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;