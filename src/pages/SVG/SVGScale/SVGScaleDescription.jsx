/* eslint-disable no-template-curly-in-string */
import React from 'react'
import { Explanation, Pre } from '../../../ui-lib/lib'

export function SVGScaleDescription() {
  return (
    <Explanation>
      <Pre>
        <code>
          <span>{'  const init = {x: width / 2, y: height / 2} '}</span>
          <br />
          <span>{'  const MouseMoveRef = useRef(null)'}</span>
          <br />
          <span>{'  const [mousePosition, setMousePosition] = useState(init)'}</span>
          <br />
          <span>{'  const handleMouseMove = useCallback('}</span>
          <br />
          <span>{'           (e) => {'}</span>
          <br />
          <span>{'                  const leftOffSet = MouseMoveRef?.current?.getBoundingClientRect().left'}</span>
          <br />
          <span>{'                  const TopOffSet = MouseMoveRef?.current?.getBoundingClientRect().top'}</span>
          <br />
          <span>{'                  const { clientX, clientY } = e'}</span>
          <br />
          <span>{'                        setMousePosition({'}</span>
          <br />
          <span>{'                                x: clientX - leftOffSet'}</span>
          <br />
          <span>{'                                y: clientY - TopOffSet'}</span>
          <br />
          <span>{'             })'}</span>
          <br />
          <span>{'                 [MouseMoveRef,setMousePosition]'}</span>
          <br />
          <span>{'             );'}</span>
          <br />
          <span>{'   return ('}</span>
          <br />
          <span>{'     <>'}</span>
          <br />
          <span>
            {'       <svg ref={MouseMoveRef} width="100%" height={height * 2} onMouseMove={handleMouseMove}>'}
          </span>
          <br />
          <span>{'           <circle cx={mousePosition.x} cy={mousePosition.y} r={radius}></circle>'}</span>
          <br />
          <span>{'       </svg>'}</span>
          <br />
          <span>{'     </>'}</span>
          <br />
          <span>{'   )'}</span>
        </code>
      </Pre>
    </Explanation>
  )
}
