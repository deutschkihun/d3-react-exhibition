import React, {useState,useCallback} from 'react'

export const SVGOnMouse = ({width,height,radius}) => {
    const init = {x: width / 2, y: height / 2} 
    const [mousePosition, setMousePosition] = useState(init)
    const handleMouseMove = useCallback(e => {
        const { clientX, clientY } = e;
        console.log( {clientX, clientY})
        setMousePosition({x: clientX, y:clientY})
    }, [setMousePosition])

    // proportion calc 

  return (
      <>
        <svg width="100%" height={height * 2} onMouseMove={handleMouseMove}> 
            <circle cx={mousePosition.x} cy={mousePosition.y} r={radius}></circle>
        </svg>
      </>
  )
}

