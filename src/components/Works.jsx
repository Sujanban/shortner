import React from 'react'
import { AiOutlineLink, AiOutlineShareAlt, AiOutlineCopy } from "react-icons/ai";

export const Works = () => {
    return (
        <div className='px-8' id='howitworks'>
            <div className='container m-auto py-20'>
                <h1 className='text-3xl xl:text-4xl text-slate-800 font-bold text-center'>How does it works</h1>
                <p className='p-4 text-center text-slate-700'>Shortner makes your links shorter. In addition, it optimizes the way your link looks and performs.</p>
                <div className='md:py-8 md:grid grid-cols-3 text-center gap-4'>
                    <div className='m-8 md:m-auto'>
                        <p className='m-4'>
                            <AiOutlineLink size={40} className='m-auto text-blue-500' />
                        </p>
                        <p className='p-2 text-xl md:text-2xl font-semibold'>Paste Link</p>
                        <p className='p-2 text-slate-700'>Paste your link to get shortern.</p>
                    </div>
                    <div className='m-8 md:m-auto'>
                        <p className='m-4'>
                            <AiOutlineCopy size={40} className='m-auto text-blue-500' />
                        </p>
                        <p className='p-2 text-xl md:text-2xl font-semibold'>Shortern it</p>
                        <p className='p-2 text-slate-700'>Copy the small shorted link. </p>
                    </div>
                    <div className='m-8 md:m-auto'>
                        <p className='m-4'>
                            <AiOutlineShareAlt size={40} className='m-auto text-blue-500' />
                        </p>
                        <p className='p-2 text-xl md:text-2xl font-semibold'>Share</p>
                        <p className='p-2 text-slate-700'>Share the shorted link to you friends and loved once.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
