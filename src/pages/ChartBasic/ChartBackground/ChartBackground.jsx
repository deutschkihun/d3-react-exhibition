import React from 'react'
import {Plain} from './Plain'
import { GGplot2 } from './GGplot2'
import { Ipsum } from './Ipsum'
import { DarkMode } from './DarkMode'


export const ChartBackground = ({
    width,
    height,
    margin,
}) => (
    <>
        <Plain
            width={width}
            height={height}
            margin={margin}
        />
         <GGplot2
            width={width}
            height={height}
            margin={margin}
        />
         <Ipsum
            width={width}
            height={height}
            margin={margin}
        />
         <DarkMode
            width={width}
            height={height}
            margin={margin}
        />
    </>
)

