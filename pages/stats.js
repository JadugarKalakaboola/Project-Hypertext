import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import ClassXAPI from '../components/charts/ClassXAPI'
import ClassXIIAPICom from '../components/charts/ClassXIIAPICom'
import ClassXIIAPIHu from '../components/charts/ClassXIIAPIHu'
import ClassXIIAPISc from '../components/charts/ClassXIIAPISc'
import ContainerBlock from '../components/ContainerBlock'
import DoughnutChart from '../components/DoughnutChart'
import DoughnutChart10 from '../components/DoughnutChart10'
import Confetti from 'react-confetti'

export default function Stats(){

    const {systemTheme, theme, setTheme} = useTheme();

    const [confetti, setConfetti] = useState(true)

    setTimeout(() => {
        setConfetti(false)
    }, 2000)

    const pressedButtonStyles = theme === 'light' ? {
        boxShadow: "inset 10px 10px 10px -1px rgba(10, 99, 169, 0.16),inset -10px -10px 10px -1px rgba(255, 255, 255, 0.70)"
    } : {
        boxShadow: "inset 5px 5px 5px -1px rgba(255, 255, 255, 0.05), inset -5px -5px 5px -1px rgba(0, 0, 0, 0.5)"
    }
    
    const buttonStyles = theme === 'light' ? {
        boxShadow: "10px 10px 10px -1px rgba(10, 99, 169, 0.16),-10px -10px 10px -1px rgba(255, 255, 255, 0.70)"
    } : {
        boxShadow: "5px 5px 5px -1px rgba(255, 255, 255, 0.05), -5px -5px 5px -1px rgba(0, 0, 0, 0.5)"
    }

    return(
        <ContainerBlock>
            {confetti ? <div><Confetti className='w-screen h-screen'/></div>: <div></div>}
                <div className="w-11/12 lg:w-9/12 mx-auto">
                <div className="p-10 lg:text-center">
                <p className="text-3xl lg:text-5xl text-orange-500 font-bold font-Finlandica">OUR PRIDE</p>
                <div className="lg:flex py-5 justify-between">
                    <div className="my-5 lg:my-0 lg:w-5/12">
                    <p className="lg:text-xl font-bold font-Finlandica text-green-500 pb-5">More than 30% students have scored more than 90% in Class XII</p>
                    <div style={buttonStyles} className="lg:mx-auto p-5 flex justify-center rounded-3xl">
                        <DoughnutChart />
                    </div>
                    </div>
                    <div className="lg:w-5/12">
                    <p className="lg:text-xl font-bold font-Finlandica text-green-500 pb-5">More than 45% students have scored more than 90% in Class X</p>
                    <div style={buttonStyles} className="lg:mx-auto p-5 flex justify-center rounded-3xl">
                        <DoughnutChart10 />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className='w-11/12 mx-auto py-10'>
                <p className='text-3xl text-center font-Finlandica font-bold'>Average Marks in Each Subject</p>
                <div className='lg:grid grid-cols-2 gap-20 py-10'>
                    <div style={pressedButtonStyles} className="p-2 rounded-lg"><ClassXAPI /></div>
                    <div style={pressedButtonStyles} className="p-2 rounded-lg"><ClassXIIAPISc /></div>
                    <div style={pressedButtonStyles} className="p-2 rounded-lg"><ClassXIIAPICom /></div>
                    <div style={pressedButtonStyles} className="p-2 rounded-lg"><ClassXIIAPIHu /></div>
                    
                </div>
            </div>
        </ContainerBlock>
    )
}