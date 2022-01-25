import React from 'react'
import { KOInteractive } from './KOInteractive'
import {PEPSIInteractive} from './PEPSIInteractive'
import {APPLInteractive} from './APPLInteractive'
import {PGInteractive} from './PGInteractive'

export const InteractiveLineChart = ({
    width,
    height,
    margin,
}) => (
    <>
        <KOInteractive
            width={width}
            height={height}
            margin={margin}
        />
        <PEPSIInteractive
            width={width}
            height={height}
            margin={margin}
        />
        <APPLInteractive
            width={width}
            height={height}
            margin={margin}
        />
        <PGInteractive
            width={width}
            height={height}
            margin={margin}
        />
    </>
)

