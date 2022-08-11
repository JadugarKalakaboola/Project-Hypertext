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
      <div className="py-5">
        <div style={pressedButtonStyles} className="carousels flex lg:w-8/12 w-11/12 mx-auto rounded-lg">
          <div className="switch-left flex flex-col justify-center ml-3 cursor-pointer" onClick={prevSlide}><BsArrowLeftShort style={pressedButtonStyles} className="rounded-full" size={35}/></div>
          {carouselIndex === 1 && <div className="carousel-1 mx-auto lg:w-9/12 lg:h-[75vh]">
            <div className="p-10 text-center">
              <p className="text-3xl font-bold font-Finlandica">Welcome to Army Public School, Delhi Cantt</p>
              <img src="./apsdc-img.jpg" className="mx-auto pt-5 rounded-lg w-11/12 h-9/12"/>
            </div>
          </div>}
          
          {carouselIndex === 2 && <div className="carousel-3 lg:mx-auto lg:w-9/12 lg:h-[75vh]">
            <div className="lg:p-10 lg:text-center">
              <p className="lg:text-4xl font-bold font-Finlandica flex justify-center"><AiTwotoneStar fill="orange"/>Our Shining Stars<AiTwotoneStar fill="orange"/></p>
              <p className="text-center">Class XII</p>
              <div className="lg:grid-cols-3 lg:grid lg:gap-5 gap-2 mt-5">
                <div className="flex lg:block lg:min-w-4/12 lg:min-h-11/12 bg-purple-400 rounded-lg shadow-lg shadow-purple-600 py-10">
                  <img src="./aadi.jpeg" className="rounded-full h-24 w-24 lg:h-auto lg:w-9/12 mx-auto "/>
                  <div>
                  <p className="text-sm lg:text-2xl text-bold font-semibold text-gray-200 font-Finlandica">Aadi Jain</p>
                  <div className="font-semibold text-sm lg:text-base flex flex-wrap lg:block">
                    <p>English - 99</p>
                    <p>Physics - 98</p>
                    <p>Chemistry - 100</p>
                    <p>Maths - 100</p>
                    <p>Computer Science - 100</p>
                    <p className="font-bold">TOTAL - 497/500</p>
                  </div>
                  </div>
                </div>
                <div className="flex lg:block lg:min-w-4/12 lg:min-h-11/12 bg-red-400 rounded-lg shadow-lg shadow-red-600 py-10">
                  <img src="./users/user-boy.png" className="rounded-full h-24 w-24 lg:h-auto lg:w-9/12 mx-auto "/>
                  <div>
                  <p className="text-sm lg:text-2xl text-bold font-semibold text-gray-200 font-Finlandica">Random Sharma</p>
                  <div className="font-semibold text-sm lg:text-base flex flex-wrap lg:block">
                    <p>English - 99</p>
                    <p>Maths - 97</p>
                    <p>Economics - 99</p>
                    <p>Accountancy - 99</p>
                    <p>Business Studies - 99</p>
                    <p className="font-bold">TOTAL - 493/500</p>
                  </div>
                  </div>
                </div>
                <div className="flex lg:block lg:min-w-4/12 lg:min-h-11/12 bg-green-400 rounded-lg shadow-lg shadow-green-600 py-10">
                  <img src="./phineas.png" className="rounded-full h-24 w-24 lg:h-auto lg:w-9/12 mx-auto "/>
                  <div>
                  <p className="text-sm lg:text-2xl text-bold font-semibold text-gray-200 font-Finlandica">Phineas</p>
                  <div className="font-semibold text-sm lg:text-base flex flex-wrap lg:block">
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
          </div>}
          {carouselIndex === 3 && <div className="carousel-3 lg:mx-auto lg:w-9/12 lg:h-[75vh]">
            <div className="lg:p-10 lg:text-center">
              <p className="lg:text-4xl font-bold font-Finlandica flex justify-center"><AiTwotoneStar fill="orange"/>Our Shining Stars<AiTwotoneStar fill="orange"/></p>
              <p className="text-center">Class X</p>
              <div className="lg:grid-cols-3 lg:grid lg:gap-5 gap-2 mt-5">
                <div className="flex lg:block lg:min-w-4/12 lg:min-h-11/12 bg-purple-400 rounded-lg shadow-lg shadow-purple-600 py-10">
                  <img src="./users/user-boy.png" className="rounded-full h-24 w-24 lg:h-auto lg:w-9/12 mx-auto "/>
                  <div>
                  <p className="text-sm lg:text-2xl text-bold font-semibold text-gray-200 font-Finlandica">Siddharth Sharma</p>
                  <div className="font-semibold text-sm lg:text-base flex flex-wrap lg:block">
                    <p>English - 99</p>
                    <p>Hindi - 98</p>
                    <p>Maths - 100</p>
                    <p>Science - 100</p>
                    <p>Social Science - 100</p>
                    <p className="font-bold">TOTAL - 497/500</p>
                  </div>
                  </div>
                </div>
                <div className="flex lg:block lg:min-w-4/12 lg:min-h-11/12 bg-red-400 rounded-lg shadow-lg shadow-red-600 py-10">
                  <img src="./Ferb.png" className="rounded-full h-24 w-24 lg:h-auto lg:w-9/12 mx-auto "/>
                  <div>
                  <p className="text-sm lg:text-2xl text-bold font-semibold text-gray-200 font-Finlandica">Ferb</p>
                  <div className="font-semibold text-sm lg:text-base flex flex-wrap lg:block">
                    <p>English - 99</p>
                    <p>Hindi - 97</p>
                    <p>Maths - 99</p>
                    <p>Science - 99</p>
                    <p>Social Science - 99</p>
                    <p className="font-bold">TOTAL - 493/500</p>
                  </div>
                  </div>
                </div>
                <div className="flex lg:block lg:min-w-4/12 lg:min-h-11/12 bg-green-400 rounded-lg shadow-lg shadow-green-600 py-10">
                  <img src="./dekisugi.png" className="rounded-full h-24 w-24 lg:h-auto lg:w-9/12 mx-auto "/>
                  <div>
                  <p className="text-sm lg:text-2xl text-bold font-semibold text-gray-200 font-Finlandica">Hidetoshi Dekisugi</p>
                  <div className="font-semibold text-sm lg:text-base flex flex-wrap lg:block">
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
          </div>}
          <div className="switch-right flex flex-col justify-center mr-3 cursor-pointer" onClick={nextSlide}><BsArrowRightShort style={pressedButtonStyles} className="rounded-full" size={35}/></div>
        </div>
        <div className=" w-11/12 lg:w-9/12 mx-auto">
            <div className="p-10 lg:text-center">
              <p className="lg:text-5xl text-orange-500 font-bold font-Finlandica">Proud Moment</p>
              <div className="lg:flex py-5 justify-between">
                <div className="w-5/12">
                  <p className="lg:text-xl font-bold font-Finlandica text-green-500">More than 30% students have scored more than 90% in Class XII</p>
                  <div style={buttonStyles} className="lg:mx-auto p-5 flex justify-center rounded-3xl">
                    <DoughnutChart/>
                  </div>
                </div>
                <div className="w-5/12">
                  <p className="lg:text-xl font-bold font-Finlandica text-green-500">More than 45% students have scored more than 90% in Class XII</p>
                  <div style={buttonStyles} className="lg:mx-auto p-5 flex justify-center rounded-3xl">
                    <DoughnutChart10 />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </ContainerBlock>
  )
}
