import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import ContainerBlock from "../components/ContainerBlock";
import resultsX from "../src/data/resultsX";
import resultsXIISc from "../src/data/resultsXIISc";
import resultsXIICom from "../src/data/resultsXIICom";
import resultsXIIHu from "../src/data/resultsXIIHu";
import { nanoid } from "nanoid";

export default function Results(){

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    })

    const {systemTheme, theme, setTheme} = useTheme();

    const lightButtonStyles = {
        boxShadow: "10px 10px 10px -1px rgba(10, 99, 169, 0.16), -10px -10px 10px -1px rgba(255, 255, 255, 0.70)"
    }

    const darkButtonStyles = {
        boxShadow: "5px 5px 5px -1px rgba(255, 255, 255, 0.05), -5px -5px 5px -1px rgba(0, 0, 0, 0.5)"
    }

    const lightPressedButtonStyles = {
        boxShadow: "inset 10px 10px 10px -1px rgba(10, 99, 169, 0.16),inset -10px -10px 10px -1px rgba(255, 255, 255, 0.70)"
      }
    
    const darkPressedButtonStyles = {
        boxShadow: "inset 5px 5px 5px -1px rgba(255, 255, 255, 0.05), inset -5px -5px 5px -1px rgba(0, 0, 0, 0.5)"
    }

    return(
        <ContainerBlock>
            <div className="w-11/12 my-10 mx-auto overflow-scroll lg:overflow-hidden">
                <div style={mounted && theme==='light' ? lightButtonStyles : darkButtonStyles} className="text-center lg:text-4xl lg:font-bold font-semibold w-fit py-3 rounded-lg mx-auto my-5 px-12 font-Finlandica bg-gradient-to-r from-pink-600 to-purple-600 text-gray-200">CLASS X</div>
                <table style={mounted && theme==='light' ? lightPressedButtonStyles : darkPressedButtonStyles} className=" mx-auto w-11/12 rounded-lg ">
                    <tr>
                    <th className="p-5">Name</th>
                    <th>English</th>
                    <th>Hindi</th>
                    <th>Maths</th>
                    <th>Social Sc.</th>
                    <th>Science</th>
                    </tr>
                    {resultsX.map((result) => {
                    return (
                        <tr className="p-10" key={nanoid()}>
                        <td className="p-5 rounded-lg">{result.name}</td>
                        <td>{result.english}</td>
                        <td>{result.hindi}</td>
                        <td>{result.maths}</td>
                        <td>{result.socialScience}</td>
                        <td>{result.science}</td>
                        </tr>
                    )
                    })}
                </table>
            </div>
            <div className="w-11/12 my-10 mx-auto overflow-scroll lg:overflow-hidden">
                <div style={mounted && theme==='light' ? lightButtonStyles : darkButtonStyles} className="text-center lg:text-4xl lg:font-bold font-semibold w-fit py-3 rounded-lg mx-auto my-5 px-12 font-Finlandica bg-gradient-to-r from-pink-600 to-purple-600 text-gray-200">CLASS XII<br /> <span className="text-l">Science</span></div>
                <table style={mounted && theme==='light' ? lightPressedButtonStyles : darkPressedButtonStyles} className=" mx-auto w-11/12 rounded-lg ">
                    <tr>
                    <th className="p-5">Name</th>
                    <th>English</th>
                    <th>Maths</th>
                    <th>Physics</th>
                    <th>Chemistry</th>
                    <th>Computer Sc</th>
                    </tr>
                    {resultsXIISc.map((result) => {
                    return (
                        <tr className="p-10" key={nanoid()}>
                        <td className="p-5 rounded-lg">{result.name}</td>
                        <td>{result.english}</td>
                        <td>{result.maths}</td>
                        <td>{result.physics}</td>
                        <td>{result.chemistry}</td>
                        <td>{result.computerScience}</td>
                        </tr>
                    )
                    })}
                </table>
            </div>
            <div className="w-11/12 my-10 mx-auto overflow-scroll lg:overflow-hidden">
                <div style={mounted && theme==='light' ? lightButtonStyles : darkButtonStyles} className="text-center lg:text-4xl lg:font-bold font-semibold w-fit py-3 rounded-lg mx-auto my-5 px-12 font-Finlandica bg-gradient-to-r from-pink-600 to-purple-600 text-gray-200">CLASS XII <br/><span className="text-l">Commerce</span></div>
                <table style={mounted && theme==='light' ? lightPressedButtonStyles : darkPressedButtonStyles} className=" mx-auto w-11/12 rounded-lg ">
                    <tr>
                    <th className="p-5">Name</th>
                    <th>English</th>
                    <th>Maths</th>
                    <th>Accountancy</th>
                    <th>Business St.</th>
                    <th>Economics</th>
                    </tr>
                    {resultsXIICom.map((result) => {
                    return (
                        <tr className="p-10" key={nanoid()}>
                        <td className="p-5 rounded-lg">{result.name}</td>
                        <td>{result.english}</td>
                        <td>{result.maths}</td>
                        <td>{result.accountancy}</td>
                        <td>{result.businessStudies}</td>
                        <td>{result.economics}</td>
                        </tr>
                    )
                    })}
                </table>
            </div>
            <div className="w-11/12 my-10 mx-auto overflow-scroll lg:overflow-hidden">
                <div style={mounted && theme==='light' ? lightButtonStyles : darkButtonStyles} className="text-center lg:text-4xl lg:font-bold font-semibold w-fit py-3 rounded-lg mx-auto my-5 px-12 font-Finlandica bg-gradient-to-r from-pink-600 to-purple-600 text-gray-200">CLASS XII <br/><span className="text-l">Humanities</span></div>
                <table style={mounted && theme==='light' ? lightPressedButtonStyles : darkPressedButtonStyles} className=" mx-auto w-11/12 rounded-lg ">
                    <tr>
                    <th className="p-5">Name</th>
                    <th>English</th>
                    <th>Maths</th>
                    <th>Geography</th>
                    <th>Political Sc.</th>
                    <th>Economics</th>
                    </tr>
                    {resultsXIIHu.map((result) => {
                    return (
                        <tr className="p-10"  key={nanoid()}>
                        <td className="p-5 rounded-lg">{result.name}</td>
                        <td>{result.english}</td>
                        <td>{result.maths}</td>
                        <td>{result.geography}</td>
                        <td>{result.politicalScience}</td>
                        <td>{result.economics}</td>
                        </tr>
                    )
                    })}
                </table>
            </div>
        </ContainerBlock>
    )
}