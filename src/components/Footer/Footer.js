import React from 'react';
import logo from './../../assets/softiclogo.png';

const Footer = () => {
    return (
        <footer>
            <div className="bg-gray-100">
                <div className="max-w-screen-xl py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">

                    <div className="p-5">
                        <div className="text-sm uppercase text-indigo-600 font-bold">Resources</div>
                        <a className="my-3 block" href="/#">Documentation <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Tutorials <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Support <span className="text-teal-600 text-xs p-1">New</span></a>
                    </div>
                    <div className="p-5">
                        <div className="text-sm uppercase text-indigo-600 font-bold">Support</div>
                        <a className="my-3 block" href="/#">Help Center <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Privacy Policy <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Conditions <span className="text-teal-600 text-xs p-1"></span></a>
                    </div>
                    <div className="p-5 sm:w-4/12">
                        <h3 className="font-medium text-lg text-indigo-600 mb-4">Subscribe to our Newsletter</h3>
                        <form className="mt-4">
                            <input className="border rounded w-full px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="username@email.com" />
                        </form>
                    </div>
                    <div className="p-5">
                        <div className="text-sm uppercase text-indigo-600 font-bold">Contact us</div>
                        <a className="my-3 block" href="/#">XXX XXXX, Floor 4 San Francisco, CA <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">contact@company.com <span className="text-teal-600 text-xs p-1"></span></a>
                    </div>
                </div>
                <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
                    <p>© Copyright 2022. All Rights Reserved.</p>
                </div>
            </div>

            <a href="/" target="_blank" className="block" rel="noreferrer">
                <img src={logo} alt="logo" className="w-48 mx-auto my-5" />
            </a>


        </footer>
    );
};

export default Footer;