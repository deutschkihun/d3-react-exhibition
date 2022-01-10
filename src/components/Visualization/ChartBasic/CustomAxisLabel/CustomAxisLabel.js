import React from 'react'
import {AxisLabel} from './AxisLabel'
import {AxisLabelAdvance} from './AxisLabelAdvance'

export const CustomAxisLabel = ({
    width,
    height,
    margin,
    pointer,
    band,
}) => (
    <>
        <AxisLabel
            width={width}
            height={height}
            margin={margin}
            band={band}
        />
        <AxisLabelAdvance
            width={width}
            height={height}
            margin={margin}
            pointer={pointer}
        />
    </>
)

