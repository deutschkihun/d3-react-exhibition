import React, {useState} from 'react'

export const SVGOnMouse = ({width,height,centerX,centerY,radius}) => {
    const init = {x: width / 2, y: height / 2} 
    const [mousePosition, setMousePosition] = useState(init)
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        console.log( {clientX, clientY})
        setMousePosition({x: clientX, y:clientY})
    }

    console.log(width,height,centerX,centerY)

  return (
      <>
        <svg width={width} height={height} onMouseMove={handleMouseMove}> 
                <circle cx={mousePosition.x} cy={mousePosition.y} r={radius}></circle>
        </svg>
    </>
  )
}

