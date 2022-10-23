import React from 'react';
import { Search } from "./Search"


export const Hero = () => {
    return (
        <div className='px-8 pt-[10vh] h-screen relative z-4 overflow-x-hidden' id='home'>
            <div className='h-full container m-auto flex flex-col justify-center items-center text-center'>
                <h1 className='text-slate-800 text-3xl xl:text-4xl font-bold'>A simple link but powerfull tool for you</h1>
                <p className='p-4 text-slate-700'>Shorten, share and track every link with exe.io, the best URL shortener in the world.</p>
                <Search />
            </div>
            <ul className="background -z-10">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}
