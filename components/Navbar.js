import React, { useEffect, useState } from "react";
import {HiOutlineHome} from 'react-icons/hi'
import {BiClipboard} from 'react-icons/bi'
import {BiSun, BiStats} from 'react-icons/bi'
import {BiMoon} from 'react-icons/bi'
import {AiOutlineStar} from 'react-icons/ai'
import { useTheme } from "next-themes";
import Link from 'next/link'


export default function Navbar(){

    const {systemTheme, theme, setTheme} = useTheme();
    

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true);
    }, [])
    


    const renderThemeChanger = () => {
        if (!mounted) return null
        
        const currentTheme = theme === 'system' ? systemTheme : theme

        if (currentTheme === 'dark') {
            return(
                <li style={mounted && theme === 'dark' ? darkButtonStyles : lightButtonStyles} className="flex mx-5 px-2 py-2 rounded-lg cursor-pointer bg-orange-400 hover:bg-orange-500 shadow-md shadow-orange-500/50" onClick={() => {setTheme('light')}}>
                    <BiSun size={25} fill="white"/>
                </li>
            )
        } else {
            return(
                <li style={mounted && theme === 'dark' ? darkButtonStyles : lightButtonStyles} className="flex mx-5 px-2 py-2 rounded-lg cursor-pointer bg-orange-400 hover:bg-orange-500  shadow-md shadow-orange-500/50" onClick={() => {setTheme('dark')}}>
                    <BiMoon size={25} fill="white"/>
                </li>
            )
        }
    }


    const lightButtonStyles = {
        boxShadow: "10px 10px 10px -1px rgba(10, 99, 169, 0.16), -10px -10px 10px -1px rgba(255, 255, 255, 0.70)"
    }

    const darkButtonStyles = {
        boxShadow: "5px 5px 5px -1px rgba(255, 255, 255, 0.05), -5px -5px 5px -1px rgba(0, 0, 0, 0.5)"
    }

    return(
        <div className="w-screen py-5">
            <div className="w-11/12 mx-auto rounded-lg" style={mounted && theme === 'dark' ? darkButtonStyles : lightButtonStyles}>
                <div className="lg:flex py-5 px-5 lg:w-11/12 mx-auto justify-between">
                    <Link href='/'>
                        <div className="flex mx-auto lg:mx-0 cursor-pointer">
                            <img src="./apsdc-logo.png" className="w-12 mr-5 my-0 rounded-lg"/>
                            <h1 className='text-2xl pt-3 font-semibold font-Finlandica text-gray-900 dark:text-gray-200'>Army Public School Delhi Cantt</h1>
                        </div>
                    </Link>
                    <div className="py-10 lg:py-0">
                        <ul className="lg:flex flex-wrap grid grid-cols-4 py-2">
                            <Link href="/">
                            <li className="cursor-pointer flex lg:mx-5 mx-1 px-4 py-2 rounded-lg text-gray-200 bg-[#FF4949] shadow-md shadow-red-500/50 hover:bg-gradient-to-r from-pink-600 to-red-600">
                                <HiOutlineHome size={25} className="lg:visible invisible"/>
                                Home
                            </li>
                            </Link>
                            <Link href="/results">
                            <li className="cursor-pointer flex lg:mx-5 mx-1 px-4 py-2 rounded-lg text-gray-200 bg-[#30AADD] shadow-md shadow-blue-500/50 hover:bg-gradient-to-r from-teal-600 to-blue-400">
                                <BiClipboard size={25} className="lg:visible invisible"/>Results
                            </li>
                            </Link>
                            <Link href="/stats">
                            <li className="cursor-pointer flex lg:mx-5 mx-1 px-4 py-2 rounded-lg text-gray-200 bg-[#25e1a9] shadow-md shadow-teal-500/50 hover:bg-gradient-to-r from-blue-600 to-green-400">
                                <BiStats size={25} className="lg:visible invisible"/>Stats
                            </li>
                            </Link>
                            {renderThemeChanger()}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}