import React, { useEffect, useState } from "react"
import ContainerBlock from "../components/ContainerBlock"
import { useTheme } from "next-themes";
import {BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'
import DoughnutChart from "../components/DoughnutChart";
import {AiTwotoneStar} from 'react-icons/ai'
import DoughnutChart10 from "../components/DoughnutChart10";

export default function Home() {

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  })

  const {systemTheme, theme, setTheme} = useTheme();

  const [carouselIndex, setCarouselIndex] = useState(1)

  function nextSlide(){
    if (carouselIndex === 1){
      setCarouselIndex(2)
    } else if(carouselIndex === 2){
      setCarouselIndex(3)
    } else if (carouselIndex === 3){
      setCarouselIndex(1)
    }
  }
  
  function prevSlide(){
    if (carouselIndex === 3){
      setCarouselIndex(2)
    }else if (carouselIndex === 2){
      setCarouselIndex(1)
    } else if (carouselIndex === 1){
      setCarouselIndex(3)
    }
  }

  const lightButtonStyles = {
    boxShadow: "inset 10px 10px 10px -1px rgba(10, 99, 169, 0.16),inset -10px -10px 10px -1px rgba(255, 255, 255, 0.70)"
  }

  const darkButtonStyles = {
    boxShadow: "inset 5px 5px 5px -1px rgba(255, 255, 255, 0.05), inset -5px -5px 5px -1px rgba(0, 0, 0, 0.5)"
  }

  const lightPressedButtonStyles = {
    boxShadow: "inset 10px 10px 10px -1px rgba(10, 99, 169, 0.16),inset -10px -10px 10px -1px rgba(255, 255, 255, 0.70)"
  }

  const darkPressedButtonStyles = {
      boxShadow: "inset 5px 5px 5px -1px rgba(255, 255, 255, 0.05), inset -5px -5px 5px -1px rgba(0, 0, 0, 0.5)"
  }

  return(
    <ContainerBlock>
      <div className="py-5">
        <div style={mounted && theme === 'light' ? lightButtonStyles : darkButtonStyles} className="carousels flex lg:w-11/12 w-11/12 mx-auto rounded-lg">
          {carouselIndex === 1 && <div className="carousel-1 mx-auto lg:h-[70vh]">
            <div style={mounted && theme === 'light' ? lightButtonStyles : darkButtonStyles} className="">
              <img src="./apsdc-img.jpg" className="w-screen h-[70vh] blur-md"/>
              <p className="absolute text-gray-200 text-center top-[80%] text-2xl lg:top-[52%] lg:left-[22%] lg:text-5xl font-bold font-Finlandica">Welcome to Army Public School Delhi Cantt</p>
            </div>
          </div>}
        </div>
          <div className="carousel-3 lg:mx-auto lg:w-9/12">
            <div className="lg:p-10 lg:text-center">
              <p className="lg:text-6xl text-4xl my-5 font-bold font-Finlandica flex justify-center"><AiTwotoneStar fill="orange"/>Our Shining Stars<AiTwotoneStar fill="orange"/></p>
              <p className="text-center font-bold text-3xl">Class XII</p>
              <div className="lg:grid-cols-3 lg:grid lg:gap-5 gap-2 mt-5">
                <div className="my-5 lg:my-0 flex lg:block lg:min-w-4/12 lg:min-h-11/12 bg-purple-400 rounded-lg shadow-lg shadow-purple-600 py-10">
                  <img src="./aadi.jpeg" className="rounded-full h-32 w-32 mt-5 lg:mt-0 lg:h-48 lg:w-48 mx-auto "/>
                  <div>
                  <div style={mounted && theme === 'light' ? lightButtonStyles : darkButtonStyles} className="font-semibold text-sm lg:mt-10 py-2 lg:text-base  lg:block bg-gray-200 w-11/12 px-10 mx-auto text-gray-900 rounded-lg">
                    <p className="text-sm lg:text-2xl text-bold font-semibold font-Finlandica text-gray-900">Aadi Jain</p>
                    <p>English - 99</p>
                    <p>Physics - 98</p>
                    <p>Chemistry - 100</p>
                    <p>Maths - 100</p>
                    <p>Computer Science - 100</p>
                    <p className="font-bold">TOTAL - 497/500</p>
                  </div>
                  </div>
                </div>
                <div className="my-5 lg:my-0 flex lg:block lg:min-w-4/12 lg:min-h-11/12 bg-red-400 rounded-lg shadow-lg shadow-red-600 py-10">
                  <img src="./users/user-boy.png" className="rounded-full h-32 w-32 mt-5 lg:mt-0 lg:h-48 lg:w-48 mx-auto "/>
                  <div>
                  <div style={mounted && theme === 'light' ? lightButtonStyles : darkButtonStyles} className="font-semibold text-sm lg:mt-10 py-2 lg:text-base  lg:block bg-gray-200 w-11/12 px-10 mx-auto text-gray-900 rounded-lg">
                  <p className="text-sm lg:text-2xl text-bold font-semibold text-gray-900 font-Finlandica">Random Sharma</p>
                    <p>English - 99</p>
                    <p>Maths - 97</p>
                    <p>Economics - 99</p>
                    <p>Accountancy - 99</p>
                    <p>Business Studies - 99</p>
                    <p className="font-bold">TOTAL - 493/500</p>
                  </div>
                  </div>
                </div>
                <div className="my-5 lg:my-0 flex lg:block lg:min-w-4/12 lg:min-h-11/12 bg-green-400 rounded-lg shadow-lg shadow-green-600 py-10">
                  <img src="./phineas.png" className="rounded-full h-32 w-32 mt-5 lg:mt-0 lg:h-48 lg:w-48 mx-auto "/>
                  <div>
                  <div style={mounted && theme === 'light' ? lightButtonStyles : darkButtonStyles} className="font-semibold text-sm lg:mt-10 py-2 lg:text-base  lg:block bg-gray-200 w-11/12 px-10 mx-auto text-gray-900 rounded-lg">
                    <p className="text-sm lg:text-2xl text-bold font-semibold text-gray-900 font-Finlandica">Phineas</p>
                    <p>English - 97</p>
                    <p>Maths - 95</p>
                    <p>Geography - 99</p>
                    <p>Political Science - 99</p>
                    <p>Economics - 99</p>
                    <p className="font-bold">TOTAL - 489/500</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-3 lg:mx-auto lg:w-9/12">
            <div className="lg:p-10 lg:text-center">
              <p className="text-center font-bold text-3xl">Class X</p>
              <div className="lg:grid-cols-3 lg:grid lg:gap-5 gap-2 mt-5 mb-32 ">
                <div className="flex lg:block lg:min-w-4/12 bg-purple-400 rounded-lg shadow-lg shadow-purple-600 py-10">
                  <img src="./users/user-boy.png" className="rounded-full h-32 w-32 mt-5 lg:mt-0 lg:h-48 lg:w-48 mx-auto "/>
                  <div>
                    <div style={mounted && theme === 'light' ? lightButtonStyles : darkButtonStyles} className="font-semibold text-sm lg:mt-10 py-2 lg:text-base  lg:block bg-gray-200 w-11/12 px-10 mx-auto text-gray-900 rounded-lg">
                      <p className="text-sm lg:text-2xl text-bold font-semibold text-gray-900 font-Finlandica">Siddharth Sharma</p>
                      <p>English - 99</p>
                      <p>Hindi - 98</p>
                      <p>Maths - 100</p>
                      <p>Science - 100</p>
                      <p>Social Science - 100</p>
                      <p className="font-bold">TOTAL - 497/500</p>
                    </div>
                  </div>
                </div>
                <div className="my-5 lg:my-0 flex lg:block lg:min-w-4/12 lg:min-h-11/12 bg-red-400 rounded-lg shadow-lg shadow-red-600 py-10">
                  <img src="./Ferb.png" className="rounded-full h-32 w-32 mt-5 lg:mt-0 lg:h-48 lg:w-48 mx-auto "/>
                  <div>
                    <div style={mounted && theme === 'light' ? lightButtonStyles : darkButtonStyles} className="font-semibold text-sm lg:mt-10 py-2 lg:text-base  lg:block bg-gray-200 w-11/12 px-10 mx-auto text-gray-900 rounded-lg">
                      <p className="text-sm lg:text-2xl text-bold font-semibold text-gray-900 font-Finlandica">Ferb</p>
                      <p>English - 99</p>
                      <p>Hindi - 97</p>
                      <p>Maths - 99</p>
                      <p>Science - 99</p>
                      <p>Social Science - 99</p>
                      <p className="font-bold">TOTAL - 493/500</p>
                    </div>
                  </div>
                </div>
                <div className="my-5 lg:my-0 flex lg:block lg:min-w-4/12 lg:min-h-11/12 bg-green-400 rounded-lg shadow-lg shadow-green-600 py-10">
                  <img src="./dekisugi.png" className="rounded-full h-32 w-32 mt-5 lg:mt-0 lg:h-48 lg:w-48 mx-auto "/>
                  <div>
                    <div style={mounted && theme === 'light' ? lightButtonStyles : darkButtonStyles} className="font-semibold text-sm lg:mt-10 py-2 lg:text-base  lg:block bg-gray-200 w-11/12 px-10 mx-auto text-gray-900 rounded-lg">
                      <p className="text-sm lg:text-2xl text-bold font-semibold text-gray-900 font-Finlandica">Hidetoshi Dekisugi</p>
                      <p>English - 97</p>
                      <p>Hindi - 95</p>
                      <p>Maths - 99</p>
                      <p>Science - 99</p>
                      <p>Social Science - 99</p>
                      <p className="font-bold">TOTAL - 489/500</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>        
      </div>
    </ContainerBlock>
  )
}
