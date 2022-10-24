import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Search = () => {
    const [shortenLink, setShortenLink] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [value, setValue] = useState('');

    const [copySuccess, setCopySuccess] = useState('');
    const copyToClipBoard = async copyMe => {
        try {
            await navigator.clipboard.writeText(copyMe);
            setCopySuccess('Copied!');
        } catch (err) {
            setCopySuccess('Failed to copy!');
        }
    };

    const handleClick = (e) => {
        setInputValue(value);
        e.preventDefault();
    }

    const fetchApi = async () => {
        const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
        setShortenLink(response.data.result.full_short_link)
    }
    useEffect(() => {
        if (inputValue.length) {
            fetchApi()
        }
    }, [inputValue])

    return (
        <div className='px-8'>
            <div>
                <form action="" className='flex'>
                    <input
                        className='text-sm md:text-md bg-blue-50 text-blue-600 w-[100%] md:w-[500px] p-2 md:p-4 rounded-l-md outline-none'
                        type="text"
                        placeholder='Paste your link here...'
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button onClick={handleClick} className=' text-slate-50 bg-blue-600 p-2 md:px-6 md:py-4 rounded-r-md'>Shortern!</button>
                </form>
                {
                    shortenLink && (
                        <>
                        <div className='py-4 flex items-center justify-center'>
                            <p
                                className='text-left text-sm md:text-md bg-blue-50 text-blue-600  p-2 md:p-4 rounded-l-md outline-none'
                            >{shortenLink}</p>
                            <button className='text-slate-50 bg-blue-600 p-2 md:p-3 rounded-r-md' onClick={() => copyToClipBoard(`${shortenLink}`)}>Copy</button>
                        </div>
                        <p>{copySuccess}</p>
                        </>
                    )
                }

            </div>
        </div>
    )
}
