import React from 'react'
import { KOArea } from './KOArea'
import { PEPSIArea } from './PEPSIArea'
import {APPLArea} from './APPLArea'
import {PGArea} from './PGArea'


export const AreaChartBasic = ({
    width,
    height,
    margin,
}) => (
    <>
        <KOArea
            width={width}
            height={height}
            margin={margin}
        />

        <PEPSIArea
            width={width}
            height={height}
            margin={margin}
        />
        <APPLArea
            width={width}
            height={height}
            margin={margin}
        />
         <PGArea
            width={width}
            height={height}
            margin={margin}
        />
    </>
)

