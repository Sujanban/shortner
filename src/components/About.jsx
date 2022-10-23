import React from 'react'
import { SiTrustpilot } from "react-icons/si";
import device from "../assets/device.png";
import like from "../assets/like.png";
import link from "../assets/link.png";
import reliable from "../assets/reliable.png";
import stats from "../assets/stats.png";
import shield from "../assets/shield.png";
import grow from "../assets/grow.png";
import safe from "../assets/safe.png";
import easy from "../assets/easy.png";
import deliver from "../assets/deliver.png";

export const About = () => {
    return (
        <div className='px-8 ' id='about'>
            <div className='container m-auto py-20'>
                <h1 className='text-3xl xl:text-4xl font-bold text-center'>Why Shortner?</h1>
                <div className='md:py-8 sm:grid sm:grid-cols-2 md:grid-cols-3 text-center gap-4 m-auto'>
                    <div className='p-4'>
                        <div className=''>
                            <img className='m-auto w-20 p-2' src={like} alt="Shortner is easy and fast, enter the long link to get your shortened link" />
                        </div>
                        <div className='py-4'>
                            <h1 className='p-2 text-xl md:text-2xl font-semibold'>Easy</h1>
                            <p className='text-slate-600'>Shortner is easy and fast, enter the long link to get your shortened link</p>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div>
                            <img className='m-auto w-20 p-2' src={link} alt="shortner url shortner free 2022" />
                        </div>
                        <div className='py-4 xl:p-4'>
                            <h1 className='p-2 text-xl md:text-2xl font-semibold'>Shortened</h1>
                            <p className='text-slate-600'>Use any link, no matter what size, ShortURL always shortens</p>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div>
                            <img className='m-auto w-20 p-2' src={shield} alt="best link shortner 2022" />
                        </div>
                        <div className='py-4 xl:p-4'>
                            <h1 className='p-2 text-xl md:text-2xl font-semibold'>Secure</h1>
                            <p className='text-slate-600'>It is fast and secure, our service have HTTPS protocol and data encryption</p>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div>
                            <img className='m-auto w-20 p-2' src={stats} alt="optimize your link with shortner" />
                        </div>
                        <div className='py-4 xl:p-4'>
                            <h1 className='p-2 text-xl md:text-2xl font-semibold'>Statistics</h1>
                            <p className='text-slate-600'>Optimizes the overall URL experience</p>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div>
                            <img className='m-auto w-20 p-2' src={reliable} alt="shortner relaiable link shortner" />
                        </div>
                        <div className='py-4 xl:p-4'>
                            <h1 className='p-2 text-xl md:text-2xl font-semibold'>Reliable</h1>
                            <p className='text-slate-600'>All links that try to disseminate spam, viruses and malware are deleted</p>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div>
                            <img className='m-auto w-20 p-2' src={device} alt="link shortner 2022" />
                        </div>
                        <div className='py-4 xl:p-4'>
                            <h1 className='p-2 text-xl md:text-2xl font-semibold'>Devices</h1>
                            <p className='text-slate-600'>Compatible with smartphones, tablets and desktop</p>
                        </div>
                    </div>
                </div>


                <div className=''>
                    <div className='py-12 sm:grid grid-cols-2 gap-4'>
                        <img src={grow} alt="shortner - Boost your productivity" className='object-contain h-44 sm:h-96 m-auto'/>
                        <div className='md:p-4 m-auto'>
                            <h1 className='py-2 text-slate-800 text-xl md:text-3xl font-medium '>Boost your productivity</h1>
                            <p className='text-slate-700'>With shortner, you dont need to share long and lengthy url to your friends. with the help of shortner url shortning functionality you can share a short and cute looking links and helps on boosting your productivity.</p>
                        </div>
                    </div>
                    <div className='py-12 sm:grid grid-cols-2 gap-4'>
                        <div  className='md:p-4 m-auto'>
                            <h1 className='py-2 text-slate-800 text-xl md:text-3xl font-medium '>Zero Ads</h1>
                            <p className='text-slate-700'>We know the frustration when you shortn a link and the link is full of Ads. Here in SHORTNER, All the shorted links that we provide are free from Ads. </p>
                        </div>
                        <img src={easy} alt="shortner - ads free url shortner 2022" className='object-contain h-44 sm:h-96 m-auto'/>
                    </div>
                    <div className='py-12 sm:grid grid-cols-2 gap-4'>
                        <img src={safe} alt="shortner - secured link shortner" className='object-contain h-44 sm:h-96 m-auto'/>
                        <div className='md:p-4 m-auto'>
                            <h1 className='py-2 text-slate-800 text-xl md:text-3xl font-medium '>100% Secure</h1>
                            <p className='text-slate-700'>Shortner takes its users security very much seriously. We doesnt take or store any data from our Customers. We automatically remote malicious links and prevent such link from getting shorted.</p>
                        </div>
                    </div>
                    <div className='py-12 sm:grid grid-cols-2 gap-4'>
                        <div className='md:p-4 m-auto'>
                            <h1 className='py-2 text-slate-800 text-xl md:text-3xl font-medium '>Free of Cost</h1>
                            <p className='text-slate-700'>There are various link shortner website over the internet but only a handfull is providing a quality service with Zero fees. Here in SHORTNER we provides our services for free without any hidden costs.</p>
                        </div>
                        <img src={deliver} alt="shortner - zero cost link shortner " className='object-contain h-44 sm:h-96 m-auto'/>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
