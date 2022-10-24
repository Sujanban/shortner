import React, {useState} from 'react'
import { RiBarChartHorizontalLine } from 'react-icons/ri';

export const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const handleClick = ()=>{
        setToggle(!toggle)
    }
    return (
        <header className='px-8 fixed w-full h-[10vh] shadow-md bg-white z-50'>
            <nav className='h-full flex items-center justify-between container m-auto'>
                <div>
                    <a href="/">
                        <svg width="100" height="30" viewBox="0 0 345.41368078175896 83">
                            <defs id="SvgjsDefs1169"></defs>
                            <g id="SvgjsG1170" featurekey="FRM3ZD-0" transform="matrix(6.420245541912071,0,0,6.420245541912071,1.7897486497551194,-45.40477613612929)" fill="#3fbac2">
                                <path d="M7.1 13.92 c0.38666 0.32 0.69336 0.68998 0.92002 1.11 s0.34 0.87666 0.34 1.37 s-0.12 0.96 -0.36 1.4 s-0.57 0.82334 -0.99 1.15 s-0.91 0.58332 -1.47 0.76998 s-1.16 0.28 -1.8 0.28 s-1.2367 -0.09334 -1.79 -0.28 s-1.0367 -0.44 -1.45 -0.76 l1.1 -4.14 c-0.58666 -0.54666 -0.88 -1.1867 -0.88 -1.92 c0 -0.44 0.11666 -0.85334 0.35 -1.24 s0.55 -0.72332 0.95 -1.01 s0.86666 -0.51332 1.4 -0.67998 s1.1 -0.25 1.7 -0.25 c0.54666 0 1.0667 0.06666 1.56 0.2 s0.93334 0.33334 1.32 0.6 z"></path>
                            </g>
                            <g id="SvgjsG1171" featurekey="vMvB0T-0" transform="matrix(2.8218613069516842,0,0,2.8218613069516842,69.15344376082382,12.955957813657292)" fill="#000">
                                <path d="M0.3 18.82 q0.06 -0.66 0.41 -1.32 t0.83 -1.08 q2.14 1.3 4.06 1.3 q0.84 0 1.23 -0.38 t0.39 -0.94 q0 -0.94 -1.26 -1.48 l-2.36 -1 q-1.38 -0.62 -2.12 -1.49 t-0.74 -2.21 q0 -0.92 0.37 -1.68 t1.04 -1.32 t1.59 -0.87 t2.04 -0.31 q2.24 0 4.52 1.14 q-0.1 1.54 -1.08 2.4 q-2.04 -0.98 -3.6 -0.98 q-0.8 0 -1.2 0.36 t-0.4 0.82 q0 0.78 1.18 1.26 l2.4 1.02 q1.52 0.64 2.27 1.64 t0.75 2.32 q0 0.94 -0.34 1.72 t-1.01 1.35 t-1.67 0.89 t-2.34 0.32 q-2.6 0 -4.96 -1.48 z M20.16 11.64 l-0.02 -1.48 l0 -3.82 q0.62 -0.12 1.61 -0.12 t1.59 0.12 l0 13.66 q-0.64 0.12 -1.6 0.12 t-1.6 -0.12 l0 -4.24 l0.02 -1.48 l-1 0.02 l-2.32 0 l-1 -0.02 l0.02 1.48 l0 4.24 q-0.62 0.12 -1.6 0.12 t-1.6 -0.12 l0 -13.66 q0.62 -0.12 1.6 -0.12 t1.6 0.12 l0 3.82 l-0.02 1.48 l1 -0.02 l2.32 0 z M29.34 16.28 q0.54 1.56 2.18 1.56 q0.82 0 1.33 -0.41 t0.8 -1.04 t0.39 -1.41 t0.1 -1.54 q0 -0.7 -0.05 -1.56 t-0.29 -1.61 t-0.76 -1.26 t-1.52 -0.51 q-0.96 0 -1.47 0.49 t-0.76 1.21 t-0.31 1.53 t-0.06 1.43 q0 0.92 0.09 1.64 t0.33 1.48 z M27.72 19.04 q-2.14 -1.78 -2.14 -5.86 q0 -1.76 0.41 -3.09 t1.18 -2.23 t1.87 -1.36 t2.48 -0.46 t2.49 0.46 t1.88 1.37 t1.18 2.24 t0.41 3.07 t-0.41 3.07 t-1.18 2.23 t-1.88 1.36 t-2.49 0.46 q-2.28 0 -3.8 -1.26 z M49.52 10.56 q0 0.66 -0.2 1.25 t-0.53 1.06 t-0.78 0.82 t-0.93 0.53 q1.04 0.38 1.54 1.84 l0.6 1.7 q0.34 1 1 1.48 q-0.3 0.4 -0.9 0.67 t-1.32 0.27 t-1.12 -0.41 t-0.74 -1.43 l-0.72 -2.1 q-0.22 -0.6 -0.59 -0.92 t-1.11 -0.32 l-0.82 0 l0 5 q-0.64 0.12 -1.6 0.12 t-1.58 -0.12 l0 -13.56 l0.14 -0.14 q1.74 -0.04 2.93 -0.06 t1.87 -0.02 q1.1 0 2 0.27 t1.53 0.81 t0.98 1.36 t0.35 1.9 z M42.900000000000006 8.62 l0 3.92 q0.9 0 1.54 -0.03 t1.03 -0.24 t0.59 -0.59 t0.2 -1.1 q0 -1.94 -1.88 -1.94 l-0.83 0 t-0.65 -0.02 z M57 8.98 l0.02 1.48 l0 9.54 q-0.68 0.12 -1.62 0.12 t-1.58 -0.12 l0 -11.02 l-1.28 0.02 l-2.06 0 q-0.12 -0.58 -0.12 -1.33 t0.12 -1.33 l9.9 0 q0.16 0.52 0.16 1.26 t-0.4 1.07 t-1.28 0.33 l-0.58 0 l-1.26 -0.02 l-0.02 0 z M72.78 6.199999999999999 l0.14 0.14 l0 13.6 q-0.8 0.18 -1.89 0.18 t-1.93 -0.12 l-3.14 -7.16 q-0.56 -1.22 -1.14 -2.82 l-0.06 0.02 q0.24 2.92 0.24 5.98 l0 3.98 q-0.62 0.12 -1.5 0.12 t-1.48 -0.12 l0 -13.6 q0.76 -0.18 1.83 -0.18 t1.91 0.12 l3.1 7.14 q0.84 1.98 1.24 3.04 l0.08 -0.04 q-0.24 -2.78 -0.24 -5.9 l0 -2.44 q0 -1.04 0.42 -1.49 t1.36 -0.45 l1.06 0 z M79.08 15.96 l-0.02 1.44 l0 0.02 q0.92 -0.04 1.48 -0.04 l4.64 0 q0 0.74 -0.06 1.14 q-0.24 1.54 -2.04 1.54 l-5.32 0 q-0.86 0 -1.35 -0.5 t-0.49 -1.36 l0 -11.72 l0.14 -0.14 l8.62 0 q0.12 0.58 0.12 1.26 t-0.28 1.42 l-5.46 0 l0.02 1.44 l0 1.4 q0.52 -0.02 1.36 -0.02 l3.06 0 q0.18 0.56 0.18 1.28 t-0.18 1.32 l-4.42 0 l0 1.52 z M97.19999999999999 10.56 q0 0.66 -0.2 1.25 t-0.53 1.06 t-0.78 0.82 t-0.93 0.53 q1.04 0.38 1.54 1.84 l0.6 1.7 q0.34 1 1 1.48 q-0.3 0.4 -0.9 0.67 t-1.32 0.27 t-1.12 -0.41 t-0.74 -1.43 l-0.72 -2.1 q-0.22 -0.6 -0.59 -0.92 t-1.11 -0.32 l-0.82 0 l0 5 q-0.64 0.12 -1.6 0.12 t-1.58 -0.12 l0 -13.56 l0.14 -0.14 q1.74 -0.04 2.93 -0.06 t1.87 -0.02 q1.1 0 2 0.27 t1.53 0.81 t0.98 1.36 t0.35 1.9 z M90.58 8.62 l0 3.92 q0.9 0 1.54 -0.03 t1.03 -0.24 t0.59 -0.59 t0.2 -1.1 q0 -1.94 -1.88 -1.94 l-0.83 0 t-0.65 -0.02 z">
                                </path>
                            </g>
                        </svg>
                    </a>
                </div>
                <ul className='hidden md:flex items-center space-x-4'>
                    <li><a onClick={()=> setToggle(false)} className='px-3 py-2 text-slate-600 hover:text-slate-800 rounded-md font-medium' href="#about">About</a></li>
                    <li><a onClick={()=> setToggle(false)} className='px-3 py-2 text-slate-600 hover:text-slate-800 rounded-md font-medium' href="#contact">Contact</a></li>
                    <li><a onClick={()=> setToggle(false)} className='px-3 py-2 text-slate-600 hover:text-slate-800 rounded-md font-medium' href="#howitworks">How it Works</a></li>
                    <li><a onClick={()=> setToggle(false)} className='px-3 py-3 text-white bg-blue-600 rounded-md font-medium' href="#home">Get Started</a></li>
                </ul>
                <div className='rotate-180 md:hidden'>
                    <RiBarChartHorizontalLine 
                    size={20}
                    onClick={handleClick}
                    />
                </div>
                <ul className={` ${toggle ? 'flex' : ' hidden'} shadow-md absolute md:hidden w-full top-[10vh] left-0 flex flex-col items-center bg-white justify-centermd:hidden`}>
                    <li className='py-2'><a onClick={()=> setToggle(false)} href="#about">About</a></li>
                    <li className='py-2'><a onClick={()=> setToggle(false)} href="#contact">Contact</a></li>
                    <li className='py-2'><a onClick={()=> setToggle(false)} href="#howitworks">How it Works</a></li>
                    <li className='py-2 grid'><a onClick={()=> setToggle(false)} href="#home" className='px-3 py-3 text-white rounded-md bg-blue-600'>Get Started</a></li>
                </ul>
            </nav>
        </header>
    )
}
