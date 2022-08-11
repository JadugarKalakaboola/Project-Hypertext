import React, { useEffect, useState } from "react";
import {BsFillTelephoneFill} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
import { MdLocationPin } from 'react-icons/md'
import { useTheme } from "next-themes";

export default function Footer(){

    const {systemTheme, theme, setTheme} = useTheme();

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true);
    }, [])

    const lightButtonStyles = {
        boxShadow: "10px 10px 10px -1px rgba(10, 99, 169, 0.16), -10px -10px 10px -1px rgba(255, 255, 255, 0.70)"
    }

    const darkButtonStyles = {
        boxShadow: "5px 5px 5px -1px rgba(255, 255, 255, 0.05), -5px -5px 5px -1px rgba(0, 0, 0, 0.5)"
    }

    return(
        <div style={mounted && theme === 'dark' ? darkButtonStyles : lightButtonStyles} className="w-11/12 px-5 py-10 mx-auto rounded-lg">
            <div className='bg-gray-700 h-0.5 w-full dark:bg-gray-300'></div>
            <div className="flex justify-around pt-5">
                <div>
                    <p className="text-xl font-bold font-Finlandica">Contact us</p>
                    <p className="flex py-1"><MdLocationPin /> Army Public School Sadar Bazar Road, Delhi Cantt, New Delhi - 110010</p>
                    <p className="flex py-1"><BsFillTelephoneFill /> 011-25693777   ||  25692720</p>
                    <p className="flex py-1"><GrMail/> apsdelhicantt@gmail.com</p>
                </div>
                <div>
                    <p className="text-xl font-bold font-Finlandica">Reach us</p>
                    <a href="https://goo.gl/maps/UXzmiZ3ArkLTT9Tt7">
                        <img src="location.png" className="rounded-3xl w-48 border-2 border-gray-900" />
                    </a>
                </div>
            </div>
            <div>
                <p className="pt-5 text-center font-semibold">© Created for Hypertext. All Rights Reserved.</p>
            </div>
        </div>
    )
}