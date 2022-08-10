import React, { useState } from "react"
import ContainerBlock from "../components/ContainerBlock"

export default function Home() {

  const [carouselIndex, setCarouselIndex] = useState(1)


  

  return(
    <ContainerBlock>
      <div>
        <div className="carousels">
          <div className="carousel-1">

          </div>
        </div>
      </div>
    </ContainerBlock>
  )
}
