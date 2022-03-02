import React from 'react'
import {Code,Pre,Explanation} from '../../../ui-lib/lib'

export const SVGWithoutD3Description = () => {
    return (
        <Explanation>
            <Pre>
                <Code>
                    <span>{'<svg>'}</span>
                    <br/>
                    <span>{'    <circle style={{fill:"#FFB900"}} stroke="black" cx="900" cy="100" r="48"></circle>'}</span>
                    <br/>
                    <span>{'<svg>'}</span>
                </Code>
            </Pre>
        </Explanation>
    )
}

