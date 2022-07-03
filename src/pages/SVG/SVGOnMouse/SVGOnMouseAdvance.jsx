import React, { useState, useCallback, useRef } from 'react'

export function SVGOnMouseAdvance({ width, height }) {
  const init = { x: width / 2, y: height / 2 }
  const MouseMoveRefAdvance = useRef(null)
  const [mousePosition, setMousePosition] = useState(init)
  const handleMouseMove = useCallback(
    e => {
      if (MouseMoveRefAdvance) {
        const leftOffSet = MouseMoveRefAdvance.current.getBoundingClientRect().left
        const TopOffSet = MouseMoveRefAdvance.current.getBoundingClientRect().top
        const { clientX, clientY } = e
        setMousePosition({
          x: clientX - leftOffSet,
          y: clientY - TopOffSet,
        })
      }
    },
    [MouseMoveRefAdvance, setMousePosition],
  )

  return (
    <svg viewBox="0 0 700 700" ref={MouseMoveRefAdvance} onMouseMove={handleMouseMove}>
      <defs>
        <pattern id="bg-pattern3" x="0" y="0" width="0.1" height="0.1">
          <svg xmlns="http://www.w3.org/2000/svg">
            <path
              d="M138.61,133a29.89,29.89,0,1,1,21.14-8.75A29.72,29.72,0,0,1,138.61,133Zm0-55.38a25.49,25.49,0,1,0,18,7.46A25.32,25.32,0,0,0,138.61,77.63Z"
              transform="translate(-107 -64)"
            />
            <g>
              <circle className="right-eye" cx="19.31" cy="41.98" r="4.69" />
              <circle className="left-eye" cx="43.8" cy="41.98" r="4.69" />
            </g>
            <path
              d="M138.61,124.88h-.05a21.76,21.76,0,0,1-16.19-7.24l2.47-2.21a18.44,18.44,0,0,0,13.72,6.14h.05a18.44,18.44,0,0,0,13.72-6.14l2.46,2.21A21.73,21.73,0,0,1,138.61,124.88Z"
              transform="translate(-107 -64)"
            />
            <path
              d="M154.28,72.27a17.56,17.56,0,0,0-3.94.44c-1.76-5-8.37-8.71-16.25-8.71-9.15,0-16.58,5-16.72,11.2C111.23,77.38,107,82,107,87.23c0,7.4,8.32,13.4,18.59,13.4,6.84,0,12.82-2.66,16-6.63a16.61,16.61,0,0,0,12.65,5.53C163,99.53,170,93.43,170,85.9S163,72.27,154.28,72.27Z"
              transform="translate(-107 -64)"
            />
          </svg>
        </pattern>
        <mask id="mask-glass">
          <circle cx={mousePosition.x} cy={mousePosition.y} r="60" fill="#fff" />
        </mask>
      </defs>
      <g mask="url(#mask-glass)">
        <rect className="bg-rect" x="0" y="0" width="100%" height="100%" fill="url(#bg-pattern3)" />
      </g>
    </svg>
  )
}
